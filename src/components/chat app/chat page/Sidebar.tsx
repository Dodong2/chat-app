import React from 'react';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <>
        <div className={`overlay ${isOpen ? 'visible' : '' }`} onClick={toggleSidebar}></div>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-content">
                <p>Sidebar Content Goes Here</p>
                <p>(for purposes)</p>
            </div>
        </div>
        </>
    );
};

export default Sidebar;
