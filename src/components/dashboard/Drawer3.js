import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
//import Accounting from './sidebar/Accounting';
//import Dispach from "./sidebar/Dispach"
//import Office from "./sidebar/Office"
//import Recruting from "./sidebar/Recruting"
//import Safety from "./sidebar/Safety"
import { Drawer as MUIDrawer } from "@material-ui/core"
import ClosedCaptionRoundedIcon from '@material-ui/icons/ClosedCaptionRounded';
import HeadsetMicRoundedIcon from '@material-ui/icons/HeadsetMicRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import FeaturedVideoRoundedIcon from '@material-ui/icons/FeaturedVideoRounded';
import { withRouter } from 'react-router';


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		//display: 'flex',
		//alignItems: 'center',
		////justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		//display: 'flex',
		//flexGrow: 1,
		//justifyContent: 'flex-start',
		padding: theme.spacing(3),
	},
}));

const MiniDrawer = props => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const { history } = props;

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	const itemList = [{
		text: 'Office',
		icon: <InboxIcon />,
		onClick: () => history.push('/')
	}, {
		text: 'Accounting',
		icon: <ClosedCaptionRoundedIcon />,
		onClick: () => history.push('/accounting')
	}, {
		text: 'Dispatch',
		icon: <HeadsetMicRoundedIcon />,
		onClick: () => history.push('/dispach')
	}, {
		text: "Safety",
		icon: <DescriptionRoundedIcon />,
		onClick: () => history.push('/safety')

	}, {
		text: "Recruting",
		icon: <FeaturedVideoRoundedIcon />,
		onClick: () => history.push('/recruting')

	}];

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Moderna Freight
					</Typography>
				</Toolbar>
			</AppBar>
			<MUIDrawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					{itemList.map((item, index) => {
						const { text, icon, onClick } = item;
						return (

							<ListItem button key={text} onClick={onClick}>
								{icon && <ListItemIcon>{icon}</ListItemIcon>}
								<ListItemText primary={text} />
							</ListItem>
						)
					})}
				</List>
				<Divider />
				<List>
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</MUIDrawer>
			<main className={classes.content}>
				{/*<Toolbar />*/}
				{/*<Typography paragraph >*/}
				{/*<Accounting />
					<Dispach />
					<Office />
					<Recruting />
					<Safety />*/}
				{/*</Typography>*/}
				{/*<Typography paragraph>
					Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
					facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
					tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
					consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
					vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
					hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
					tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
					nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
					accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
				</Typography>*/}
			</main>
		</div>
	);
}

export default withRouter(MiniDrawer);