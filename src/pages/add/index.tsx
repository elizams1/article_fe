import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ModalLoading from '../../components/ModalLoading';
import { createPost } from '../../services/postApi';
import { Post } from '../../types/post';

function Index() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty }
  } = useForm<Post>({
    defaultValues: {
      id: 0,
      title: "",
      content: "",
      category: "",
      status: "draft",
      created_date: new Date().toISOString(),
      updated_date: new Date().toISOString()
    }
  });


  const onSubmit = async (data: Post) => {
    try{
      console.log("Submiting data", data);
      setLoading(true);
      const res = await createPost(data);
      setLoading(false);

      console.log("Success create post", res);
      navigate("/");

    }
    catch(e){
      setLoading(false);
      console.log(e);
    }
  }
  return (
    <>
      <ModalLoading openModal={loading} />
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
          Tambahkan Post
        </Typography>
        <Box>
          <Typography>Title</Typography>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
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