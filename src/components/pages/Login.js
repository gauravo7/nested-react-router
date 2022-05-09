import React from 'react';
import { Link } from 'react-router-dom';
class Login extends React.Component {
    render(){
        return <>
            <header>Header Login Page</header>
            <p>Wecomet</p>
            <Link to="/user">User Page</Link><br/>
            <Link to="/user/mypro">Second Page</Link>
            <footer>footer Login Page</footer>
        </>;
    }
}
export default   Login;