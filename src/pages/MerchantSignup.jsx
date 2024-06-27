import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { showAlertMessage } from '../app/alertMessageController';
import Merchant from '../assets/img/merchant33.png';
import { signUpMerchant } from '../services/userServices';

const MerchantSignup = () => {
   
    const [nicFileName, setNicFileName] = React.useState("");
    const [brFileName, setBrFileName] = React.useState("");
    const [file, setFile] = useState(null);
    const [nicFile, setNicFile] = useState(null);
  
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [nic, setNic] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [RegisterNumber, setRegisterNumber] = useState("");
    const [fileBr, setFileBr] = useState(null);
  
    const [clickValidate, setClickValidate] = useState(false);
    const [isValidationSuccess, setIsValidationSuccess] = useState(false);
    const [uploadedNICFileName, setUploadedNICFileName] = useState("");
    //const [error, setError] = useState(null);
  
    const handleNICFileChange = async (event) => {
      setClickValidate(false);
      setIsNICValidationSuccess(false);
      // const selectedFile = event.target.files[0];
      const file = event.target.files[0];
      console.log("file-", event,file);
      setNicFile(file);
      // Update the label text to the selected file name
      console.log("Selected file namee :", file.name);
      //setUploadedNICFileName(selectedFile.name);
      setNicFileName(file.name);
      // setnicError(null);
      // console.log("Uploaded file name:", selectedFile.name , Boolean(selectedFile.name));
    };
  
    const handleClick = () => {
      window.location.href = "https://brand.snapitonline.com/";
    };
    const leftVariants = {
      offscreen: {
        opacity: 0,
      },
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
        },
      },
    };
  
    const handleNicFileUpload = (event) => {
      const file = event.target.files[0];
      console.log(event.target.files);
      setNicFileName(file.name);
      console.log("Selected file name :", file);
  
      setNicFile(file)
    };
  
    const handleBrFileUpload = (event) => {
      // setDef(event.target.files[0]);
      const file = event.target.files[0];
      setBrFileName(file.name);
      setFileBr(file)
    };
  
    const MerchantSingUp = async () => {
      const data = {
        full_name: fullName,
        address: address,
        mobile_number: mobileNumber,
        nic: nic,
        file_path_nic: nicFileName,
        email: email,
        country: country,
        company_name: companyName,
        company_reg_no: RegisterNumber,
        file_path_br: brFileName,
        user_type: "super_user",
      };
      console.log(data);
  
      let formData = new FormData();
  
      Object.keys(data)
      .map((key) =>{
          formData.append(key, data[key])
      })
  
      formData.delete('file_path_nic')
      formData.delete('file_path_br')
  
      // formData.append('name', 'name')
      // formData.append("full_name", fullName);
      // formData.append("address", data?.address);
      // formData.append("mobile_number", data?.mobile_number);
      // formData.append("nic", data?.nic);
      formData.append("file_path_nic", nicFile);
      // formData.append("email", data?.email);
      // formData.append("country", data?.country?.label);
      // formData.append("company_name", data?.company_name);
      // formData.append("company_reg_no", data?.company_reg_no);
      formData.append("file_path_br", fileBr);
      // formData.append("user_type", "super_user");
  
      console.log(formData)
  
      try {
        const response = await signUpMerchant(formData)
        console.log("Merchant Registered Successfully", response);
  
        if (response?.status === 200) {
        
          setFullName("");
          setAddress("");
          setMobileNumber("");
          setNic("");
          setEmail("");
          setCountry("");
          setCompanyName("");
          setCompanyRegNo("");
          setFileBr("");
          setNicFile("");
          setFile("");
          setUploadedFileName("");
        }

        if(response && response.responseCode === 1000){
            showAlertMessage({
                message:"Merchant Registered",
                type:"success"
            })
        }
      } catch(error) {
       console.log("error",error);
      }
    };





    const {
        control,
        handleSubmit,
        watch,
        formState: { isValid, error },
      } = useForm({});

    return (
        <>
            {/* Section 1 */}
            <section>
                <Grid container>
                    <Grid
                        item
                        xs={12} md={5}
                        component={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        sx={{ display: {xs:"none",sm:'block'}, justifyContent: 'start', alignItems: 'center',  p:{ xs: 1, lg: 10} }}
                    >
                        <motion.div variants={leftVariants}>
                            <img src={Merchant} width={'100%'} alt="" />
                        </motion.div>
                    </Grid>
                   
                    <Grid item xs={12} md={7} p={{ xs: 2, lg: 5 }}>
                    <Typography variant='h3' fontWeight={800}>
                            Sign up as <span> </span>
                            <span style={{ color: '#f2b51c' }}>Merchant</span>
                        </Typography>

                        <form onSubmit={handleSubmit(MerchantSingUp)}>
              <Grid container spacing={2} mt={1}>
                {/* FullName */}
                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    fullWidth
                    required={"First Name Required"}
                    label="Full Name"
                    value={fullName}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    fullWidth
                    label="Address"
                    required={"Address required"}
                    variant="outlined"
                    value={address}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setMobileNumber(e.target.value);
                    }}
                    fullWidth
                    label="Mobile Number"
                    required={"MobileNumber Required"}
                    variant="outlined"
                    value={mobileNumber}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setNic(e.target.value);
                    }}
                    fullWidth
                    required={"NIC Required"}
                    label="NIC"
                    variant="outlined"
                    value={nic}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="NIC Upload"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <React.Fragment>
                          <input
                            type="file"
                            // accept="image/jpeg,image/png,application/pdf"
                            style={{ display: "none" }}
                            onChange={handleNicFileUpload} //
                            id="nic-upload"
                          />
                          <label htmlFor="nic-upload">
                            <Button component="span" variant="outlined">
                              Upload
                            </Button>
                          </label>
                        </React.Fragment>
                      ),
                    }}
                    value={nicFileName}
                    // onChange={}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    fullWidth
                    required={"Email Required"}
                    label="Email"
                    variant="outlined"
                    value={email}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    fullWidth
                    label="Country"
                    required={"Country Required"}
                    variant="outlined"
                    value={country}
                  />
                </Grid>

                {/* <Grid item xs={12} md={6}>
                                <TextField
                                    select
                                    fullWidth
                                    label="Country"
                                    variant="outlined"
                                >
                                    
                                </TextField>
                            </Grid> */}

                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                    }}
                    fullWidth
                    label="Company Name"
                    required={"Company Name Required"}
                    variant="outlined"
                    value={companyName}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Upload BR"
                    required={"Br Required"}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <React.Fragment>
                          <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={handleBrFileUpload}
                            id="br-upload"
                          />
                          <label htmlFor="br-upload">
                            <Button component="span" variant="outlined">
                              Upload
                            </Button>
                          </label>
                        </React.Fragment>
                      ),
                    }}
                    value={brFileName}
                    // onChange={handle}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setRegisterNumber(e.target.value);
                    }}
                    fullWidth
                    label="Company Register Number"
                    required={"Register Number Required"}
                    variant="outlined"
                    value={RegisterNumber}
                  />
                </Grid>
              </Grid>
              <Box mt={3}>
                <Button type="submit" variant="contained" fullWidth>
                  Signup
                </Button>
              </Box>
            </form>
                      

                    </Grid>
                 
                  
                </Grid>
            </section>
        </>
    )
}

export default MerchantSignup;
