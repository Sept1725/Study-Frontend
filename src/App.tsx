import { Divider, Typography } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useFetchMemos } from "./hooks/useFetchMemos";
import OperateButtons from "./OperateButtons";
import MemoInputArea from "./MemoInputArea";

export default function App() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "title", headerName: "タイトル", width: 300 },
    { field: "description", headerName: "詳細", width: 500 },
    {
      field: "action",
      headerName: "操作",
      width: 200,
      renderCell: (row) => <OperateButtons memoId={Number(row.id)} />,
    },
  ];

  const { memos } = useFetchMemos();

  return (
    <>
      <Typography variant="h3">Memo App</Typography>
      <MemoInputArea />
      <Divider sx={{ margin: "20px 0px" }} />
      <DataGrid rows={memos} columns={columns} />
    </>
  );
}
