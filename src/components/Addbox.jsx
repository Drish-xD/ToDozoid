import { Container, Typography, Box } from '@mui/material';

const Addbox = () => {
    return (
        <>
        <Container maxWidth="sm">
            <Box my={12}>
                <Typography variant="h4" component="h1" gutterBottom  color="white">
                    Addbox
                </Typography>
                <Typography variant="body1" component="p" gutterBottom color="white">
                    Addbox is a simple component that allows you to add a new item to your list.
                </Typography>
            </Box>
        </Container>
        </>
    )
}

export default Addbox
