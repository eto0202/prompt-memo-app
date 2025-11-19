import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CustomTextField } from "./CustomTextField";
import { ImageZone } from "./DropImageZone";
import type { PromptMemo } from "../types/PromptMemo";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type Props = {
  memo?: PromptMemo;
};

export function DetailArea({ memo }: Props) {
  if (!memo) {
    return <Box>カードを選択してください</Box>;
  }

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
      <CustomTextField id="PromptName" label="PromptName" value={memo.characterName} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <CustomTextField
          id="MainPrompt"
          label="MainPrompt"
          value={memo.mainPrompt}
          multiline
          rows={3}
          isCopy
          onZoom
        />
        <CustomTextField id="SubPrompt" label="SubPrompt" multiline rows={2} />
        <CustomTextField
          id="NegativePrompt"
          label="NegativePrompt"
          value={memo.negativePrompt}
          multiline
          rows={2}
        />
        <CustomTextField id="Lora" label="Lora" multiline rows={2} />
        <Button variant="outlined" endIcon={<NavigateNextIcon></NavigateNextIcon>}>
          Lora URL
        </Button>
      </Box>
      <CustomTextField
        id="description"
        label="description"
        value={memo.description}
        multiline
        rows={2}
      />
      <Button size="small" variant="contained" sx={{ width: "100px", m: "0 auto" }}>
        copy
      </Button>
    </Box>
  );
}
