import { PieChartOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons'
import React, { lazy, ReactNode } from 'react'
const Home = lazy(() => import('../pages/Home'))
const UserDetail = lazy(() => import('../pages/UserDetail'))
const UserList = lazy(() => import('../pages/UserList'))


export interface IRouter {
    id: number
    path: string
    meta: {
        title: string
        icon: ReactNode
    }
    auth?: boolean
    component?: ReactNode
    children?: IRouter[]
}

export const router: IRouter[] = [{
    id: 1,
    path: '/',
    meta: {
        title: "首页",
        icon: <PieChartOutlined />,
    },
    auth: false,
    component: <Home />
},
{
    id: 2,
    path: '/user',
    meta: {
        title: "用户管理",
        icon: <UserOutlined />,
    },
    auth: false,
    children: [{
        id: 3,
        path: '/user/list',
        meta: {
            title: "用户列表",
            icon: <UnorderedListOutlined />,
        },
        component: <UserList />
    },
    {
        id: 4,
        path: '/user/detail',
        meta: {
            title: "用户详情",
            icon: <UnorderedListOutlined />,
        },
        component: <UserDetail />
    }]

}]