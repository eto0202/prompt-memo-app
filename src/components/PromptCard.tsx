import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";

type Props = {
  id: string;
  date: string;
  name?: string;
  imageUrl?: string;
  mainPrompt?: string;
  subPrompt?: string;
  negativePrompt?: string;
  lora?: string;
  loraUrl?: string;
  others?: string;
};

export function PromptCard(props: Props) {
  return (
    <Card sx={{ width: 440 }}>
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          image={props.imageUrl}
          alt={props.name}
          sx={{
            height: 150,
            width: 150,
          }}
        ></CardMedia>
        <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Box color="text.secondary" sx={{ m: "0 0 0 auto" }}>
            {props.date}
          </Box>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            <Box>{props.mainPrompt}</Box>
            <Box>{props.subPrompt}</Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="text" sx={{ m: "0 0 0 auto" }}>
          copy
        </Button>
      </CardActions>
    </Card>
  );
}
