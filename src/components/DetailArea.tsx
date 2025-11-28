import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CustomTextField } from "./CustomTextField";
import { ImageZone } from "./DropImageZone";
import type { Lora, PromptMemo } from "../types/PromptMemo";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
import { Popper, ToggleButton } from "@mui/material";
import { LoraPopperContents } from "./LoraPopperContents";

type Props = {
  memo?: PromptMemo | undefined;
  onUpdateMemo: (updatedMemo: PromptMemo) => void;
  onUpdateLoras: (memoId: string, newLoras: Lora[]) => void;
};

export function DetailArea({ memo, onUpdateMemo, onUpdateLoras }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selected, setSelected] = useState(false);

  if (!memo) {
    return <Box sx={{ p: 4, textAlign: "center" }}>カードを選択してください</Box>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const updatedMemo = {
      ...memo,
      [name]: value,
    };

    onUpdateMemo(updatedMemo);
  };

  const handlePopperClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "list-popper" : undefined;

  const handleSaveLoras = (newLoras: Lora[]) => {
    if (memo) {
      onUpdateLoras(memo.id, newLoras);
    }
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: "flex", fontSize: 15 }}>
        <Box sx={{ m: "0 0 0 auto" }}>{memo.updatedAt}</Box>
      </Box>
      <ImageZone></ImageZone>
      <CustomTextField
        id="PromptName"
        label="PromptName"
        name="promptName"
        value={memo.promptName}
        onChange={handleChange}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <CustomTextField
          id="MainPrompt"
          label="MainPrompt"
          name="mainPrompt"
          value={memo.mainPrompt}
          onChange={handleChange}
          multiline
          rows={3}
          isCopy
          onZoom
        />
        <CustomTextField
          id="SubPrompt"
          label="SubPrompt"
          name="subPrompt"
          value={memo.subPrompt}
          onChange={handleChange}
          multiline
          rows={2}
          isCopy
          onZoom
        />
        <CustomTextField
          id="NegativePrompt"
          label="NegativePrompt"
          name="negativePrompt"
          value={memo.negativePrompt}
          onChange={handleChange}
          multiline
          rows={2}
          isCopy
          onZoom
        />
        <CustomTextField
          id="LoraPrompt"
          label="LoraPrompt"
          name="loraPrompt"
          value={memo.loraPrompt}
          onChange={handleChange}
          multiline
          rows={2}
          isCopy
          onZoom
        />
        <ToggleButton
          value="loraUrl"
          selected={selected}
          onChange={() => setSelected((prevSelected) => !prevSelected)}
          aria-describedby={id}
          onClick={handlePopperClick}
          color="primary"
          size="small"
          sx={{
            width: "100%",
            position: "relative",
            color: "primary.main",
            borderColor: "primary.main",
            "&.Mui-selected": {
              backgroundColor: "rgba(25, 118, 210, 0.15)",
            },
          }}
        >
          Lora URL
          <NavigateNextIcon sx={{ position: "absolute", right: 0 }}></NavigateNextIcon>
        </ToggleButton>
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          placement="right-end"
          keepMounted
          sx={{ zIndex: 3, pl: 1 }}
        >
          <LoraPopperContents memo={memo} onUpdateLoras={handleSaveLoras}></LoraPopperContents>
        </Popper>
      </Box>
      <CustomTextField
        id="Description"
        label="Description"
        name="description"
        value={memo.description}
        onChange={handleChange}
        multiline
        rows={2}
        isCopy
        onZoom
      />
      <Button size="small" variant="contained" sx={{ width: "100px", m: "0 auto" }}>
        copy
      </Button>
    </Box>
  );
}
