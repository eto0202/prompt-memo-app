import Box from "@mui/material/Box";
import { PromptCard } from "./PromptCard";

const dummyPrompts = [
  {
    id: "001",
    name: "Character A",
    date: "2023/10/01",
    mainPrompt: "1girl, solo, long hair, red eyes...",
    subPrompt: "1girl, solo, long hair, red eyes...",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: "002",
    name: "Character B",
    date: "2023/10/01",
    mainPrompt: "1girl, solo, long hair, red eyes...",
    subPrompt: "1girl, solo, long hair, red eyes...",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: "003",
    name: "Sci-fi Landscape",
    date: "2023/10/01",
    mainPrompt: "1girl, solo, long hair, red eyes...",
    subPrompt: "1girl, solo, long hair, red eyes...",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: "003",
    name: "Sci-fi Landscape",
    date: "2023/10/01",
    mainPrompt: "1girl, solo, long hair, red eyes...",
    subPrompt: "1girl, solo, long hair, red eyes...",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: "003",
    name: "Sci-fi Landscape",
    date: "2023/10/01",
    mainPrompt: "1girl, solo, long hair, red eyes...",
    subPrompt: "1girl, solo, long hair, red eyes...",
    imageUrl: "https://via.placeholder.com/100",
  },
];

export function CardArea() {
  return (
    <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
      {dummyPrompts.map((prompt) => (
        <PromptCard
          key={prompt.id}
          id={prompt.id}
          date={prompt.date}
          name={prompt.name}
          mainPrompt={prompt.mainPrompt}
          subPrompt={prompt.subPrompt}
          imageUrl={prompt.imageUrl}
        ></PromptCard>
      ))}
    </Box>
  );
}
