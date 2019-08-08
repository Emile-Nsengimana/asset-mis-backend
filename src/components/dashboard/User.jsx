import React, { Component } from 'react';
import SideBar from '../menu/SideBar.jsx';
import Brand from '../../assets/img/logo.png';
import MainContent from '../miscellenious/MainContent.jsx';
import CreateAccount from '../miscellenious/CreateAccount.jsx';

class UserPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="nav">
                    {/* <img id="menu-toggle" src="./img/menu_bar.png" alt="menu" /> */}
                    <img src={Brand} alt="logo" />
                </div>
                <div id="all" className="client">
                    {/* <!-- =============================================== SIDE MENU =================================== --> */}
                    <div id="menu" className="aside">
                        <SideBar />
                    </div>

                    {/* <!-- =============================================== MAIN CONTENT =================================== --> */}
                    <div className="main">
                        <MainContent />
                    </div>
                    {/* <!-- =============================================== TRANSFER ==================================== --> */}


                    {/* <!-- =============================================== TRANSACTION HISTORY =================================== --> */}

                    {/* <!-- =============================================== PROFILE =================================== --> */}

                </div>
                {/* // <!-- ============================================== MODAL CREATE ACCOUNT =================================== --> */}
                <CreateAccount />
            </React.Fragment>
        );
    }
}
export default UserPage;
