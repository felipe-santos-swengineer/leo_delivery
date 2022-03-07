import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

import Flash from "../../../../components/img/flash.png";
import Seguranca from "../../../../components/img/seguranca.png";
import GoogleMaps from "../../../../components/img/google-maps.png";

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="https://raw.githubusercontent.com/mui/material-ui/master/docs/public/static/themes/onepirate/appCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={Flash}
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Velocidade na entrega
              </Typography>
              <Typography variant="h5" style={{textAlign: "center"}}>
                {
                  'A entrega mais rápida da cidade de Aurora-CE'
                }

                {
                  ''
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={Seguranca}
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Produtos de qualidade
              </Typography>
              <Typography variant="h5" style={{textAlign: "center"}}>
                {
                  'Só trabalhamos com mercadorias de qualidade'
                }

                {', está no nosso código de ética'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={GoogleMaps}
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Entrega em toda cidade
              </Typography>
              <Typography variant="h5" style={{textAlign: "center"}}>
                {'Entregamos em todos os bairros da cidade, excessão para sitios'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
