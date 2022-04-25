import React, { Suspense } from 'react';
import { router } from '../router'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Menus = () => {
    return (
        <Router>
            <Suspense fallback={<>loading</>}>
                <Layout style={{ height: '100%' }}>
                    <Header className="header">
                        <div className="logo" />
                        <h1 style={{color:'white'}}>后台管理系统</h1>
                    </Header>
                    <Layout>
                        <Sider width={300} style={{ background: '#ffffff' }}>
                            <Menu
                                defaultSelectedKeys={['1']}
                                mode="inline"
                                theme="dark"
                                style={{ height: '100%' }}
                            >
                                {
                                    router.map((r, index) => {
                                        if (!r.children) {
                                            return (
                                                <Menu.Item key={r.id} icon={r.meta.icon}>
                                                    <Link to={r.path}>{r.meta.title}</Link>
                                                </Menu.Item>
                                            );
                                        } else {
                                            return (
                                                <SubMenu
                                                    key={r.id}
                                                    icon={r.meta.icon}
                                                    title={r.meta.title}
                                                >
                                                    {r.children.map((r1, i) => {
                                                        return (
                                                            <Menu.Item key={r1.id} icon={r1.meta.icon}>
                                                                <Link to={r1.path}>{r1.meta.title}</Link>
                                                            </Menu.Item>
                                                        )
                                                    })}

                                                </SubMenu>
                                            )
                                        }
                                    })
                                }
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item>List</Breadcrumb.Item>
                                    <Breadcrumb.Item>App</Breadcrumb.Item>
                                    </Breadcrumb> */}
                            <div style={{ margin: '16px 0' }}>
                                首页 / 用户管理 / 用户列表
                            </div>
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                {
                                    router.map((r) => {
                                        if (r.children) {
                                            return (
                                                r.children.map((r1, i) => {
                                                    return (
                                                        <Routes key={r1.id}>
                                                            <Route path={r1.path} element={r1.component} />
                                                        </Routes>
                                                    )
                                                })
                                            )

                                        } else {
                                            return (
                                                <Routes key={r.id}>
                                                    <Route path={r.path} element={r.component} />
                                                </Routes>
                                            )
                                        }
                                    })
                                }
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Suspense>
        </Router >
    )
}

export default Menus
