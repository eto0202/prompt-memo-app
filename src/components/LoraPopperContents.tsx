import {
  Box,
  Button,
  FormHelperText,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  ToggleButton,
} from "@mui/material";
import type { Lora, PromptMemo } from "../types/PromptMemo";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import { CustomTextField } from "./CustomTextField";
import { lorasToString, stringToLoras } from "../utils/textConversion";

type Props = {
  memo: PromptMemo;
  onUpdateLoras: (newLoras: Lora[]) => void;
};

export function LoraPopperContents({ memo, onUpdateLoras }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");

  const handleToggleEdit = () => {
    if (!isEditing) {
      setEditText(lorasToString(memo.loras));
    } else {
      onUpdateLoras(stringToLoras(editText));
    }
    setIsEditing(!isEditing);
  };

  const handCancel = () => {
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 1,
        boxShadow: 3,
        borderRadius: 1,
        bgcolor: "background.paper",
        width: 400,
        maxHeight: 500,
      }}
    >
      <List
        sx={{ overflow: "auto", width: "100%" }}
        subheader={
          <ListSubheader sx={{ lineHeight: 2, display: "flex", pl: 1, gap: 1, bgcolor: "inherit" }}>
            <ToggleButton
              value="edit"
              onChange={handleToggleEdit}
              selected={isEditing}
              color="primary"
              size="small"
              sx={{
                py: 1,
                px: 2,
                color: "primary.main",
                borderColor: "primary.main",
                bgcolor: "background.paper",
                "&.Mui-selected": {
                  bgcolor: "rgba(25, 118, 210, 0.15)",
                },
                ":hover": {
                  bgcolor: "#f5f5f5",
                },
              }}
            >
              {!isEditing ? (
                <>
                  Edit
                  <EditIcon fontSize="small" sx={{ ml: 1 }}></EditIcon>
                </>
              ) : (
                <>
                  Save
                  <SaveIcon fontSize="small" sx={{ ml: 1 }}></SaveIcon>
                </>
              )}
            </ToggleButton>
            {isEditing && (
              <Button variant="outlined" color="error" size="small" onClick={handCancel}>
                Cancel
              </Button>
            )}
          </ListSubheader>
        }
      >
        {isEditing && (
          <Box
            sx={{
              width: "100%",
              p: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <FormHelperText>
              ---Name--- と ---URL--- の区切り文字を使用してください。
            </FormHelperText>
            <CustomTextField
              id="LoraURL"
              label="LoraURL"
              name="LoraURL"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              isCopy
              multiline
              rows={12}
              autoFocus
            ></CustomTextField>
          </Box>
        )}
        {!isEditing &&
          memo.loras.map((lora) => (
            <ListItem key={lora.id}>
              <ListItemButton
                component="a"
                href={lora.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ border: 1, borderColor: "grey.400", borderRadius: 1 }}
              >
                <ListItemText
                  primary={lora.name}
                  secondary={lora.url}
                  slotProps={{ primary: { noWrap: true }, secondary: { noWrap: true } }}
                ></ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
}
