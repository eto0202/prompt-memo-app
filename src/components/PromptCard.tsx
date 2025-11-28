import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import type { PromptMemo } from "../types/PromptMemo";

type Props = {
  memo: PromptMemo;
  onSelect: () => void;
  onDelete: () => void;
};

export function PromptCard({ memo, onSelect, onDelete }: Props) {
  return (
    <Card sx={{ width: 440 }}>
      <CardActionArea sx={{ display: "flex", alignItems: "flex-start" }} onClick={onSelect}>
        <CardMedia
          component="img"
          image={
            memo.thumbnailUrl || "https://placehold.jp/bbbbbb/ffffff/150x150.png?text=No%20Image"
          }
          alt={memo.promptName}
          sx={{
            height: 150,
            width: 150,
            flexShrink: 0,
          }}
        ></CardMedia>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            minWidth: 0,
          }}
        >
          <Box color="text.secondary" sx={{ textAlign: "right" }}>
            {memo.updatedAt}
          </Box>
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {memo.promptName || "No Name"}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
            }}
          >
            {memo.mainPrompt || "No Prompt"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          type="button"
          size="small"
          variant="text"
          color="error"
          sx={{ m: "0 auto 0 0" }}
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          delete
        </Button>
        <Button type="button" size="small" variant="text" sx={{ m: "0 0 0 auto" }}>
          copy
        </Button>
      </CardActions>
    </Card>
  );
}
