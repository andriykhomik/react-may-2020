import React from 'react';
import {links, user} from '../../constants';
import Logo from '../../assets/react.png';
import {UserInfo} from '../user-info/UserInfoFromLecture';

import './Header.scss';

export const Header = () => {
    return (
        <div className="may-header navbar">
            <img src={Logo} className="may-header-logo" alt="logotype"/>
            <div className="may-header-links-wrapper">
                {/* done_todo: переписать рендеринг этих ссылок используя links.map метод */}
                {
                    links.map((item, index) => {
                        return (
                            <div className="nav-item" key={index}>
                                <a href={item.url} className="may-header-links-wrapper-link nav-link">
                                    {item.name}
                                </a>
                            </div>
                        );
                    })
                }
            </div>
            <UserInfo user={user}/>
        </div>
    );
};