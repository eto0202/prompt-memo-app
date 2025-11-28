import type { Lora } from "../types/PromptMemo";
import { v4 as uuidv4 } from "uuid";

export const LORA_TEMPLATE = `
---Name---
(Lora Name)
---URL---
(Lora URL)
`;

export function lorasToString(loras: Lora[]): string {
  if (!loras || loras.length === 0) return "";
  return loras.map((lora) => `---Name---\n${lora.name}\n---URL---\n${lora.url}`).join("\n");
}

export function stringToLoras(text: string): Lora[] {
  const loras: Lora[] = [];

  // ---Name--- の後に来る任意の文字（改行含む）をグループ1としてキャプチャ
  // その後に ---URL--- が来て、その後に続く任意の文字（改行含む）をグループ2としてキャプチャ
  // 次の ---Name--- が来るか、文字列の末尾までを一つのペアとして扱う
  // 'g'フラグで全体から繰り返し検索する
  const regex = /---Name---\s*([\s\S]*?)\s*---URL---\s*([\s\S]*?)(?=(?:---Name---)|$)/g;

  let match;
  while ((match = regex.exec(text)) !== null) {
    const name = match[1].trim();
    const url = match[2].trim();

    if (name || url) {
      loras.push({
        id: uuidv4(),
        name: name || "No Name",
        url: url || "",
      });
    }
  }

  return loras;
}
