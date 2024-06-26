import { Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {

  const [text] = useTypewriter({
    words: [
      "build things for the web",
      "explore new technologies",
      "practice problem-solving",
      "love building communities"
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 30,
    delaySpeed: 2500,
  });

  return (
    <Container
      id="home"
      sx={{ mx: { sx: 0, xl: "8rem" }, ml: { "2xl": "14.5rem" } }}
    >
      <Grid container sx={{ m: 0 }}>
        <Grid
          item
          xxs={12}
          sx={{
            color: "#8892af",
            m: { xxs: 1, xs: 4, md: 6, lg: 8, xl: 0 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: { xxs: "85vh", xs: "65vh", md: "100vh", xxl: "80vh" },
          }}
        >
          <Typography sx={{ color: "#64ffda" }}>Hello, my name is </Typography>
          <Typography
            className="tracking-in-expand"
            sx={{
              fontSize: {
                xxs: "clamp(40px, 8vw, 60px)",
                md: "clamp(2rem, 7vw, 5rem)",
              },
              color: "#ccd6f6",
              fontWeight: { xxs: 600 },
              mt: { xxs: 2 },
              fontFamily: "sans-serif",
            }}
            variant="h1"
          >
            Pradeepto Sarkar.
          </Typography>
          <Typography
            className="typewriter"
            sx={{
              fontSize: {
                xxs: "clamp(30px, 6vw, 40px)",
                md: "clamp(1.6rem, 5vw, 3.7rem)",
                default: "2rem",
              },
              lineHeight: 1.1,
              mt: 1,
              fontWeight: 600,
              fontFamily: "sans-serif",
            }}
            variant="h2"
          >
            I {text}
            <Cursor />
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              pt: 3,
              fontFamily: "sans-serif",
              width: { md: "60%" },
            }}
          >
            I help people make the world a better place through quality
            software. As a full-stack developer, I possess a wide range of
            skills and expertise that allow me to create and maintain web
            and other kind of applications.
          </Typography>
          <Link
            href="https://www.linkedin.com/in/pradeeptosarkar/"
            target="_blank"
            sx={{
              py: { xxs: 2.8 },
              px: { xxs: 7 },
              mt: 6,
              width: { xxs: "max-content" },
              textDecoration: "none",
              borderRadius: 1,
              "&:hover": {
                backgroundColor: "#a6fae632",
                color: "#fff",
              },
            }}
            className="btn"
          >
            Get in touch
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
