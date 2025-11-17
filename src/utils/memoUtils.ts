import { v4 as uuidv4 } from "uuid";
import type { PromptMemo } from "../types/PromptMemo";

export function createNewPromptMemo(): PromptMemo {
  const now = new Date().toLocaleDateString();

  return {
    id: uuidv4(),
    createdAt: now,
    updatedAt: now,

    characterName: "No Name",
    thumbnailUrl: "",

    mainPrompt: "No Data",
    subPrompts: [],
    negativePrompt: "",

    loras: [],

    description: "",
  };
}
