
// import React, { Component } from 'react';
import { matchPath, Navigate, useLocation, useParams} from 'react-router-dom';
// import { withRouter} from 'react-router'
// class UserDetail extends Component<any, any> {
//     componentDidMount() {
//         // 路由匹配matchPath(pattern: PathPattern | string,pathname: string): PathMatch<ParamKey> | null;
//         const match = matchPath({
//             path: '/user/detail/:id'
//         }, '/user/detail/1')
//         console.log(match);
        
//     }
    
//     auth = true
//     render() {
//         if (!this.auth) {
//             //重定向
//             return <Navigate to='/login' replace={ true}/>
//         }
//         return (
//             <div>
//                 user detail
//             </div>
//         );
//     }
// }

// export default UserDetail;

import React, { useEffect, useState } from 'react'

const UserDetail = () => {
    // useState
    const location = useLocation();
    const params = useParams();
    useEffect(() => {
        console.log(location, params);
    })
    let auth = true
    const match = matchPath({
            path: '/user/detail/:id'
        }, '/user/detail/1')
        console.log(match);
    
    if (!auth) {
        //重定向
        return <Navigate to='/login' replace={true} />
    }
    return (
        <div>
            user detail
        </div>
    );
}

export default UserDetail
