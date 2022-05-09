import React from 'react';
import { Outlet } from 'react-router-dom';
import Header2 from '../layouts/Header2';
class Users extends React.Component {
    render(){
        return <>
            <Header2/>
            All User Page
            <Outlet/>
        </>
    }
}
export default   Users;