import { Container, Typography, Grid } from '@mui/material';

const Todobox = () => {
    return (
        <>
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Typography variant="h4" component="h1" gutterBottom  color="white">
                        Todobox
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom color="white">
                        Todobox is a simple component that allows you to add a new item to your list.
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h4" component="h1" gutterBottom  color="white">
                        Todobox
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom color="white">
                        Todobox is a simple component that allows you to add a new item to your list.
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h4" component="h1" gutterBottom  color="white">
                        Todobox
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom color="white">
                        Todobox is a simple component that allows you to add a new item to your list.
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h4" component="h1" gutterBottom  color="white">
                        Todobox
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom color="white">
                        Todobox is a simple component that allows you to add a new item to your list.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default Todobox

