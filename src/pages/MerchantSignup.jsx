import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Merchant from '../assets/img/merchant1.png';

const MerchantSignup = () => {
    const [nicFileName, setNicFileName] = React.useState('');
    const [brFileName, setBrFileName] = React.useState('');

    const handleClick = () => {
        window.location.href = 'https://brand.snapitonline.com/';
      };
    const leftVariants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    const handleNicFileUpload = (event) => {
        const file = event.target.files[0];
        setNicFileName(file.name);
    };

    const handleBrFileUpload = (event) => {
        const file = event.target.files[0];
        setBrFileName(file.name);
    };

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
                        sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', p: 5 }}
                    >
                        <motion.div variants={leftVariants}>
                            <img src={Merchant} width={'100%'} alt="" />
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={7} p={5}>
                        <Typography variant='h3' fontWeight={800}>
                            Sign up as <span> </span>
                            <span style={{ color: '#f2b51c' }}>Merchant</span>
                        </Typography>
                        <Grid container spacing={2} mt={1}>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Full Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Address" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Mobile Number" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="NIC" variant="outlined" />
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
                                                    style={{ display: 'none' }}
                                                    onChange={handleNicFileUpload}
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
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Email" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    select
                                    fullWidth
                                    label="Country"
                                    variant="outlined"
                                >
                                    {/* Options for countries */}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Company Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Upload BR"
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <React.Fragment>
                                                <input
                                                    type="file"
                                                    style={{ display: 'none' }}
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
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Company Register Number" variant="outlined" />
                            </Grid>
                        </Grid>
                        <Box mt={3}>
                            <Button variant='contained' onClick={handleClick} fullWidth>Signup</Button>
                        </Box>
                    </Grid>
                </Grid>
            </section>
        </>
    )
}

export default MerchantSignup;
