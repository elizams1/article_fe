import { Box, CircularProgress, Modal, Typography } from '@mui/material';
import React from 'react'

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: "none"
};

function ModalLoading({openModal}:{openModal:boolean}) {
  return (
    <>
      {/* Modal Loading */}
      <Modal
        open={openModal}
        aria-labelledby="loading-modal"
        aria-describedby="loading-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2" gutterBottom>
            Loading
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <CircularProgress />
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default ModalLoading