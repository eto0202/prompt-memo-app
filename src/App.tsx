import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import { CardArea } from "./components/CardArea";
import { DetailArea } from "./components/DetailArea";
import { ControlForm } from "./components/ControlForm";

/*
 * TODO:
 *  - URLリストに追加ボタンと全体をポップアップで表示。
 *  - テーマ変更ボタンを作成。ダーク、ライト、モノクロ。
 *  - コピーボタンを押した際に選択画面をポップアップで表示。
 *  - 拡大ボタンを押した際にTextField全体をポップアップで表示。
 *  - 画像選択機能の実装。
 *  - promptの型ファイルを作成。
 */

function App() {
  return (
    <>
      <CssBaseline>
        <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
          <Box
            component="aside"
            sx={{
              width: 400,
              flexShrink: 0,
              boxShadow: 3,
              p: 3,
              height: "100vh",
              overflowY: "auto",
              zIndex: 2,
            }}
          >
            <DetailArea></DetailArea>
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
              <ControlForm></ControlForm>
            </Box>
            <Box sx={{ p: 3 }}>
              <CardArea></CardArea>
            </Box>
          </Box>
        </Box>
      </CssBaseline>
    </>
  );
}

export default App;
