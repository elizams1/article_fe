import { Box, Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout(){
  const navigate = useNavigate();
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => navigate("/")}>Dashboard</Button>
        <Button onClick={() => navigate("/preview")}>Preview</Button>
        <Button onClick={() => navigate("/add")}>Add Post</Button>
      </Box>
      <main className="content">
        <Outlet /> {/* Konten route akan muncul di sini */}
      </main>
    </Box>
  );
}