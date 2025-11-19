import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import { CardArea } from "./components/CardArea";
import { DetailArea } from "./components/DetailArea";
import { ControlForm } from "./components/ControlForm";
import { useState } from "react";
import { SnackbarProvider } from "./contexts/snackbar/SnackbarProvider";
import type { PromptMemo } from "./types/PromptMemo";
import { UsePromptMemos } from "./hooks/usePromptMemos";

/*
 * TODO:
 *  - URLリストに追加ボタンと全体をポップアップで表示。
 *  - 削除時に確認画面をダイアログで表示
 *  - ロジックをカスタムhookに分離。
 *  - テーマ変更ボタンを作成。ダーク、ライト、モノクロ。
 *  - コピーボタンを押した際に選択画面をポップアップで表示。
 *  - 拡大ボタンを押した際にTextField全体をポップアップで表示。
 *  - 画像選択機能の実装。
 */

function App() {
  const { memos, addMemo, updateMemo, deleteMemo } = UsePromptMemos();
  const [selectedMemoId, setSelectedMemoId] = useState<string | null>(null);

  const selectedMemo = memos.find((memo) => memo.id === selectedMemoId);

  const handleAddNewMemo = () => {
    const newMemoId = addMemo();
    console.log(`createNewPromptMemo`);
    setSelectedMemoId(newMemoId);
  };

  const handleDeleteMemo = (id: string) => {
    if (window.confirm("本当に削除しますか？")) {
      deleteMemo(id);
      // 削除したメモが選択されていた場合、選択状態を解除する
      if (selectedMemoId === id) {
        setSelectedMemoId(null);
      }
    }
  };

  return (
    <SnackbarProvider>
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
                onSelectMemo={setSelectedMemoId}
                onDeleteMemo={handleDeleteMemo}
              ></CardArea>
            </Box>
          </Box>
        </Box>
      </CssBaseline>
    </SnackbarProvider>
  );
}

export default App;
