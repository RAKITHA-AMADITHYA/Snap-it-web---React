import { Box, Grid, useMediaQuery, Typography, TextField, Button } from '@mui/material';
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);

  const position = [6.880193, 79.858106];

  return (
    <section id="section1">
      {isMediumUp && (
                    <Box
                    sx={{ width: { xs: "auto", md: "1120px" }, mt: { xs: 0, md: 2 }, margin: { xs: 2, md: '0 auto' } }}
    
                >
        <Grid container>
          <Grid item xs={12} md={6} p={5}  data-aos="fade-in">
            <Typography variant="h3" gutterBottom>Contact</Typography>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Phone Number"
                type="tel"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
              />

              <Box>
                <Button fullWidth variant='contained'>Submit</Button>
              </Box>
            </form>
          </Grid>

          <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center" p={2} data-aos="fade-in">
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '20px', marginTop: '10px' }}>

              <div style={{ display: 'flex', gap: '20px' }}>
                <a href="mailto:gdsasrilanka@gmail.com">
                  {/* <PhoneButton /> */}
                </a>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3>Contact</h3>
                  <h4 style={{ fontWeight: 600 }}>(+94)-761234565 / (+94)-718395305</h4>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <a href="mailto:info@mobios.lk">
                  {/* <PhoneButton /> */}
                </a>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3>Email</h3>
                  <h4 style={{ fontWeight: 600 }}>info@mobios.lk</h4>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px',justifyContent:'start',alignItems:'start' }}>
                <a href="mailto:gdsasrilanka@gmail.com">
                  {/* <PhoneButton /> */}
                </a>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3>Address</h3>
                  <h4 style={{ fontWeight: 600 }}>
                    No.12 Ridgeway Place,<br />
                    Colombo 04,<br />
                    Sri Lanka.
                  </h4>
                </div>
              </div>

              <div style={{ height: '250px', width: '100%' }}>
                <MapContainer center={position} zoom={16} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={position}>
                    <Popup>
                      No.12 Ridgeway Place, Colombo 04, Sri Lanka
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </Grid>
        </Grid> </Box>
      )}

      {isMediumDown && (
        <Grid container>
          <Grid item xs={12} p={1} data-aos="zoom-in-right">
          <div style={{ display: 'flex', gap: '20px' }}>
                <a href="mailto:gdsasrilanka@gmail.com">
                  {/* <PhoneButton /> */}
                </a>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3>Contact</h3>
                  <h4 style={{ fontWeight: 600 }}>(+94)-761234565 / (+94)-718395305</h4>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <a href="mailto:info@mobios.lk">
                  {/* <PhoneButton /> */}
                </a>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3>Email</h3>
                  <h4 style={{ fontWeight: 600 }}>info@mobios.lk</h4>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px',justifyContent:'start',alignItems:'start' }}>
                <a href="mailto:gdsasrilanka@gmail.com">
                  {/* <PhoneButton /> */}
                </a>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3>Address</h3>
                  <h4 style={{ fontWeight: 600 }}>
                    No.12 Ridgeway Place,<br />
                    Colombo 04,<br />
                    Sri Lanka.
                  </h4>
                </div>
              </div>
          </Grid>

          <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} p={2} data-aos="zoom-in-left">
            <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  No.12 Ridgeway Place, Colombo 04, Sri Lanka
                </Popup>
              </Marker>
            </MapContainer>
          </Grid>
        </Grid>
      )}
      {/* <Footer /> */}
    </section>
  );
};

export default Contact;
