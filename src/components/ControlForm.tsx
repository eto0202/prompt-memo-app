import { Divider, IconButton, InputBase } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  onAddNewMemo: () => void;
};

export function ControlForm({ onAddNewMemo }: Props) {
  return (
    <Box component="form" sx={{ display: "flex", alignItems: "center" }}>
      <Button
        size="small"
        variant="contained"
        type="button"
        onClick={onAddNewMemo}
        endIcon={<AddIcon></AddIcon>}
      >
        New Propmt
      </Button>
      <InputBase
        sx={{ ml: 2, width: 300 }}
        placeholder="Search"
        type="search"
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="sort">
        <SortIcon></SortIcon>
      </IconButton>
    </Box>
  );
}
