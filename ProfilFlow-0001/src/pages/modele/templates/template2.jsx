import React from 'react';
import { Container, Paper, Typography, Box, Grid, Avatar, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const A4_WIDTH = '210mm';
const A4_HEIGHT = '297mm';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  background: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
  width: A4_WIDTH,
  height: A4_HEIGHT,
  boxSizing: 'border-box',
  margin: '0 auto',
  overflow: 'hidden',
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
  fontSize: '18px',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '14px',
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
  fontSize: '16px',
}));

const DividerStyled = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  backgroundColor: theme.palette.primary.main,
}));

const CVTemplate2 = ({ cvData }) => {
  if (!cvData) return <Typography>Chargement des données du CV...</Typography>;

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Header>
          <Avatar alt={cvData["Nom et Prénom"]} src="/static/images/avatar/1.jpg" sx={{ width: 80, height: 80, marginRight: 2 }} />
          <Box>
            <Title variant="h4">{cvData["Nom et Prénom"]}</Title>
            <Subtitle variant="h6">{cvData["Titre du cv"]}</Subtitle>
          </Box>
        </Header>

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Section>
              <SectionTitle variant="h5">Expériences Professionnelles</SectionTitle>
              <Typography variant="body2">{cvData["Experience Professionnelle"]}</Typography>
            </Section>

            <DividerStyled />

            <Section>
              <SectionTitle variant="h5">Formation</SectionTitle>
              <Typography variant="body2">{cvData["Education"]}</Typography>
            </Section>

            <DividerStyled />

            <Section>
              <SectionTitle variant="h5">Projet Académique</SectionTitle>
              <Typography variant="body2">{cvData["Projet Académique"]}</Typography>
            </Section>

            <DividerStyled />

            <Section>
              <SectionTitle variant="h5">Certifications</SectionTitle>
              <Typography variant="body2">{cvData["Certifications"]}</Typography>
            </Section>

            <DividerStyled />

            <Section>
              <SectionTitle variant="h5">Vie Associative</SectionTitle>
              <Typography variant="body2">{cvData["Vie Associative"]}</Typography>
            </Section>
          </Grid>

          <Grid item xs={12} md={4} style={{ backgroundColor: '#2A3A4A', color: 'white', padding: '10px' }}>
            <Section>
              <SectionTitle variant="h5">Informations Personnelles</SectionTitle>
              <Typography variant="body2">{cvData["Informations Personnelles"]}</Typography>
            </Section>

            <DividerStyled style={{ backgroundColor: 'white' }} />

            <Section>
              <SectionTitle variant="h5">Langues</SectionTitle>
              <Typography variant="body2">{cvData["Langues"]}</Typography>
            </Section>

            <DividerStyled style={{ backgroundColor: 'white' }} />

            <Section>
              <SectionTitle variant="h5">Compétences</SectionTitle>
              <Typography variant="body2">{cvData["Compétences"]}</Typography>
            </Section>

            <DividerStyled style={{ backgroundColor: 'white' }} />

            <Section>
              <SectionTitle variant="h5">Centre d'intérêt</SectionTitle>
              <Typography variant="body2">{cvData["Centre d'interet"]}</Typography>
            </Section>
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
}

export default CVTemplate2;