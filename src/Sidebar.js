import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import MoreIcon from '@mui/icons-material/More';
import Button from '@mui/material/Button';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            
            
            <SidebarOption  active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={PersonIcon} text="Profile" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsIcon} text="Notification" />
            <SidebarOption Icon={MailOutlineIcon} text="Message" />
            <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
            <SidebarOption Icon={ListIcon} text="Lists" />
            <SidebarOption Icon={MoreIcon} text="More" />
            <Button type="button"
                      onClick={(e) => {
                       e.preventDefault();
                  window.location.href='http://twitter.com';
                       }}variant= "outlined" className="sidebar__tweet" fullWidth>
                      Tweet
            </Button>
        </div>
    )
}

export default Sidebar
