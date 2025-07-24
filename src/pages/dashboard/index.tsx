import { getPosts } from "../../services/postApi";
import { Post } from '@/types/post';
import { useEffect, useState } from 'react';
import dummyPosts from "./dummyData";
import TabContext from "@mui/lab/TabContext";
import { Box, Button, Paper, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import { TabList } from "@mui/lab";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [tab, setTab] = useState<string>('published');
  // const fetchPost =  async () => {
  //   try{
  //     const res = await getPosts();
  //     console.log(res);
  //     setPosts(res);
  //   }catch(err){
  //     console.log("masuk");
  //     console.log(err);
  //   }
  // }

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  useEffect(() => {
    // fetchPost();
    setPosts(dummyPosts);
  }, []);

  const filteredPosts = posts.filter((post) => post.status === tab);
   

  const clickEdit = (id:number) => {
    navigate(`/edit/${id}`);
  }

  const clickDelete = (id:number) => {
    alert("ini click delete " + id)
  }
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
        Dashboard
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
      >
        <Tabs
          value={tab}
          onChange={handleTabChange}
          aria-label="Post status tabs"
        >
          <Tab label="Published" value="published" />
          <Tab label="Draft" value="draft" />
          <Tab label="Thrashed" value="thrashed" />
        </Tabs>
      </Box>
      <Box>
        <Table
          sx={{
            "& .MuiTableRow-root th:first-child": {
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px"
            },
            "& .MuiTableRow-root th:last-child": {
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px"
            }
          }}
        >
          <TableHead
            sx={{
              backgroundColor: "cornflowerblue"
            }}
          >
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Id</TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                Title
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                Category
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", fontWeight: "bold" }}
                colSpan={2}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPosts.map((e, id) => (
              <TableRow key={id}>
                <TableCell>{e.id}</TableCell>
                <TableCell>{e.title}</TableCell>
                <TableCell>{e.category}</TableCell>
                <TableCell>
                  <Button
                    sx={{ backgroundColor: "green", color: "white" }}
                    onClick={() => clickEdit(e.id)}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    sx={{ backgroundColor: "red", color: "white" }}
                    onClick={() => clickDelete(e.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

export default Index