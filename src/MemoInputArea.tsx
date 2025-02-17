import { Paper, Typography, Box, TextField, Button } from "@mui/material";
import { useCreateMemos } from "./hooks/useCreateMemo";

export default function MemoInputArea() {
  const { value, handle: handleCreate } = useCreateMemos();
  return (
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
        <TextField
          value={value.title}
          onChange={handleCreate.onChangeTitle}
          helperText="※必須入力"
          sx={{ width: "50%" }}
        />
      </Box>
      <Box sx={{ marginBottom: "16px" }}>
        <Typography variant="subtitle1">詳細</Typography>
        <TextField
          value={value.description}
          multiline
          rows={3}
          onChange={handleCreate.onChangeDescription}
          sx={{ width: "70%" }}
        />
      </Box>
      <Button variant="contained" onClick={handleCreate.onClickCreate}>
        新規作成
      </Button>
    </Paper>
  );
}
