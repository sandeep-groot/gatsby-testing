import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../ProTip";
import Link from "../Link";
import Copyright from "../Copyright";

const About = (props) => {
  const { location } = props;
  const { state = {} } = location;
  const { modal } = state;
  console.log("About props :>> ", props);

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Gatsby example
          </Typography>
          <Link to="/">Go to the main page</Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export default About;
