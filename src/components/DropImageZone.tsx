import { Box, Button } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

export function ImageZone() {
  return (
    <Box
      sx={{
        display: "flex",
        border: "1px dotted gray",
        borderRadius: "4px",
        width: "50%",
        aspectRatio: "1 / 1",
      }}
    >
      <Button
        variant="text"
        size="small"
        sx={{ width: "100%" }}
        startIcon={<ImageIcon></ImageIcon>}
      >
        Select Image
      </Button>
    </Box>
  );
}
