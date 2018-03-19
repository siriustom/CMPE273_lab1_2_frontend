import React from 'react'
import logo from '../assets/images/Gangs_logo.svg';
import {Icon} from 'antd';
import { Link, Redirect, BrowserRouter } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">FreeLancer</h1>
                {
                    this.props.isLoggedIn &&
                    <div className="header-widget" style={{marginLeft: '20px'}}>
                        <Link to={'/profile'}>Profile</Link>
                    </div>
                }
                {
                    this.props.isLoggedIn &&
                    <div className="header-widget">
                        <Link to={'/projects'}>All Projects</Link>
                    </div>
                }
                {
                    this.props.isLoggedIn &&
                    <div className="header-widget">
                        <Link to={'/bidlist'}>Your BidList</Link>
                    </div>
                }
                {
                    this.props.isLoggedIn &&
                    <div className="header-widget">
                        <Link to={'/bidlist'}>BidListAsEmployer</Link>
                    </div>
                }
                {
                    this.props.isLoggedIn &&
                    <div className="header-widget" style={{marginLeft: '20px'}}>
                        <Link to={'/postproject'}>Post Project</Link>
                    </div>
                }
                {
                    this.props.isLoggedIn &&
                        <div className="header-widget">
                            <a onClick={this.props.handleLogout}>
                                <Icon type="logout" className={'header-logout'}/>
                            </a>
                        </div>
                }
            </header>
        );
    }
}

