import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import data from "../db/data";
import Form from "../components/Form";

const Contact = () => {
  const styles = {
    social: {
      color: "#8892af",
    },
    footText: {
      color: "#8892af",
      fontSize: 12,
    },
    floatEmail: {
      color: "#8892af",
    },
  };
  return (
    <Container id="contact" sx={{ px: { xs: 6, sm: 7, xl: 0 }, pl: { xl: 0 } }}>
      <Typography
        variant="h6" sx={{ mr: 2, color: "#ccd6f6" }}
      >
        <Typography variant="span" sx={{ color: "#64ffda" }}>06. {" "}</Typography>
        What's Next?
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "sans-serif",
          fontWeight: 800,
          my: 2,
          textAlign: "center",
          mb: { md: "3rem" },
        }}
      >
        Get In Touch
      </Typography>

      <Grid container sx={{ display: { xxs: "block", md: "flex" } }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: "center",
            m: "auto",
          }}
        >
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontWeight: 300,
              textAlign: "justify",
              color: "#8892af",
              m: "auto",
              mr: { mmd: 3 },
              ml: { "2xl": 7 },
            }}
          >
            I am always on the lookout for new job and freelancing opportunities where I can apply
            my skills and continue to develop as a professional. I am
            open to discussing new options and exploring how we can work
            together to achieve great things. Let's connect!
          </Typography>

          <Link
            to="https://www.linkedin.com/in/pradeeptosarkar/"
            target="_blank"
          >
            <Button
              className="btn"
              sx={{
                py: { xxs: 1.8 },
                px: { xxs: 7 },
                mt: { xxs: 3, md: 8 },
                mb: 5,
                display: { xxs: "inline", md: "none" },
              }}
            >
              Say Hello
            </Button>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            color: "#8892af",
            textAlign: "center",
          }}
        >
          <Form />
        </Grid>
      </Grid>

      <footer>
        <List
          sx={{
            width: "fit-content",
            m: "auto",
            display: { xxs: "flex", md: "block" },
            position: { md: "fixed" },
            left: { md: 10, xl: 57 },
            bottom: { md: 90 },
            zIndex: { md: 99 },
          }}
          className="social-float"
        >
          {data.socials.map((icon, index) => (
            <ListItem key={index} sx={{ px: 1.2 }}>
              <Link
                to={icon.link}
                style={styles.social}
                className="social-icon"
                key={index}
                target="_blank"
              >
                {icon.name}
              </Link>
            </ListItem>
          ))}
          <ListItem
            sx={{
              position: { md: "fixed" },
              right: { md: -100, xl: -57 },
              bottom: { md: 181 },
              width: { md: "auto" },
              transform: { md: "rotate(90deg)" },
              display: { xxs: "none", md: "block" },
            }}
          >
            <Link
              to="mailto:pradeeptosarkarmail@gmail.com"
              target="_blank"
              className="floatEmail"
              style={styles.floatEmail}
            >
              pradeeptosarkarmail@gmail.com
            </Link>
            <Divider orientation="vertical" />
          </ListItem>
        </List>

        <Box sx={{ mx: 5, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#64ffda" }}>
            <Link
              to="https://github.com/pradeeptosarkar"
              target="_blank"
              className="footText"
              style={styles.footText}
            >
              Designed & Built by Pradeepto Sarkar
            </Link>
          </Typography>
        </Box>
      </footer>
    </Container>
  );
};

export default Contact;
