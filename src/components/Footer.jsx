import { AppBar, Container, Toolbar, Typography, Link } from '@mui/material';

const Footer = () => {
	return (
		<>
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, bgcolor: "#000000cc", backdropFilter: "blur(10px)" }}>
          <Container maxWidth="sm" >
            <Toolbar sx={{ justifyContent: "center" }}>
              <Typography variant="body2">
								&copy; Copyrights 2021 by <Link href="https://drish-xd.is-a.dev" color="secondary" underline="hover" target="_blank" >Drish</Link>. All Rights Reserved.
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
		</>
	)
}

export default Footer;