
import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lee from '../Lee';
import Home from './Home';
import Login from './Login';
import User from './User';
import UserDetail from './UserDetail';
import UserList from './UserList';

//路由使用样例
class router extends Component {
    render() {
        return (
            <div>
                <Router>
                    <ul>
                        <li>
                            <Link to={'/'}>page</Link>
                        </li>
                        <li>
                            <Link to={'/login'}>login</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>about</Link>
                        </li>
                        <li>
                            <Link to={'/user'} >
                                user
                            </Link>
                            <ul>
                                <li>
                                    <Link to={'/user/list'}>userList</Link>
                                </li>
                                <li>
                                    <Link to={'/user/detail'}>userDetail</Link>
                                </li>
                            </ul>
                        </li>
                        
                    </ul>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path={'/about'} element={<Lee />}>
                        </Route>
                        <Route path={'/user/*'} element={<User />}>
                            {/* 路由嵌套 */}
                            <Route path={'list'} element={<UserList/>}/>
                            <Route path={'detail/:id'} element={<UserDetail/>}/>
                        </Route>
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default router;