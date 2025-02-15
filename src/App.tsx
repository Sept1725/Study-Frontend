import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useFetchMemos } from "./hooks/useFetchMemos";
import OperateButtons from "./OperateButtons";

export default function App() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "title", headerName: "タイトル", width: 300 },
    { field: "description", headerName: "詳細", width: 500 },
    {
      field: "action",
      headerName: "操作",
      width: 200,
      renderCell: () => <OperateButtons />,
    },
  ];

  const { memos } = useFetchMemos();

  return (
    <>
      <Typography variant="h3">Memo App</Typography>
      <Paper
        elevation={3}
        sx={{
          padding: "24px",
          margin: "10px 0px",
          width: "70%",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "16px" }}>
          メモの作成
        </Typography>
        <Box sx={{ marginBottom: "16px" }}>
          <Typography variant="subtitle1">タイトル</Typography>
          <TextField sx={{ width: "50%" }} />
        </Box>
        <Box sx={{ marginBottom: "16px" }}>
          <Typography variant="subtitle1">詳細</Typography>
          <TextField multiline rows={3} sx={{ width: "70%" }} />
        </Box>
        <Button variant="contained">新規作成</Button>
      </Paper>
      <Divider sx={{ margin: "20px 0px" }} />
      <DataGrid rows={memos} columns={columns} />
    </>
  );
}
