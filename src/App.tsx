import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import { CardArea } from "./components/CardArea";
import { DetailArea } from "./components/DetailArea";
import { ControlForm } from "./components/ControlForm";
import { StrictMode, useState } from "react";
import { SnackbarProvider } from "./contexts/snackbar/SnackbarProvider";
import { usePromptMemos } from "./hooks/usePromptMemos";
import type { Lora } from "./types/PromptMemo";

/*
 * TODO:
 *  - URLリストとsubPromptに追加ボタンと全体をポップアップで表示
 *  - 画質などを決めるpromptは別にする。lora,subPromptと合わせて、全体で使えるように実装。タブ分けしてそれぞれ一覧表示
 *  - 削除時に確認画面をダイアログで表示
 *  - 選択中のカードをハイライト表示
 *  - テーマ変更ボタンを作成。ダーク、ライト、モノクロ
 *  - コピーボタンを押した際に選択画面をポップアップで表示
 *  - 拡大ボタンを押した際にTextField全体をポップアップで表示
 *  - 画像選択機能の実装
 *  - インポート、エクスポート機能。json
 */

function App() {
  const { memos, addMemo, updateMemo, deleteMemo, updateLoras } = usePromptMemos();
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

  const handleUpdateLoras = (memoId: string, newLoras: Lora[]) => {
    updateLoras(memoId, newLoras);
  };

  return (
    <StrictMode>
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
              <DetailArea
                memo={selectedMemo}
                onUpdateMemo={updateMemo}
                onUpdateLoras={handleUpdateLoras}
              ></DetailArea>
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
    </StrictMode>
  );
}

export default App;
