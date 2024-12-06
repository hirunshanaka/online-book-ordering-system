import React from 'react';
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiOutlineCloudUpload} from "react-icons/hi";
import './SideBar.css';

export const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className="sidebar">
      <Sidebar.Logo >
        <p>Buy Bookz online shop</p> 
      </Sidebar.Logo>
      <Sidebar.Items className="sidebar-items">
        <Sidebar.ItemGroup className="sidebar-item-group">
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="sidebar-item">
            <p>Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className="sidebar-item">
            <p>Upload Books</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="sidebar-item">
            <p>Manage Books</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup> 
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
