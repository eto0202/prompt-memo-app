import { v4 as uuidv4 } from "uuid";
import type { PromptMemo, Lora } from "../types/PromptMemo";

// 日付生成ヘルパー (toLocaleDateStringを使用)
const getDate = (daysAgo: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toLocaleDateString();
};

// 10個以上のLoraを持つデータを生成するためのヘルパー
const generateManyLoras = (count: number): Lora[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: uuidv4(),
    name: `Style LoRA Type-${String.fromCharCode(65 + i)}`,
    url: `https://civitai.com/models/${1000 + i}/style-lora-${i}`,
  }));
};

export const DUMMY_MEMOS: PromptMemo[] = [
  // 1. フル入力のデータ (SPY×FAMILY アーニャ風)
  {
    id: uuidv4(),
    createdAt: getDate(1),
    updatedAt: getDate(0),
    promptName: "Anya Forger Style",
    thumbnailUrl: "https://placehold.jp/150x150.png?text=Anya",
    mainPrompt:
      "masterpiece, best quality, 1girl, solo, anya forger, pink hair, green eyes, hair ornament, looking at viewer, smile",
    subPrompt:
      "Costume: eden academy uniform, black dress, white shirt, gold trim\nBackground: indoors, classroom, elegant furniture",
    negativePrompt:
      "worst quality, low quality, normal quality, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped",
    loraPrompt: "<lora:anya_v2:0.8>, <lora:spy_family_style:0.6>",
    loras: [
      {
        id: uuidv4(),
        name: "Anya V2",
        url: "https://civitai.com/models/1234/anya-v2",
      },
      {
        id: uuidv4(),
        name: "Spy Family Style",
        url: "https://civitai.com/models/5678/spy-style",
      },
    ],
    description: "アーニャの基本プロンプト。制服と私服でサブプロンプトを切り替えて使用する。",
  },

  // 2. Lora大量使用データ (条件: 10個以上)
  {
    id: uuidv4(),
    createdAt: getDate(2),
    updatedAt: getDate(2),
    promptName: "Cyberpunk Mecha City (Heavy Lora)",
    thumbnailUrl: "https://placehold.jp/150x150.png?text=Mecha",
    mainPrompt:
      "scifi, cyberpunk, mecha, robot, glowing lights, neon city, rain, reflection, futuristic",
    subPrompt: "Theme: night, dark atmosphere\nCamera: wide angle, from below",
    negativePrompt: "organic, natural, trees, flowers, sun, day",
    loraPrompt: "<lora:mecha_parts_A:1>, <lora:neon_glow:0.5>, <lora:rain_effect:0.8>...",
    loras: generateManyLoras(12), // 12個のLoraを生成
    description: "メカと背景の質感を高めるために大量のLoraを組み合わせています。VRAM消費に注意。",
  },

  // 3. サブプロンプトなし
  {
    id: uuidv4(),
    createdAt: getDate(3),
    updatedAt: getDate(3),
    promptName: "Simple Portrait",
    thumbnailUrl: "https://placehold.jp/150x150.png?text=Portrait",
    mainPrompt: "1girl, upper body, facing viewer, white background, simple",
    subPrompt: "",
    negativePrompt: "nsfw, low quality",
    loraPrompt: "",
    loras: [],
    description: "テスト用のシンプルなポートレート構成。",
  },

  // 4. 画像なし (プレースホルダー確認用)
  {
    id: uuidv4(),
    createdAt: getDate(4),
    updatedAt: getDate(4),
    promptName: "No Image Data",
    thumbnailUrl: "",
    mainPrompt: "landscape, mountain, snow, blue sky",
    subPrompt: "Season: winter",
    negativePrompt: "",
    loraPrompt: "",
    loras: [
      {
        id: uuidv4(),
        name: "Landscape Enhancer",
        url: "https://civitai.com/models/999/landscape",
      },
    ],
    description: "サムネイル画像が設定されていない場合の表示テスト。",
  },

  // 5. 完全に空に近いデータ
  {
    id: uuidv4(),
    createdAt: getDate(5),
    updatedAt: getDate(5),
    promptName: "",
    thumbnailUrl: "",
    mainPrompt: "",
    subPrompt: "",
    negativePrompt: "",
    loraPrompt: "",
    loras: [],
    description: "",
  },

  // 6 ~ 20. バリエーションデータ (以下ループ的に生成)
  ...Array.from({ length: 15 }, (_, i) => ({
    id: uuidv4(),
    createdAt: getDate(6 + i),
    updatedAt: getDate(6 + i),
    promptName: `Sample Data ${i + 6}`,
    thumbnailUrl: `https://placehold.jp/150x150.png?text=Data${i + 6}`,
    mainPrompt: `1girl, sample prompt ${i + 6}, quality: ${i % 2 === 0 ? "high" : "best"}`,
    subPrompt: i % 3 === 0 ? "costume: swimsuit" : "", // 3つに1つはサブプロンプトあり
    negativePrompt: "low quality, bad anatomy",
    loraPrompt: i % 2 === 0 ? `<lora:sample_${i}:0.7>` : "",
    loras:
      i % 2 === 0
        ? [
            {
              id: uuidv4(),
              name: `Sample LoRA ${i}`,
              url: `https://example.com/lora/${i}`,
            },
          ]
        : [], // 2つに1つはLoraあり/なし
    description:
      i % 5 === 0 ? "" : `これはサンプルデータ番号${i + 6}です。適当な説明文が入ります。`,
  })),
];
