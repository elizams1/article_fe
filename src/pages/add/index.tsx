import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

function Index() {
  return (
    <Box sx={{ display:"flex", flexDirection:"column", gap:"20px", padding:"20px" }}>
      <Typography sx={{ fontWeight:"bold", fontSize:"24px" }}>Tambahkan Post</Typography>
      <Box>
        <Typography>Title</Typography>
        <TextField
          id="title"
          label="Masukan Title"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box>
        <Typography>Content</Typography>
        <TextField id="content" label="Masukan Content" multiline fullWidth />
      </Box>
      <Box>
        <Typography>Category</Typography>
        <TextField
          id="category"
          label="Masukan Title"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box sx={{ display:"flex", justifyContent:"center", gap:"30px" }}>
        <Button variant="contained" color="success">
          Published
        </Button>
        <Button variant="contained" color="error">
          Draft
        </Button>
      </Box>
    </Box>
  );
}

export default Index