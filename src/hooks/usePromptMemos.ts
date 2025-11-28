import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import type { PromptMemo, Lora } from "../types/PromptMemo";
import { DUMMY_MEMOS } from "../data/DummyMemos";

export type UsePromptMemosResult = {
  memos: PromptMemo[];
  addMemo: () => string;
  updateMemo: (updatedMemo: PromptMemo) => void;
  deleteMemo: (memoId: string) => void;
  updateLoras: (memoId: string, loras: Lora[]) => void;
};

export function usePromptMemos(): UsePromptMemosResult {
  const [memos, setMemos] = useState<PromptMemo[]>(DUMMY_MEMOS);

  const addMemo = useCallback((): string => {
    const now = new Date().toLocaleDateString();
    const newMemo: PromptMemo = {
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,

      promptName: "",
      thumbnailUrl: "",

      mainPrompt: "",
      subPrompt: "",
      negativePrompt: "",
      loraPrompt: "",

      loras: [],

      description: "",
    };

    setMemos((prevMemos) => [newMemo, ...prevMemos]);
    return newMemo.id;
  }, []);

  const updateMemo = useCallback((updatedMemo: PromptMemo) => {
    setMemos((prevMemos) =>
      prevMemos.map((memo) =>
        memo.id === updatedMemo.id
          ? { ...updatedMemo, updatedAt: new Date().toLocaleDateString() }
          : memo
      )
    );
  }, []);

  const deleteMemo = useCallback((memoId: string) => {
    setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== memoId));
  }, []);

  const updateLoras = useCallback((memoId: string, newLoras: Lora[]) => {
    setMemos((prevMemos) =>
      prevMemos.map((memo) => {
        if (memo.id !== memoId) {
          return memo;
        }
        return {
          ...memo,
          loras: newLoras,
          updatedAt: new Date().toLocaleDateString(),
        };
      })
    );
  }, []);

  return { memos, addMemo, updateMemo, deleteMemo, updateLoras };
}
