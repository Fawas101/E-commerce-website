import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../SideBar/SideBar.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div>
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position:'fixed' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large mb-5 "></i>}>
          <a href="/" className="text-decoration-none " style={{ color: 'inherit' }}>
            Admin
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to = "/dashbord" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/productlist" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/add" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">Add</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            SHOE HAVEN HUB
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
      </div>
    
    
  )
}

export default Sidebar
