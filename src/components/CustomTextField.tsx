import { Box, IconButton, Popper, TextField, ToggleButton } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { useSnackbar } from "../contexts/snackbar/useSnackbar";
import { useState } from "react";

type Props = TextFieldProps & {
  isCopy?: boolean;
  onZoom?: boolean;
};

export function CustomTextField({ isCopy, onZoom, ...props }: Props) {
  const { showSnackbar } = useSnackbar();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selected, setSelected] = useState(false);

  const handleCopyClick = async () => {
    if (typeof props.value !== "string" || !props.value) {
      showSnackbar("コピーするテキストがありません。", "warning");
      return;
    }

    try {
      await navigator.clipboard.writeText(props.value);
      showSnackbar(`${props.label} copied!`, "success");
    } catch (err) {
      console.error(err);
      showSnackbar("Failed to copy", "error");
    }
  };

  const handlePopperClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "textFiled-popper" : undefined;

  const copyIconPosition = onZoom ? 24 : 0;

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <TextField
        variant="filled"
        color="primary"
        InputLabelProps={{ shrink: true }}
        fullWidth
        {...props}
        sx={{
          "& .MuiFilledInput-root": {
            backgroundColor: "#f0f2f5",
            border: "1px solid transparent",
            "&.Mui-focused": {
              backgroundColor: "white",
              borderColor: "#c4c4c4",
            },
            "&::before, &::after": {
              display: "none",
            },
          },
        }}
      />
      {isCopy && (
        <IconButton
          onClick={handleCopyClick}
          aria-label={`copy ${props.label}`}
          size="small"
          disableRipple
          sx={{
            position: "absolute",
            top: 0,
            right: copyIconPosition,
            zIndex: 1,
            color: "grey.500",
            "&:hover": {
              color: "primary.main",
              backgroundColor: "transparent",
            },
            "&:active": {
              color: "primary.dark",
            },
            transition: "color 0.2s ease-in-out, transform 0.1s ease-in-out",
          }}
        >
          <ContentCopyIcon
            sx={{
              fontSize: 16,
            }}
          ></ContentCopyIcon>
        </IconButton>
      )}

      {onZoom && (
        <>
          <ToggleButton
            value="zoom"
            selected={selected}
            onChange={() => setSelected((prevSelected) => !prevSelected)}
            aria-label={`zoom ${props.label}`}
            aria-describedby={id}
            size="small"
            onClick={handlePopperClick}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 1,
              color: "grey.500",
              border: "none",
              p: "5px",
              "&:hover": {
                color: "primary.main",
                backgroundColor: "transparent",
              },
              "&:active": {
                color: "primary.dark",
              },
              transition: "color 0.2s ease-in-out, transform 0.1s ease-in-out",
            }}
          >
            <ZoomOutMapIcon
              sx={{
                fontSize: 16,
              }}
            ></ZoomOutMapIcon>
          </ToggleButton>
          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            placement="right"
            keepMounted
            sx={{ zIndex: 3, pl: 1 }}
          >
            <Box
              sx={{ p: 1, boxShadow: 1, borderRadius: 1, bgcolor: "background.paper", width: 400 }}
            >
              <CustomTextField
                id={props.id}
                name={props.name}
                label={props.label}
                value={props.value}
                multiline={props.multiline}
                rows={10}
                isCopy
                onChange={props.onChange}
              ></CustomTextField>
            </Box>
          </Popper>
        </>
      )}
    </Box>
  );
}
