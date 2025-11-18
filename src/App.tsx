import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import { CardArea } from "./components/CardArea";
import { DetailArea } from "./components/DetailArea";
import { ControlForm } from "./components/ControlForm";
import { useState } from "react";
import { createNewPromptMemo } from "./utils/memoUtils";
import type { PromptMemo } from "./types/PromptMemo";
import { DUMMY_MEMOS } from "./data/DummyMemos";

/*
 * TODO:
 *  - URLリストに追加ボタンと全体をポップアップで表示。
 *  - テーマ変更ボタンを作成。ダーク、ライト、モノクロ。
 *  - コピーボタンを押した際に選択画面をポップアップで表示。
 *  - 拡大ボタンを押した際にTextField全体をポップアップで表示。
 *  - 画像選択機能の実装。
 */

function App() {
  const [memos, setMemos] = useState<PromptMemo[]>(DUMMY_MEMOS);
  const [selectedMemoId, setSelectedMemoId] = useState<string | null>(null);

  const handleAddNewMemo = () => {
    const newMemo = createNewPromptMemo();
    console.log(`createNewPromptMemo`);

    setMemos([newMemo, ...memos]);
    setSelectedMemoId(newMemo.id);
  };

  const handleSelectMemo = (id: string) => {
    setSelectedMemoId(id);
  };

  const selectedMemo = memos.find((memo) => memo.id === selectedMemoId);

  const handleDeleteMemo = (id: string) => {
    const newMemos = memos.filter((memo) => memo.id !== id);
    setMemos(newMemos);
  };

  return (
    <>
      <CssBaseline>
        <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
          <Box
            component="aside"
            sx={{
              width: 400,
              flexShrink: 0,
              boxShadow: 2,
              p: 3,
              height: "100vh",
              overflowY: "auto",
              zIndex: 2,
            }}
          >
            <DetailArea memo={selectedMemo}></DetailArea>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: "100vh",
              overflowY: "auto",
            }}
          >
            <Box
              sx={{
                boxShadow: 1,
                padding: 1,
                position: "sticky",
                top: 0,
                backgroundColor: "background.paper",
                zIndex: 1,
              }}
            >
              <ControlForm onAddNewMemo={handleAddNewMemo}></ControlForm>
            </Box>
            <Box sx={{ p: 3 }}>
              <CardArea
                memos={memos}
                onSelectMemo={handleSelectMemo}
                onDeleteMemo={handleDeleteMemo}
              ></CardArea>
            </Box>
          </Box>
        </Box>
      </CssBaseline>
    </>
  );
}

export default App;
