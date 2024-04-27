import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

import Sidebarstyle from '../../styles/Sidebar.module.css'
import 'react-pro-sidebar/dist/css/styles.css';

function Sidebar(props) {

    const sideBarCollapsed = useSelector(state => state.sidebar.sidebarCollapsed)
    // const dispatch = useDispatch()

    return (
        <div className={Sidebarstyle.sidebarWrap}>
        <ProSidebar collapsed={sideBarCollapsed} >
        <Menu iconShape="square">
            <MenuItem icon={<BookOutlinedIcon />}>Dashboard</MenuItem>
            <MenuItem icon={<MessageOutlinedIcon />}>Dashboard</MenuItem>
            <MenuItem icon={<NotificationsNoneOutlinedIcon />}>Dashboard</MenuItem>
            <MenuItem icon={<AdminPanelSettingsOutlinedIcon />}>Dashboard</MenuItem>
        </Menu>
        </ProSidebar>
        </div>
    )
}

export default Sidebar
