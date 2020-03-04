import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../styles/header.css';
import '../styles/main.css'


const Header = () => (
    <div className="container">
    <header className="header">
        <div className="logo">
                프로그라피 프론트 고기훈
        </div>
        <ul className="main-nav">
            <li className="navitem" >
                <Link
                to="/Memo"
                >Todo</Link>
            </li>
            <li className="navitem">
                <Link
                to="/Movie"
                >영화</Link>
            </li>

        </ul>
    </header>
    </div>
)

export default withRouter(Header);