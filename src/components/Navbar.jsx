import { AppBar, Toolbar, Link, IconButton, ButtonGroup } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh'; 
import GitHubIcon from '@mui/icons-material/GitHub';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';


const Refresh = () => {
	window.location.reload();
	console.log("refresh()");;
};

const Navbar = () => {
	return (
		<div>
			<AppBar position="fixed" sx={{ bgcolor: "#000000cc", backdropFilter: "blur(10px)" }}>
				<Toolbar sx={{ justifyContent: "space-between" }} >
					<Link href="https://drish-xd.is-a.dev" color="secondary" variant="h5" underline="none" style={{ fontFamily: "Syne", fontWeight: "900" ,  display: "flex", alignItems: "center"}}><BookmarkAddedIcon fontSize="medium"/>ToDoZoid</Link>
					<ButtonGroup>
						<IconButton size="large" aria-label="Refresh" color="inherit">
							<RefreshIcon onClick={Refresh} />
						</IconButton>	
						<IconButton component={Link} href="https://github.com/Drish-xD/ToDozoid" size="large" aria-label="GitHub" color="inherit">
							<GitHubIcon  />
						</IconButton>
					</ButtonGroup>
				</Toolbar>
			</AppBar>     
		</div>
	)
}

export default Navbar
