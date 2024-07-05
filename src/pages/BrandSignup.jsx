import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Brand from "../assets/img/brands.png";
import { signUpBrand } from "../services/userServices";
import { showAlertMessage } from "../app/alertMessageController";
import { useForm } from "react-hook-form";
import { ErrorIcon } from "../theme/overrides/CustomIcons";
import styled from "styled-components";
import Tesseract from "tesseract.js";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
  backgroundColor: "yellow",
});

const BrandSignup = () => {
  const [nicFileName, setNicFileName] = React.useState("");
  const [brFileName, setBrFileName] = React.useState("");

  //  const [companyRegNo, setCompanyRegNo] = useState("");
  const [file, setFile] = useState(null);
  const [nicFile, setNicFile] = useState(null);

  //   const [abc, setAbc] = useState();
  //   const [def, setDef] = useState();

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [RegisterNumber, setRegisterNumber] = useState("");
  const [fileBr, setFileBr] = useState(null);

  const [fullNameError, setFullNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [nicInputError, setNicInputError] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [companyNameError, setCompanyNameError] = useState(false);
  const [RegisterNumberError, setRegisterNumberError] = useState(false);
  const [fileBrError, setFileBrError] = useState(false);
  const [nicError, setnicError] = useState(null);
  const [error, setError] = useState(null);

  const [clickValidate, setClickValidate] = useState(false);
  const [clickSubmit, setClickSubmit] = useState(false);
  const [isValidationSuccess, setIsValidationSuccess] = useState(false);
  const [isNICValidationSuccess, setIsNICValidationSuccess] = useState(false);
  const [uploadedNICFileName, setUploadedNICFileName] = useState("");
  //const [error, setError] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const handleNICFileChange = async (event) => {
    setClickValidate(false);
    setIsNICValidationSuccess(false);
    // const selectedFile = event.target.files[0];
    const file = event.target.files[0];
    console.log("file-", event, file);
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

  const handleCompanyRegNoChange = (event) => {
    setClickValidate(false);
    setIsValidationSuccess(false);
    setRegisterNumber(event.target.value);

    if (event.target.value === "") {
      setFileBrError(true);
    } else {
      setFileBrError(false);
    }
  };

  const handleOCR = async () => {
    setError(null);
    if (file && RegisterNumber && file.type.includes("image") === true) {
      console.log("Image_file", file);
      const {
        data: { text },
      } = await Tesseract.recognize(file);

      // Check if the OCR result includes the Company Reg. No.
      if (!text.includes(RegisterNumber)) {
        setError("Invalid BR file.");
        setIsValidationSuccess(false); // Set validation status to false
      }

      if (text.includes(RegisterNumber)) {
        setError("Success!");
        setIsValidationSuccess(true); // Set validation status to true
      }
    } else if (file && RegisterNumber && file.type.includes("pdf") === true) {
      console.log("PDF file", file);

      const text = await PdfToText(file);

      console.log("PDF text", text);

      // Check if the OCR result includes the Company Reg. No.
      if (!text.includes(RegisterNumber)) {
        setError("Invalid BR file.");
        setIsValidationSuccess(false); // Set validation status to false
      } else {
        setError("Success!");
        setIsValidationSuccess(true); // Set validation status to true
      }
    } else {
      setError("Please upload a file.");
      setIsValidationSuccess(false); // Set validation status to false
    }
  };

  const handleValidation = async () => {
    setClickValidate(true);
    setIsValidationSuccess(false);
    setIsNICValidationSuccess(false);

    await handleOCR();
    await handleNicOCR();
    //  setClickValidate(false);
  };

  const handleNicOCR = async () => {
    setnicError(null);
    if (nicFile && nic && nicFile.type.includes("image") === true) {
      const {
        data: { text },
      } = await Tesseract.recognize(nicFile);

      // Check if the OCR result includes the Company Reg. No.
      if (!text.includes(nic)) {
        setnicError("Invalid NIC.");
        setIsNICValidationSuccess(false); // Set validation status to false
      }

      if (text.includes(nic)) {
        setnicError("Success!");
        setIsNICValidationSuccess(true); // Set validation status to true
      }
    } else if (nicFile && nic && nicFile.type.includes("pdf") === true) {
      const text = await PdfToText(nicFile);

      console.log("PDF text", text);

      // Check if the OCR result includes the Company Reg. No.
      if (!text.includes(nic)) {
        setnicError("Invalid NIC.");
        setIsNICValidationSuccess(false); // Set validation status to false
      } else {
        setnicError("Success!");
        setIsNICValidationSuccess(true); // Set validation status to true
      }
    } else {
      setnicError("Please upload a file.");
      setIsNICValidationSuccess(false); // Set validation status to false
    }
  };

  const handleFileChange = async (event) => {
    setClickValidate(false);
    setIsValidationSuccess(false);
    const selectedFile = event.target.files[0];
    console.log("file-", event);
    setFile(selectedFile);
    // Update the label text to the selected file name
    setUploadedFileName(selectedFile.name);
    setError(null);
    // console.log("Uploaded file name:", selectedFile.name , Boolean(selectedFile.name));
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

    setNicFile(file);
  };

  const handleBrFileUpload = (event) => {
    // setDef(event.target.files[0]);
    const file = event.target.files[0];
    setBrFileName(file.name);
    setFileBr(file);
  };

  const handleBrandSignUp = async () => {
    if (fullName === "") {
      setFullNameError("Required");
    }

    if (address === "") {
      setAddressError("Required");
    }

    if (mobileNumber === "") {
      setMobileNumberError("Required");
    }

    if (nic === "") {
      setNicInputError("Required");
    }

    // nic only contain letters and numbers

    if (nic !== "") {
      if (!/^[a-zA-Z0-9]*$/.test(nic)) {
        setNicInputError("Invalid NIC");
      }
    }

    if (email === "") {
      setEmailError("Required");
    }

    if (country === "") {
      setCountryError("Required");
    }

    if (companyName === "") {
      setCompanyNameError("Required");
    }

    if (RegisterNumber === "") {
      setFileBrError("Required");
    }

    if (
      fullName === "" ||
      address === "" ||
      mobileNumber === "" ||
      nic === "" ||
      email === "" ||
      country === "" ||
      companyName === "" ||
      RegisterNumber === ""
    ) {
      return;
    }

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

    Object.keys(data).map((key) => {
      formData.append(key, data[key]);
    });

    formData.delete("file_path_nic");
    formData.delete("file_path_br");

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

    console.log(formData);

    try {
      const response = await signUpBrand(formData);
      console.log("Brand Registered Successfully", response);

      if (response?.status === 200) {
        showAlertMessage({
          message: "Registered Successfully",
          type: "success",
        });

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
        setUploadedNICFileName("");
        setClickSubmit(false);
        setClickValidate(false);
        setError(null);
        setnicError(null);
      } else if (response?.status === 302) {
        showAlertMessage({
          message: "NIC already exists",
          type: "error",
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm({});

  //   const handleUpload = (e) => {
  //     setAbc(e.target.files[0]);
  //   };

  return (
    <>
      {/* Section 1 */}
      <section>
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            component={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            sx={{
              display: { xs: "none", sm: "block" },
              justifyContent: "start",
              alignItems: "center",
              p: { xs: 1, lg: 10 },
            }}
          >
            <motion.div variants={leftVariants}>
              <img src={Brand} width={"100%"} alt="" />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={7} p={{ xs: 2, lg: 5 }}>
            <Typography variant="h3" fontWeight={800}>
              Sign up your <span> </span>
              <span style={{ color: "#f2b51c" }}>Brand</span>
            </Typography>
            <form onSubmit={handleSubmit(handleBrandSignUp)}>
              <Grid container spacing={2} mt={1}>
                {/* FullName */}
                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (e.target.value === "") {
                        setFullNameError(true);
                      } else {
                        setFullNameError(false);
                      }
                    }}
                    fullWidth
                    name="full_name"
                    //required={"First Name Required"}
                    label="Full Name"
                    value={fullName}
                    variant="outlined"
                  />
                  <Box fontWeight={500}>
                    <div
                      style={{
                        color: "red",
                        display: "inline",
                        fontSize: "13px",
                      }}
                    >
                      {fullNameError === false ? "" : "Required"}
                    </div>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setAddress(e.target.value);
                      if (e.target.value === "") {
                        setAddressError(true);
                      } else {
                        setAddressError(false);
                      }
                    }}
                    fullWidth
                    required={"Address required"}
                    label="Address"
                    variant="outlined"
                    value={address}
                  />
                  <Box fontWeight={500}>
                    <div
                      style={{
                        color: "red",
                        display: "inline",
                        fontSize: "13px",
                      }}
                    >
                      {addressError === false ? "" : "Required"}
                    </div>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setMobileNumber(e.target.value);
                      if (e.target.value === "") {
                        setMobileNumberError(true);
                      } else {
                        setMobileNumberError(false);
                      }
                    }}
                    fullWidth
                    label="Mobile Number"
                    required={"MobileNumber Required"}
                    variant="outlined"
                    value={mobileNumber}
                  />
                  <Box fontWeight={500}>
                    <div
                      style={{
                        color: "red",
                        display: "inline",
                        fontSize: "13px",
                      }}
                    >
                      {mobileNumberError === false ? "" : "Required"}
                    </div>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setNic(e.target.value);
                    }}
                    fullWidth
                    label="NIC"
                    variant="outlined"
                    value={nic}
                  />
                  <Box fontWeight={500}>
                    <div
                      style={{
                        color: "red",
                        display: "inline",
                        fontSize: "13px",
                      }}
                    >
                      {nicInputError === false ? "" : "Required"}
                    </div>
                  </Box>
                </Grid>

                {/* <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="NIC Upload"
                    required={"NIC Required"}
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
                </Grid> */}

<Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="NIC Upload"
                   // required={"NIC Required"}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <React.Fragment>
                          {/* <input
                            type="file"
                            // accept="image/jpeg,image/png,application/pdf"
                            style={{ display: "none" }}
                            onChange={handleNicFileUpload} //
                            id="nic-upload"
                          /> */}
                           <label htmlFor="fileInput" id="nicFileNameLabel">
                        {/* {nicFileName
                          ? nicFileName.length > 15
                            ? nicFileName.slice(0, 15) + "..."
                            : nicFileName
                          : ""} */}
                      </label>

                      <Grid item>
                      {clickValidate ? (
                        nicError ? (
                          <div
                            id="error-message-nic"
                            style={{
                              color: nicError === "Success!" ? "green" : "red",
                            }}
                          >
                            {nicError === "Success!" ? (
                              <DoneIcon />
                            ) : (
                              <ErrorIcon />
                            )}
                          </div>
                        ) : (
                          <CircularProgress sx={{ color: "#F2B51C" }} />
                        )
                      ) : null}
                    </Grid>

                    <Grid item>
                      <Button
                        component="label"
                        sx={{
                          borderRadius: "10px",
                          boxShadow: "none",
                          backgroundColor: "#F2B51C",
                          color: "#FDFDFD",
                          ":hover": {
                            bgcolor: "#F2B51C",
                            color: "#FDFDFD",
                            boxShadow: "none",
                          },
                        }}
                      >
                        Choose
                        <input
                          id="nicfileInput"
                          type="file"
                          accept="image/jpeg,image/png,application/pdf"
                          style={{ display: "none" }}
                          onChange={handleNICFileChange}
                        />
                        <VisuallyHiddenInput type="file" />
                      </Button>
                    </Grid>
                          {/* <label htmlFor="nic-upload">
                            <Button component="span" variant="outlined">
                              Upload
                            </Button>
                          </label> */}
                        </React.Fragment>
                      ),
                    }}
                    value={nicFileName}
                    // onChange={}
                  />
                </Grid> 

                {/* <Grid item xs={12} md={6}>
                  
                  <Box fontWeight={500}> Upload NIC</Box>

                  <Grid
                    container
                    sx={{
                      display: "flex",
                      bgcolor: "#FDFDFD",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderRadius: "12px",
                      height: "40px",
                    }}
                  >
                    <Grid item ml={2} fontWeight={500}>
                      <label htmlFor="fileInput" id="nicFileNameLabel">
                        {nicFileName
                          ? nicFileName.length > 15
                            ? nicFileName.slice(0, 15) + "..."
                            : nicFileName
                          : "Choose File"}
                      </label>
                    </Grid>

                    <Grid item>
                      {clickValidate ? (
                        nicError ? (
                          <div
                            id="error-message-nic"
                            style={{
                              color: nicError === "Success!" ? "green" : "red",
                            }}
                          >
                            {nicError === "Success!" ? (
                              <DoneIcon />
                            ) : (
                              <ErrorIcon />
                            )}
                          </div>
                        ) : (
                          <CircularProgress sx={{ color: "#F2B51C" }} />
                        )
                      ) : null}
                    </Grid>

                    <Grid item>
                      <Button
                        component="label"
                        sx={{
                          borderRadius: "10px",
                          boxShadow: "none",
                          backgroundColor: "#F2B51C",
                          color: "#FDFDFD",
                          ":hover": {
                            bgcolor: "#F2B51C",
                            color: "#FDFDFD",
                            boxShadow: "none",
                          },
                        }}
                      >
                        Choose
                        <input
                          id="nicfileInput"
                          type="file"
                          accept="image/jpeg,image/png,application/pdf"
                          style={{ display: "none" }}
                          onChange={handleNICFileChange}
                        />
                        <VisuallyHiddenInput type="file" />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid> */}

                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (e.target.value === "") {
                        setEmailError(true);
                      } else {
                        setEmailError(false);
                      }
                    }}
                    fullWidth
                    // required={"Email Required"}
                    label="Email"
                    variant="outlined"
                    value={email}
                  />
                  <Box fontWeight={500}>
                    <div
                      style={{
                        color: "red",
                        display: "inline",
                        fontSize: "13px",
                      }}
                    >
                      {emailError === false ? "" : "Required"}
                    </div>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setCountry(e.target.value);

                      if (e.target.value === "") {
                        setCountryError(true);
                      } else {
                        setCountryError(false);
                      }
                    }}
                    fullWidth
                    label="Country"
                    required={"Country Required"}
                    variant="outlined"
                    value={country}
                  />
                  <Box fontWeight={500}>
                    <div
                      style={{
                        color: "red",
                        display: "inline",
                        fontSize: "13px",
                      }}
                    >
                      {countryError === false ? "" : "Required"}
                    </div>{" "}
                  </Box>
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
                      if (e.target.value === "") {
                        setCompanyNameError(true);
                      } else {
                        setCompanyNameError(false);
                      }
                    }}
                    fullWidth
                    label="Company Name"
                    required={"Company Name Required"}
                    variant="outlined"
                    value={companyName}
                  />
                  <Box fontWeight={500}>
                    <div
                      style={{
                        color: "red",
                        display: "inline",
                        fontSize: "13px",
                      }}
                    >
                      {companyNameError === false ? "" : "Required"}
                    </div>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Upload BR"
                   // required={"NIC Required"}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <React.Fragment>
                          {/* <input
                            type="file"
                            // accept="image/jpeg,image/png,application/pdf"
                            style={{ display: "none" }}
                            onChange={handleNicFileUpload} //
                            id="nic-upload"
                          /> */}
                           <label htmlFor="fileInput" id="fileNameLabel">
                        {/* {nicFileName
                          ? nicFileName.length > 15
                            ? nicFileName.slice(0, 15) + "..."
                            : nicFileName
                          : ""} */}
                      </label>

                      <Grid item>
                      {clickValidate ? (
                        nicError ? (
                          <div
                            id="error-message-company"
                            style={{
                              color: error === "Success!" ? "green" : "red",
                            }}
                          >
                            {error === "Success!" ? (
                              <DoneIcon />
                            ) : (
                              <ErrorIcon />
                            )}
                          </div>
                        ) : (
                          <CircularProgress sx={{ color: "#F2B51C" }} />
                        )
                      ) : null}
                    </Grid>

                    <Grid item>
                      <Button
                        component="label"
                        sx={{
                          borderRadius: "10px",
                          boxShadow: "none",
                          backgroundColor: "#F2B51C",
                          color: "#FDFDFD",
                          ":hover": {
                            bgcolor: "#F2B51C",
                            color: "#FDFDFD",
                            boxShadow: "none",
                          },
                        }}
                      >
                        Choose
                        <input
                          id="fileInput"
                          type="file"
                          accept="image/jpeg,image/png,application/pdf"
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                        <VisuallyHiddenInput type="file" />
                      </Button>
                    </Grid>
                          {/* <label htmlFor="nic-upload">
                            <Button component="span" variant="outlined">
                              Upload
                            </Button>
                          </label> */}
                        </React.Fragment>
                      ),
                    }}
                    value={nicFileName}
                    // onChange={}
                  />
                </Grid> 

                {/* <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Upload BR"
                    variant="outlined"
                    required={"Br Required"}
                    InputProps={{
                      endAdornment: (
                        <React.Fragment>
                          <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={handleBrFileUpload}
                            id="br-upload"
                          />
                          <label htmlFor="br-upload" id="fileNameLabel">
                            <Button component="span" variant="outlined">
                              Upload
                            </Button>
                             {uploadedFileName
        ? uploadedFileName.length > 15
          ? uploadedFileName.slice(0, 15) + "..."
          : uploadedFileName
        : "Choose File"}
                          </label>
                          <Grid item>
    {clickValidate ? (
      error ? (
        <div
          id="error-message-company"
          style={{
            color: error === "Success!" ? "green" : "red",
          }}
        >
          {error === "Success!" ? (
            <DoneIcon />
          ) : (
            <ErrorIcon />
          )}
        </div>
      ) : (
        <CircularProgress sx={{ color: "#F2B51C" }} />
      )
    ) : null}
  </Grid>
  <Grid item>
    <Button
      component="label"
      variant="contained"
      sx={{
        borderRadius: "10px",
        boxShadow: "none",
        backgroundColor: "#F2B51C",
        color: "#FDFDFD",
        ":hover": {
          bgcolor: "#F2B51C",
          color: "#FDFDFD",
          boxShadow: "none",
        },
      }}
    >
      Choose
      <input
        id="fileInput"
        type="file"
        accept="image/jpeg,image/png,application/pdf"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <VisuallyHiddenInput type="file" />
    </Button>
  </Grid>
                        </React.Fragment>
                      ),
                    }}
                    value={brFileName}
                    // onChange={handle}
                  />
                   <Box fontWeight={500}>
                      <div
                        style={{
                          color: "red",
                          display: "inline",
                          fontSize: "13px",
                        }}
                      >
                        {fileBrError === false ? "" : "Required"}
                      </div>
                    </Box>
                </Grid> */}
{/* 
                <Grid item xs={12} md={6}>
                  <Box fontWeight={500}> Upload BR</Box>

                  <Grid
                    container
                    sx={{
                      display: "flex",
                      bgcolor: "#FDFDFD",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderRadius: "12px",
                      height: "40px",
                    }}
                  >
                    <Grid item ml={2} fontWeight={500}>
                      <label htmlFor="fileInput" id="fileNameLabel">
                        {uploadedFileName
                          ? uploadedFileName.length > 15
                            ? uploadedFileName.slice(0, 15) + "..."
                            : uploadedFileName
                          : "Choose File"}
                      </label>
                    </Grid>
                    <Grid item>
                      {clickValidate ? (
                        error ? (
                          <div
                            id="error-message-company"
                            style={{
                              color: error === "Success!" ? "green" : "red",
                            }}
                          >
                            {error === "Success!" ? (
                              <DoneIcon />
                            ) : (
                              <ErrorIcon />
                            )}
                          </div>
                        ) : (
                          <CircularProgress sx={{ color: "#F2B51C" }} />
                        )
                      ) : null}
                    </Grid>
                    <Grid item>
                      <Button
                        component="label"
                        variant="contained"
                        sx={{
                          borderRadius: "10px",
                          boxShadow: "none",
                          backgroundColor: "#F2B51C",
                          color: "#FDFDFD",
                          ":hover": {
                            bgcolor: "#F2B51C",
                            color: "#FDFDFD",
                            boxShadow: "none",
                          },
                        }}
                      >
                        Choose
                        <input
                          id="fileInput"
                          type="file"
                          accept="image/jpeg,image/png,application/pdf"
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                        <VisuallyHiddenInput type="file" />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid> */}

                {/* <Grid item xs={12} md={6}>
                  <TextField
                     onChange={(e) => {
                      setRegisterNumber(e.target.value);
                      if (e.target.value === "") {
                        setRegisterNumberError(true);
                      } else {
                        setRegisterNumberError(false);
                      }
                    }}
                    fullWidth
                    required={"Register Number Required"}
                    label="Company Register Number"
                    variant="outlined"
                    value={RegisterNumber}
                  />
                  <Box fontWeight={500}>
                      <div
                        style={{
                          color: "red",
                          display: "inline",
                          fontSize: "13px",
                        }}
                      >
                        {fileBrError === false ? "" : "Required"}
                      </div>
                    </Box>
                </Grid> */}

                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={(e) => {
                      setRegisterNumber(e.target.value);
                      if (e.target.value === "") {
                        setRegisterNumberError(true);
                      } else {
                        setRegisterNumberError(false);
                      }
                    }}
                    fullWidth
                    required={"Register Number Required"}
                    label="Company Register Number"
                    variant="outlined"
                    value={RegisterNumber}
                  />
                  {/* <Box
                      component="input"
                      value={RegisterNumber}
                      onChange={handleCompanyRegNoChange}
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        bgcolor: "white",
                        borderRadius: "12px",
                        border: "none",
                        height: "70%",
                      }}
                    /> */}
                  <Box fontWeight={500}>
                    <div
                      style={{
                        color: "red",
                        display: "inline",
                        fontSize: "13px",
                      }}
                    >
                      {fileBrError === false ? "" : "Required"}
                    </div>
                  </Box>
                </Grid>
              </Grid>

              <Box mt={3}>
                {/* <Button type="submit" variant="contained" fullWidth>
                  Signup
                </Button> */}
                <Grid item xs={12} mt={{ xs: 3, lg: 9 }}>
                  {(!isValidationSuccess || !isNICValidationSuccess) &&
                  nic !== "" &&
                  RegisterNumber !== "" &&
                  file !== null &&
                  nicFile !== null ? (
                    <Button
                      variant="contained"
                      onClick={() => handleValidation()}
                      sx={{
                        borderRadius: "10px",
                        width: { xs: "100%" },
                        bgcolor: "#F2B51C",
                        color: "#FDFDFD",
                        boxShadow: "none",
                        ":hover": {
                          bgcolor: "#F2B51C",
                          color: "#FDFDFD",
                          boxShadow: "none",
                        },
                      }}
                    >
                      {!clickValidate
                        ? "VALIDATE"
                        : error && nicError
                        ? "RETRY"
                        : "VALIDATING..."}
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        if (!clickSubmit) {
                          handleFormSubmit();
                        }
                      }}
                      disabled={!isValidationSuccess || !isNICValidationSuccess}
                      sx={{
                        borderRadius: "10px",
                        width: { xs: "100%" },
                        backgroundColor: "#F2B51C",
                        color: "#FDFDFD",
                        boxShadow: "none",
                        ":hover": {
                          bgcolor: "#F2B51C",
                          color: "#FDFDFD",
                          boxShadow: "none",
                        },
                      }}
                    >
                      {clickSubmit ? "SUBMITTING..." : "SUBMIT"}
                    </Button>
                  )}

                  {/* {showModal && (
                      <PopupAlert
                        show={showModal}
                        setShow={setShowModal}
                        message={message}
                        animation={animation}
                      />
                    )} */}
                </Grid>
              </Box>
            </form>

            {/* <Box mt={3}>
                            <Button variant='contained' onClick={handleClick} fullWidth>Signup</Button>
                        </Box> */}
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default BrandSignup;
