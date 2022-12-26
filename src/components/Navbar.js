import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalData, pagesData } from '../GlobalData';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
<<<<<<< HEAD
import { getItemFromLocalStorage, localStoreKeys, removeItemFromLocalStorage } from '../allFuncs';
=======
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
>>>>>>> d1be7874d6f0e6acdc012b7dce9576ddae5e30a9

const settings = [
	{
		name: 'Dashboard',
		link: '/dashboard',
	},
	{
		name: 'My Jobs',
		link: '/my-jobs',
	},
	{
		name: 'Permanent Jobs',
		link: '/permanent-jobs',
	},
	{
		name: 'Quick Jobs',
		link: '/quick-jobs',
	},
	{
		name: 'Account',
		link: '/account',
	},
];

<<<<<<< HEAD
function authForNav() {
    const accessToken = getItemFromLocalStorage(localStoreKeys.authKey);

    if (accessToken) {
        return true;
    } else {
        return false;
    }
}

function WhenLoginProfileMenu({ hideMenuWhenClick, setIsLogin }) {
    const history = useHistory();
    return (
        <>
            {settings.map((setting, index) => (
                <Link onClick={() => hideMenuWhenClick()} className="profile-popup-link" to={setting.link} key={index}>
                    <li>{setting.name}</li>
                </Link>
            ))}
            <Link
                onClick={() => {
                    removeItemFromLocalStorage(localStoreKeys.authKey);
                    history.push('/');
                    setIsLogin(false);
                    hideMenuWhenClick();
                }}
                className="profile-popup-link"
                to="#"
                key="logout"
            >
                <li>Logout</li>
            </Link>
        </>
    );
}

function NavBar({ loginState }) {
    const [isBuggerClicked, setIsBuggerClicked] = useState(true);
    const [isNavProfileClicked, setIsNavProfileClicked] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // const [profileLogo, setProfileLogo] = useState('?');
=======
function WhenLoginProfileMenu({ hideMenuWhenClick }) {
	return (
		<>
			{settings.map((setting, index) => (
				<Link onClick={() => hideMenuWhenClick()} className='profile-popup-link' to={setting.link} key={index}>
					<li>{setting.name}</li>
				</Link>
			))}
			<Link onClick={() => hideMenuWhenClick()} className='profile-popup-link' to='#' key='logout'>
				<li>Logout</li>
			</Link>
		</>
	);
}

function NavBar() {
	const [isBuggerClicked, setIsBuggerClicked] = useState(true);
	const [isNavProfileClicked, setIsNavProfileClicked] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { authState } = useContext(AppContext);
	const [profileLogo, setProfileLogo] = useState('?');
	const notificationCount = 10;

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
	}, []);
>>>>>>> d1be7874d6f0e6acdc012b7dce9576ddae5e30a9

	useEffect(() => {
		if (windowWidth <= 800) {
			setIsBuggerClicked(false);
		} else {
			setIsBuggerClicked(true);
		}
	}, [windowWidth]);

	const profileMenuHAndle = () => {
		setIsNavProfileClicked(!isNavProfileClicked);
		if (windowWidth <= 800 && isBuggerClicked === true) {
			setIsBuggerClicked(!isBuggerClicked);
		}
	};

<<<<<<< HEAD
    const [loginStatus, setLoginStatus] = useState(authForNav());

    useEffect(() => {
        setLoginStatus(authForNav());
    }, [getItemFromLocalStorage(localStoreKeys.authKey)]);

    useEffect(() => {
        if (windowWidth <= 800) {
            setIsBuggerClicked(false);
        } else {
            setIsBuggerClicked(true);
        }
    }, [windowWidth]);
=======
	const burgerClickHandle = () => {
		setIsBuggerClicked(!isBuggerClicked);
		if (windowWidth <= 800) {
			setIsNavProfileClicked(false);
		}
	};
