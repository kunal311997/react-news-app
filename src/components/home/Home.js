import Header from './Header'
import HomeContent from './HomeContent'
import { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import * as constants from '../../constants/Constants'

export default function Home() {
    const [openNav, setOpenNav] = useState(false)
    const [isSearchClicked, setIsSearchClicked] = useState(false)
    const [searchText, setSearchText] = useState('');
    const [onSignOutClicked, setOnSignOutClicked] = useState(false);
    const [onAboutClicked, setOnAboutClicked] = useState(false);
    const [onCategoriesClicked, setOnCategoriesClicked] = useState(false);
    const [openSignOutDialog, setOpenSignOutDialog] = useState(false);

    let isLoggedIn = localStorage.getItem(constants.IS_USER_LOGGED_IN)
    console.log(isLoggedIn);
    if (isLoggedIn === null) {
        return <Redirect to='/' />
    }

    const onToggleChange = () => {
        console.log("open toggle")
        setOpenNav(!openNav)
    }

    const onSearchClicked = () => {
        if (searchText) {
            setIsSearchClicked(true)
        } else {
            alert('Please enter values')
        }
    }

    const changeButtonClickState = () => {
        setIsSearchClicked(false)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setSearchText(e.target.value)
    }

    const onNavigationItemClick = (id) => {
        console.log(id)
        switch (id) {
        
            case 'about': {
                setOnAboutClicked(true)
                break;
            }

            case 'signout': {
                setOpenSignOutDialog(true)
                break;
            }
        }
    }

    const onSignOutClick = (value) => {
        console.log(value)
        if (value === "yes") {
            localStorage.clear()
            setOpenSignOutDialog(false)
            setOnSignOutClicked(true)
        } else {
            setOpenSignOutDialog(false)
        }
    }

    return (
        <div>
            {openSignOutDialog && <div className='dialog'>
                <div class="dialog-content">
                    <h1>Are you sure you want to Sign Out? </h1>
                    <div>
                        <button onClick={() => onSignOutClick("no")}>No</button>
                        <button onClick={() => onSignOutClick("yes")}>Yes</button>
                    </div>
                </div>
            </div>}
            { onSignOutClicked && <Redirect push to='/' />}
            { onAboutClicked && <Redirect push to='/about' />}

            <Header
                onToggleChange={onToggleChange}
                onSearchClicked={onSearchClicked}
                handleChange={handleChange}
                searchText={searchText} />

            <HomeContent
                openNav={openNav}
                searchText={searchText}
                isSearchClicked={isSearchClicked}
                changeButtonClickState={changeButtonClickState}
                onNavigationItemClick={onNavigationItemClick} />

        </div>
    )
}