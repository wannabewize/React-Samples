import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logout} from './Actions';

const UserComponent = () => {
    const user = useSelector(state => state.auth.user);

    console.log('UserComponent user :', user);

    return (
        <span>
            {user
                ? 
                    <>
                       {user.email}, <a onClick={logout} href="#">Logout</a>
                    </>
                : <Link to="/login">Login</Link>
            }
        </span>
    )
}

export default UserComponent;