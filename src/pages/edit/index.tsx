import { Post } from '../../types/post';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import ModalLoading from '../../components/ModalLoading';
import { getPost, updatePost } from '../../services/postApi';

function Index() {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty }
  } = useForm<Post>({
    defaultValues: {
      id: 0,
      title: "",
      content: "",
      category: "",
      status: "draft",
      created_date: "",
      updated_date: ""
    }
  });
  
  useEffect(()=>{
    
    const fetchPost = async () => {
      try{
        setOpenModal(true);
        const editPost = await getPost(id);

        reset(editPost);
        setOpenModal(false);

      }
      catch(e){
        setOpenModal(false);
        console.log(e);
      }
    }
    fetchPost();
  },[id, reset]);

  const onSubmit = async (data: Post) => {
    try{
      console.log("Submiting data", data);
      setLoading(true);
      const res = await updatePost(id, data);
      setLoading(false);

      console.log("Success update post", res);
      navigate("/");

    }
    catch(e){
      setLoading(false);
      console.log(e);
    }
  }

   

  return (
    <>
      <ModalLoading openModal={openModal} />

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px"
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
          Edit Post {id}
        </Typography>
        <Box>
          <Typography>Title</Typography>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required", minLength: { value: 20, message: "Title should be at least 20 characters" } }}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.title}
                helperText={errors.title?.message}
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Box>
        <Box>
          <Typography>Content</Typography>
          <Controller
            name="content"
            control={control}
            rules={{
              required: "Content is required",
              minLength: {
                value: 200,
                message: "Content should be at least 200 characters"
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.content}
                helperText={errors.content?.message}
                multiline
                rows={6}
                fullWidth
              />
            )}
          />
        </Box>
        <Box>
          <Typography>Category</Typography>
          <Controller
            name="category"
            control={control}
            rules={{ required: "Category is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.category}
                helperText={errors.category?.message}
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Box>
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "30px",
                mt: 3
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="success"
                onClick={() => field.onChange("publish")}
                disabled={!isDirty || loading}
              >
                {"Publish"}
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="error"
                onClick={() => field.onChange("draft")}
                disabled={!isDirty || loading}
              >
                {"Draft"}
              </Button>
            </Box>
          )}
        />
      </Box>
    </>
  );
}

export default Index