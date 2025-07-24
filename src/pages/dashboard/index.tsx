import { Post } from '../../types/post';
import { Box, Button, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getPosts, softDeletePost } from "../../services/postApi";
import ModalLoading from '../../components/ModalLoading';

function Index() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [tab, setTab] = useState<string>('publish');
  const [loading, setLoading] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await getPosts();
      setPosts(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

 const filteredPosts = useMemo(
   () => posts.filter((post) => post.status === tab),
   [posts, tab]
 );
   

  const clickEdit = (id:number) => {
    navigate(`/edit/${id}`);
  }

  const clickDelete = async (id:number) => {
    try{
      setLoading(true);
      await softDeletePost(id);
      const res = await getPosts();
      setPosts(res);
      // fetchPost();
      setLoading(false);
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    <>
      <ModalLoading openModal={loading} />
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
            <Tab label="Publish" value="publish" />
            <Tab label="Draft" value="draft" />
            <Tab label="Trash" value="trash" />
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
                {tab !== "trash" && (
                  <TableCell
                    sx={{ textAlign: "center", fontWeight: "bold" }}
                    colSpan={2}
                  >
                    Action
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPosts.length > 0 ? (
                filteredPosts.map((e, id) => (
                  <TableRow key={id}>
                    <TableCell>{e.id}</TableCell>
                    <TableCell>{e.title}</TableCell>
                    <TableCell>{e.category}</TableCell>
                    {tab !== "trash" && (
                      <>
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
                      </>
                    )}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} sx={{ textAlign: "center" }}>
                    NO DATA
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </>
  );
}

export default Index