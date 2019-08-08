import React from 'react';

const SideMenu = () => {
    return (
        <div>
            <button id="btn-menu-myaccount" className="active btn-default"><i className="fas fa-money-check-alt"></i>My
                account</button>
            <button id="btn-client-logout" className="btn-default"><i className="fas fa-sign-out-alt"></i>Sign out</button>
        </div>
    );
}

export default SideMenu;