>>>>>>> d1be7874d6f0e6acdc012b7dce9576ddae5e30a9

	const hideMenuWhenClick = () => {
		setIsNavProfileClicked(false);
		if (windowWidth <= 800) {
			setIsBuggerClicked(false);
		}
	};

	return (
		<div className='new-nav-bar'>
			<div className='container'>
				<div className='nav-item-container'>
					<div className={isBuggerClicked ? 'burger bugger-clicked' : 'burger'} onClick={() => burgerClickHandle()}>
						<div className='bar b1'></div>
						<div className='bar b2'></div>
						<div className='bar b3'></div>
					</div>
					<div className='logo'>
						<img src={GlobalData.media.logo} alt='Logo' />
					</div>
					<ul className='all-nav-items' style={{ display: isBuggerClicked ? 'flex' : 'none' }}>
						{pagesData.map((pagedt, index) => (
							<Link onClick={() => hideMenuWhenClick()} className='nav-item' to={pagedt.link} key={index}>
								<li className='me-3'>{pagedt.name}</li>
							</Link>
						))}
					</ul>
				</div>
				<div className='nav-profile-container' style={{ display: 'flex' }}>
					<div className='notification-container'>
						<NotificationsNoneIcon style={{ color: 'white', fontSize: '40px' }} className='mx-2' />
						<span>{notificationCount}</span>
					</div>

<<<<<<< HEAD
    const hideMenuWhenClick = () => {
        setIsNavProfileClicked(false);
        if (windowWidth <= 800) {
            setIsBuggerClicked(false);
        }
    };

    return (
        <div className="new-nav-bar">
            <div className="container">
                <div className="nav-item-container">
                    <div className={isBuggerClicked ? 'burger bugger-clicked' : 'burger'} onClick={() => burgerClickHandle()}>
                        <div className="bar b1"></div>
                        <div className="bar b2"></div>
                        <div className="bar b3"></div>
                    </div>
                    <div className="logo">
                        <img src={GlobalData.media.logo} alt="Logo" />
                    </div>
                    <ul className="all-nav-items" style={{ display: isBuggerClicked ? 'flex' : 'none' }}>
                        {pagesData.map((pagedt, index) => (
                            <Link onClick={() => hideMenuWhenClick()} className="nav-item" to={pagedt.link} key={index}>
                                <li>{pagedt.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="nav-profile-container" style={{ display: 'flex' }}>
                    <div className="notification-container">
                        <NotificationsNoneIcon style={{ color: 'white', fontSize: '40px' }} className="mx-2" />
                        <span>{notificationCount}</span>
                    </div>

                    <div className="profile-icon" onClick={() => profileMenuHAndle()}>
                        {!loginStatus ? '?' : 'M'}
                    </div>
                    <div className="profile-popup" style={{ display: isNavProfileClicked ? 'block' : 'none' }}>
                        <ul className="profile-popup-container">
                            {!loginStatus ? (
                                <>
                                    <Link className="profile-popup-link" to="/login" onClick={() => hideMenuWhenClick()}>
                                        <li>Login</li>
                                    </Link>
                                    <Link className="profile-popup-link" to="/register" onClick={() => hideMenuWhenClick()}>
                                        <li>Register</li>
                                    </Link>
                                </>
                            ) : (
                                <WhenLoginProfileMenu hideMenuWhenClick={hideMenuWhenClick} setIsLogin={setLoginStatus} />
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
=======
					<div className='profile-icon' onClick={() => profileMenuHAndle()}>
						{authState.isLogged ? 'M' : '?'}
					</div>
					<div className='profile-popup' style={{ display: isNavProfileClicked ? 'block' : 'none' }}>
						<ul className='profile-popup-container'>
							{!authState.isLogged ? (
								<>
									<Link className='profile-popup-link' to='/login' onClick={() => hideMenuWhenClick()}>
										<li>Login</li>
									</Link>
									<Link className='profile-popup-link' to='/register' onClick={() => hideMenuWhenClick()}>
										<li>Register</li>
									</Link>
								</>
							) : (
								<WhenLoginProfileMenu hideMenuWhenClick={hideMenuWhenClick} />
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
>>>>>>> d1be7874d6f0e6acdc012b7dce9576ddae5e30a9
}

export default NavBar;
