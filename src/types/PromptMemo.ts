export type Lora = {
  id: string;
  name: string; // 空文字を許容
  url: string; // 空文字を許容
};

export type PromptMemo = {
  id: string; // 必須。メモの一意識別子
  createdAt: string; // 必須。作成日時
  updatedAt: string; // 必須。最終更新日時

  promptName: string; // 空文字を許容
  thumbnailUrl: string; // サムネイル画像URL。空文字またはプレースホルダーURL

  mainPrompt: string; // 空文字を許容
  subPrompt: string; // 空文字を許容
  negativePrompt: string; // 空文字を許容
  loraPrompt: string; // 空文字を許容

  loras: Lora[]; // 空文字を許容

  description: string; // 空文字を許容
};
