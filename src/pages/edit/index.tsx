import { Post } from '@/types/post';
import { Box, Typography, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import dummyPosts from '../dashboard/dummyData';
import { Controller, useForm } from 'react-hook-form';

function Index() {
  const {id} = useParams();
  // const [post, setPost] = useState<Post>();

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
    const fetchPost = () => {
      const editPost = dummyPosts.find(post => post.id === Number(id));
      reset(editPost);
    }
    fetchPost();
  },[id, reset]);

  
  

  return (
    <Box
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
              value: 50,
              message: "Content should be at least 50 characters"
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
              onClick={() => field.onChange("published")}
            >
              {"Publish"}
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="error"
              onClick={() => field.onChange("draft")}
            >
              {"Draft"}
            </Button>
            
          </Box>
        )}
      />
    </Box>
  );
}

export default Index