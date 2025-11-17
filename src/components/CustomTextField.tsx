import { Box, IconButton, TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

type Props = TextFieldProps & {
  isCopy?: boolean;
  isZoom?: boolean;
};

export function CustomTextField({ isCopy, isZoom, ...props }: Props) {
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
          aria-label={`copy ${props.label}`}
          size="small"
          disableRipple
          sx={{
            position: "absolute",
            top: 0,
            right: 24,
            zIndex: 1,
            color: "action",
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

      {isZoom && (
        <IconButton
          aria-label={`zoom ${props.label}`}
          size="small"
          disableRipple
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1,
            color: "action",
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
        </IconButton>
      )}
    </Box>
  );
}
