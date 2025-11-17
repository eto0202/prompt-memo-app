export type Lora = {
  id: string;
  name: string; // 空文字を許容
  prompt: string; // 空文字を許容
  url: string; // 空文字を許容
};

export type SubPrompt = {
  id: string;
  category: string; // 例：「服装」「髪型」「背景」など
  prompt: string; // 空文字を許容
};

export type PromptMemo = {
  id: string; // 必須。メモの一意識別子
  createdAt: string; // 必須。作成日時
  updatedAt: string; // 必須。最終更新日時

  characterName: string; // キャラクター名。空文字を許容
  thumbnailUrl: string; // サムネイル画像URL。空文字またはプレースホルダーURL

  mainPrompt: string; // 空文字を許容
  subPrompts: SubPrompt[]; // 空文字を許容
  negativePrompt: string; // 空文字を許容

  loras: Lora[]; // 空文字を許容

  description: string; // 空文字を許容
};
