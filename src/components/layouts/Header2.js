import React from 'react';
import { Link } from 'react-router-dom';
class Header2 extends React.Component {
    render(){
        return <>
        <h2>NEW Header Page</h2>
            <Link to="/">Login Page</Link>
        </>;
    }
}
export default   Header2;