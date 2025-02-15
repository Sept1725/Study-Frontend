import { Button } from "@mui/material";

export default function OperateButtons() {
  return (
    <>
      <Button variant="outlined" sx={{ marginRight: "10px" }}>
        編集
      </Button>
      <Button variant="outlined" sx={{ marginLight: "10px" }}>
        削除
      </Button>
    </>
  );
}
