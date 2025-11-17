import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CustomTextField } from "./CustomTextField";
import { ImageZone } from "./DropImageZone";
import type { PromptMemo } from "../types/PromptMemo";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export function DetailArea(props: PromptMemo) {
  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: "flex", fontSize: 15 }}>
        <Box sx={{ m: "0 0 0 auto" }}>{props.updatedAt}</Box>
      </Box>
      <ImageZone></ImageZone>
      <CustomTextField id="PromptName" label="PromptName" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <CustomTextField
          id="MainPrompt"
          label="MainPrompt"
          value={props.mainPrompt}
          multiline
          rows={3}
          isCopy={true}
          isZoom={true}
        />
        <CustomTextField
          id="SubPrompt"
          label="SubPrompt"
          multiline
          rows={2}
          isCopy={true}
          isZoom={true}
        />
        <CustomTextField
          id="NegativePrompt"
          label="NegativePrompt"
          value={props.negativePrompt}
          multiline
          rows={2}
          isCopy={true}
          isZoom={true}
        />
        <CustomTextField id="Lora" label="Lora" multiline rows={2} isCopy={true} isZoom={true} />
        <Button variant="outlined" endIcon={<NavigateNextIcon></NavigateNextIcon>}>
          Lora URL
        </Button>
      </Box>
      <CustomTextField
        id="description"
        label="description"
        value={props.description}
        multiline
        rows={2}
        isZoom={true}
      />
      <Button size="small" variant="contained" sx={{ width: "100px", m: "0 auto" }}>
        copy
      </Button>
    </Box>
  );
}
