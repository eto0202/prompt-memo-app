import { v4 as uuidv4 } from "uuid";
import type { PromptMemo } from "../types/PromptMemo";

const createDate = (daysAgo: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toDateString();
};

export const DUMMY_MEMOS: PromptMemo[] = [
  {
    id: uuidv4(),
    createdAt: createDate(1),
    updatedAt: createDate(1),
    characterName: "Anya Forger",
    thumbnailUrl: "https://i.imgur.com/3Z3qj9s.png",
    mainPrompt:
      "masterpiece, best quality, 1girl, solo, anya forger, pink hair, green eyes, hair ornament, looking at viewer, smile",
    subPrompts: [
      {
        id: uuidv4(),
        category: "服装",
        prompt: "eden academy uniform, black dress, white shirt, red ribbon",
      },
      { id: uuidv4(), category: "背景", prompt: "in classroom, indoors" },
    ],
    negativePrompt:
      "worst quality, low quality, normal quality, easynegative, bad hands, bad anatomy, text, error, watermark, signature",
    loras: [
      {
        id: uuidv4(),
        name: "Anya Forger LoRA",
        prompt: "<lora:anyaForger_v1:0.8>",
        url: "https://civitai.com/models/8906/anya-forger",
      },
    ],
    description: "SPY×FAMILYのアーニャ・フォージャーのプロンプトです。制服バージョンが基本。",
  },
  {
    id: uuidv4(),
    createdAt: createDate(3),
    updatedAt: createDate(2),
    characterName: "Frieren",
    thumbnailUrl: "https://i.imgur.com/gKjYvRj.jpg",
    mainPrompt:
      "masterpiece, best quality, 1girl, solo, frieren, white hair, long hair, twintails, green eyes, pointy ears, elf",
    subPrompts: [
      {
        id: uuidv4(),
        category: "服装",
        prompt: "white dress, white capelet, gold trim, black belt, long sleeves",
      },
      { id: uuidv4(), category: "ポーズ", prompt: "holding a staff, magic" },
      { id: uuidv4(), category: "背景", prompt: "fantasy, forest, sunlight" },
    ],
    negativePrompt: "worst quality, low quality, easynegative, nsfw, text, watermark",
    loras: [
      {
        id: uuidv4(),
        name: "Frieren LoRA",
        prompt: "<lora:frieren_v2:0.75>",
        url: "https://civitai.com/models/158027/frieren-sousou-no-frieren",
      },
      {
        id: uuidv4(),
        name: "Flat Chest LoRA",
        prompt: "<lora:flatChest_v1:0.5>",
        url: "https://civitai.com/models/12345/flat-chest",
      },
    ],
    description: "葬送のフリーレンの基本プロンプト。杖を持たせるのがポイント。",
  },
  {
    id: uuidv4(),
    createdAt: createDate(5),
    updatedAt: createDate(5),
    characterName: "Realistic Cat",
    thumbnailUrl: "https://i.imgur.com/MbqJ0R6.jpeg",
    mainPrompt:
      "photorealistic, 8k, best quality, a photo of a cute cat, sitting on a wooden floor, soft lighting, detailed fur",
    subPrompts: [], // サブプロンプトがないケース
    negativePrompt: "painting, drawing, illustration, cartoon, anime, 3d render",
    loras: [], // Loraがないケース
    description: "リアルな猫の写真を生成するためのプロンプト。写真系のネガティブプロンプトが重要。",
  },
  {
    id: uuidv4(),
    createdAt: createDate(10),
    updatedAt: createDate(8),
    characterName: "No Name", // 空のカードに近い状態
    thumbnailUrl: "", // 画像が設定されていない状態
    mainPrompt: "No Prompt",
    subPrompts: [],
    negativePrompt: "",
    loras: [],
    description: "",
  },
];
