import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Mbicycle = () => {
  return (
    <div style={{backgroundSize: "cover", background:"url('https://img.freepik.com/free-photo/laptop-on-office-desk_23-2147731405.jpg?w=1380&t=st=1699969704~exp=1699970304~hmac=a0f9d52418ec36c510659b8042c4ebc8ea63a1542ac38c197bf509708e10db1a')0 0/cover no-repeat"}}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" >
          <Grid container >
            <Grid item xs={7}>
              <Paper
              style={{ background:"rgba(255, 255, 255, 0.320)", padding: "40px", marginTop: "50px", marginBottom: "50px" }}
                elevation={3}
                sx={{ 
                  padding: (theme) => theme.spacing(2),
                  marginRight: (theme) => theme.spacing(2),
                  textAlign: "left",
                }}
              >
                <Typography variant="h4" component="h1" gutterBottom>
                  Кто мы
                </Typography>
                      <Typography variant="body1" paragraph>
                      Специалисты Mbicycle — энтузиасты аутсорсинга разработки программного обеспечения, 
                      усердно работающие над созданием мощных программных решений. 
                      Мы основали Mbicycle в 2016 году, чтобы помогать стартапам и предприятиям малого и 
                      среднего бизнеса воплощать в жизнь их амбициозные идеи.
                  </Typography>
                  <Typography variant="body1" paragraph>
                      За прошедшие годы наша профессиональная компания по разработке программного обеспечения накопила навыки и опыт, 
                      предоставляя надежные услуги по индивидуальной разработке программного обеспечения, 
                      хорошо адаптированные для различных отраслей бизнеса по всему миру.
                  </Typography>
                  <Typography variant="body1" paragraph>
                      В конце 2022 года мы стали частью Noventiq — 
                      ведущего мирового поставщика решений и услуг в области цифровой трансформации и кибербезопасности,
                      штаб-квартира которого зарегистрирована в Лондоне.
                  </Typography>
                  <Typography variant="body1" paragraph>
                      Mbicycle поддерживает тесное партнерство с дочерней компанией ICC Development. 
                      Их юридическое лицо в США дает нашим клиентам в США уверенность в соблюдении всех местных законных прав, 
                      соглашений и обязанностей посредством контракта с нашей стороны.
                  </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        
      </ThemeProvider>
    </div>
    
  );
};

export default Mbicycle;

// import React from "react";
// import { Typography, Paper, Container } from "@mui/material";

// const Mbicycle = () => {
//   return (
//     <Container maxWidth="md">
//       <Paper  elevation={3} style={{ background:"rgba(152, 233, 2, 0.786)", padding: "20px", marginTop: "40px" }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//             Кто мы
//         </Typography>
        // <Typography variant="body1" paragraph>
        //     Специалисты Mbicycle — энтузиасты аутсорсинга разработки программного обеспечения, 
        //     усердно работающие над созданием мощных программных решений. 
        //     Мы основали Mbicycle в 2016 году, чтобы помогать стартапам и предприятиям малого и 
        //     среднего бизнеса воплощать в жизнь их амбициозные идеи.
        // </Typography>
        // <Typography variant="body1" paragraph>
        //     За прошедшие годы наша профессиональная компания по разработке программного обеспечения накопила навыки и опыт, 
        //     предоставляя надежные услуги по индивидуальной разработке программного обеспечения, 
        //     хорошо адаптированные для различных отраслей бизнеса по всему миру.
        // </Typography>
        // <Typography variant="body1" paragraph>
        //     В конце 2022 года мы стали частью Noventiq — 
        //     ведущего мирового поставщика решений и услуг в области цифровой трансформации и кибербезопасности,
        //     штаб-квартира которого зарегистрирована в Лондоне.
        // </Typography>
        // <Typography variant="body1" paragraph>
        //     Mbicycle поддерживает тесное партнерство с дочерней компанией ICC Development. 
        //     Их юридическое лицо в США дает нашим клиентам в США уверенность в соблюдении всех местных законных прав, 
        //     соглашений и обязанностей посредством контракта с нашей стороны.
        // </Typography>
//       </Paper>
//     </Container>
//   );
// };

// export default Mbicycle;