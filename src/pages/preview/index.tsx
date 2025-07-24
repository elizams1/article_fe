import ModalLoading from '../../components/ModalLoading';
import { Post } from '../../types/post';
import { Box, Card, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getPosts } from '../../services/postApi';

function Index() {
  const [post, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

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

  const filteredPosts = post.filter((post)=> post.status === 'publish');

  return (
    <>
      <ModalLoading openModal={loading} />
      <Box sx={{ padding:"20px" }}>
        <Typography sx={{ fontWeight:"bold", fontSize:"24px" }}>Preview Post</Typography>
        <Box sx={{ padding:"20px",display:"flex", gap:"20px", flexWrap:"wrap", justifyContent:"flex-start"}}>
          {filteredPosts.map((post, index) => (
            <Card key={post.id} sx={{ border:"1px solid black", width:"250px", height:"80px", padding:"20px" }}>
              <Typography sx={{ fontWeight:"bold" }}>{post.title}</Typography>
              <div style={{ overflow: "hidden", whiteSpace: "nowrap",textOverflow:"ellipsis" }}>{post.content}</div>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Index