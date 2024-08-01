import React from "react";
import { Box, Button, Dialog, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DoneIcon from '@mui/icons-material/Done';
import tick from "../../assets/img/tick.png";

function PopUpDialogBox({ show, setShow, message }) {

  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    setShow(false);
  };

  React.useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <Dialog //confirmation modal
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      slotProps={{
        backdrop: {
          sx: {
            background: "rgba(0,0,0,0.4)",
          },
        },
      }}
    >
      <Box
        sx={{
          minWidth: "100%",
         
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { sm: 6, xs: 3 },
          gap: 2,
        }}
      >
        <Box
          component={"img"}
            src={tick}
          sx={{
            width: { sm: 100, xs: 80 },
            height: { sm: 100, xs: 80 },
          }}
        />
        {/* <IconButton
      
           
                backgroundColor="primary"
                sx={{
                 
                  background: "primary",
                  "&:hover": {
                    background: "primary",
                  },
                }}
        >
          <DoneIcon />
        </IconButton> */}
        <Typography
          sx={{
            fontFamily: "Arial",
            fontSize: { sm: "15px", xs: "12px" },
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          We have received your application your application submission is successful.
          <br />
         
          We will evaluate your request. upon approval, you will received your password via email.
          <br />
          <br />
          if you have any further clarifications
          <br />
         <b> please contact us on
          <br />
          info@snapitonline.com or call us at 
          <br />
          +94 777491496
          </b>
        </Typography>
        <Box
          sx={{
            width: "100%",
            px: { md: 6, sm: 3, xs: 1 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Arial",
              fontSize: { xs: "10px" },
              fontWeight: 400,
              textAlign: "center",
              color: "#757575",
            }}
          >
            {/* Lorem Ipsum Generator */}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: { sm: 5, xs: 2 },
            mt: 1,
          }}
        >
          {/* <Button
            sx={{
              width: { sm: 82, xs: 65 },
              height: { sm: 27, xs: 19 },
              border: "1px solid #0582CA",
              borderRadius: "5px",
            }}
            onClick={handleClose}
          >
            <Typography
              sx={{
                fontFamily: "Arial",
                fontSize: { sm: 13, xs: 10 },
                fontWeight: 400,
                color: "#000000",
              }}
            >
              No
            </Typography>
          </Button> */}
          <Button
            onClick={() => {
              navigate("/");
            }}
            variant="contained"
                color="primary"
            sx={{
              width: { sm: 100, xs: 80 },
              height: { sm: 35, xs: 25 },
              // border: '1px solid #0582CA',
              borderRadius: "5px",
              // background: "red",
              // "&:hover": {
              //   background: "#0582CA",
              //   color: "#FFFFFF",
              // },
            }}
            //  onClick={handleYes}
          >
            <Typography
              sx={{
                fontFamily: "Arial",
                fontSize: { sm: 13, xs: 10 },
                fontWeight: 400,
                color: "#FFFFFF",
              }}
            >
              OK
            </Typography>
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export default PopUpDialogBox;
