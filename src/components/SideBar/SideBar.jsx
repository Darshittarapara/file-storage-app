import React from 'react';
import Logo from 'components/Logo/Logo';
import './SideBar.scss';
import { AuthActions } from 'redux/AuthSlice/AuthSlice';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Strings } from 'resource/Strings';
import { logo } from 'screen/Auth/Login/Login';
import { clearStorage } from 'utils/Storage';
import { Home, PhotoAlbum, VideoFileSharp, DocumentScanner, CloseSharp, Person, LogoutSharp } from '@mui/icons-material';
import { Avatar, Divider, Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { FormGroup, FormControlLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeActions } from 'redux/ThemeSlice/ThemeSlice';
import { useNavigate } from 'react-router-dom';
import { setItem } from 'utils/Storage';
import { PREVIEW_THEME } from 'utils/const';
import { signOut } from 'firebase/auth';
import { auth } from 'FirebaseConfig/FireBaseConfig';

const sidebarList = [
    {
        title: Strings.profile,
        path: '/profile',
        icon: Person
    },
    {
        title: "Dashboard",
        path: "/",
        icon: Home
    },
    {
        title: Strings.photos,
        path: "/photo",
        icon: PhotoAlbum
    },
    {
        title: Strings.videos,
        path: "/videos",
        icon: VideoFileSharp
    },
    {
        title: Strings.document,
        path: "/document",
        icon: DocumentScanner
    }
]
export const SideBar = (props) => {
    const dispatch = useDispatch()
    const navigator = useNavigate();
    const { mode } = useSelector((state) => state.ToggleStateData)
    const { usersDetails } = useSelector((state) => state.UserStateData)

    const logOutHandler = () => {
        clearStorage();
        dispatch(AuthActions.cancelAuth());
        window.location.reload();
    }
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        fontSize: "24px",
        padding: theme.spacing(0, 3),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
    }));

    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
            margin: 1,
            padding: 0,
            transform: 'translateX(6px)',
            '&.Mui-checked': {
                color: '#fff',
                transform: 'translateX(22px)',
                '& .MuiSwitch-thumb:before': {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                        '#fff',
                    )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                },
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
            width: 32,
            height: 32,
            '&:before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            },
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            borderRadius: 20 / 2,
        },
    }));

    return (
        <Box
            className="sidebar-container"
            sx={{ width: 250, boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)", height: "100vh", overflow: "hidden" }}
            role="navigate"
        >
            <List className="list-container">
                <ListItem disablePadding>
                    <ListItemIcon>
                        <DrawerHeader>
                            <Logo src={logo} text={Strings.fileStroage} />
                            {window.innerWidth < 576 && (
                                <IconButton onClick={() => props.onClose()}>
                                    <CloseSharp />
                                </IconButton>
                            )}
                        </DrawerHeader>
                        <Divider />
                    </ListItemIcon>
                </ListItem>
                <Divider style={{ border: "2px solid back" }} />
                <Divider style={{ border: "2px solid back" }} />
                <br></br>
                <ListItem disablePadding>
                    <ListItemIcon>
                    </ListItemIcon>
                    <Avatar
                        alt={usersDetails?.displayName}
                        src={usersDetails?.photoURL}
                        sx={{ width: 100, height: 100, borderRadius: "100%" }}
                        variant="dot"
                    />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                    </ListItemIcon>
                    <Typography variant='h6' component="h6">
                        Hello ! {usersDetails?.displayName}
                    </Typography>
                </ListItem>

                {sidebarList.map(({ path, icon: Icon, title }, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => navigator(path)}>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={title} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <ListItemButton onClick={logOutHandler}>
                        <ListItemIcon>
                            <LogoutSharp />
                        </ListItemIcon>
                        <ListItemText primary={Strings.logOut} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding className='toggle-list'>
                    <FormGroup>
                        <FormControlLabel
                            control={<MaterialUISwitch className='toggle-checkbox' sx={{ m: 1 }} checked={mode === "dark" ? true : false} />}
                            onChange={() => {
                                dispatch(ThemeActions.toggleTheme());
                                const currentTheme = mode === "light" ? "dark" : "light"
                                setItem(PREVIEW_THEME, currentTheme)
                            }}
                        />
                    </FormGroup>
                </ListItem>
            </List>
        </Box >
    )
}