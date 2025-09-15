import { Box, Container } from "@mui/material"
import { styled } from '@mui/system';

const Beneficios = () => {
  const BeneficiosContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  textAlign: 'center',
  backgroundColor: '#c5c74eff',
});
  return (
    <BeneficiosContainer>
      <Container>
        <Box> 
          <h2>Beneficios</h2>
        </Box>
      </Container>
    </BeneficiosContainer>
  )
}

export default Beneficios;