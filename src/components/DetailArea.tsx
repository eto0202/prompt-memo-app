import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CustomTextField } from "./CustomTextField";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { Link, ListItem } from "@mui/material";
import { ImageZone } from "./DropImageZone";

type Props = {
  id: string;
  name: string;
  propmt: string;
  date: string;
  imageUrl: string;
};

export function DetailArea(props: Props) {
  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: "flex", fontSize: 15 }}>
        <Box>{props.id || "000"}</Box>
        <Box sx={{ m: "0 0 0 auto" }}>{props.date || "2000/02/02"}</Box>
      </Box>
      <ImageZone></ImageZone>
      <CustomTextField id="PromptName" label="PromptName" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <CustomTextField
          id="MainPrompt"
          label="MainPrompt"
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
          multiline
          rows={2}
          isCopy={true}
          isZoom={true}
        />
        <CustomTextField id="Lora" label="Lora" multiline rows={2} isCopy={true} isZoom={true} />
        <List
          component="nav"
          aria-labelledby="loraUrl"
          sx={{
            fontSize: 14,
          }}
          subheader={
            <ListSubheader
              component="div"
              id="loraUrl"
              sx={{
                fontSize: 15,
                py: 0,
                lineHeight: "25px",
              }}
            >
              Lora URL
            </ListSubheader>
          }
        >
          <ListItem>
            <Link href="https://mui.com/material-ui/react-link/">
              https://mui.com/material-ui/react-link/
            </Link>
          </ListItem>
        </List>
      </Box>
      <CustomTextField id="Others" label="Others" multiline rows={2} isZoom={true} />
      <Button size="small" variant="contained" sx={{ width: "100px", m: "0 auto" }}>
        copy
      </Button>
    </Box>
  );
}
