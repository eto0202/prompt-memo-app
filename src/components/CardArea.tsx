import Box from "@mui/material/Box";
import { PromptCard } from "./PromptCard";
import type { PromptMemo } from "../types/PromptMemo";

type Props = {
  memos: PromptMemo[];
  onSelectMemo: (id: string) => void;
};

export function CardArea({ memos, onSelectMemo }: Props) {
  return (
    <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
      {memos.map((memo) => (
        <PromptCard key={memo.id} memo={memo} onClick={() => onSelectMemo(memo.id)}></PromptCard>
      ))}
    </Box>
  );
}
