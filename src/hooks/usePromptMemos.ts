import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import type { PromptMemo } from "../types/PromptMemo";
import { DUMMY_MEMOS } from "../data/DummyMemos";

export type UsePromptMemosResult = {
  memos: PromptMemo[];
  addMemo: () => string;
  updateMemo: (updatedMemo: PromptMemo) => void;
  deleteMemo: (id: string) => void;
};

export function UsePromptMemos(): UsePromptMemosResult {
  const [memos, setMemos] = useState<PromptMemo[]>(DUMMY_MEMOS);

  const addMemo = useCallback((): string => {
    const now = new Date().toDateString();
    const newMemo: PromptMemo = {
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,

      characterName: "No Name",
      thumbnailUrl: "",

      mainPrompt: "",
      subPrompts: [],
      negativePrompt: "",

      loras: [],

      description: "",
    };

    setMemos((prevMemos) => [newMemo, ...prevMemos]);
    return newMemo.id;
  }, []);

  const updateMemo = useCallback((updatedMemo: PromptMemo) => {
    setMemos((prevMemos) =>
      prevMemos.map((memo) =>
        memo.id === updatedMemo.id ? { ...updatedMemo, updatedAt: new Date().toDateString() } : memo
      )
    );
  }, []);

  const deleteMemo = useCallback((id: string) => {
    setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id));
  }, []);

  return { memos, addMemo, updateMemo, deleteMemo };
}
