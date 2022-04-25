
import { Outlet } from 'react-router-dom';
import React from 'react'

const User = () => {
    return (
        <div>
            user page
            {/* 留给子组件的出口 */}
            <Outlet />
        </div>
    )
}

export default User
