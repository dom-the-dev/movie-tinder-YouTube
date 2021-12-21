import React from 'react';
import {Link} from "react-router-dom";
import {useAuth} from "../auth";

const Layout = ({children}) => {
    const auth = useAuth();

    return (
        <div>
            <header>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/profile"}>Profile</Link></li>
                    {auth.user ?
                        <li>
                            <button onClick={auth.logout}>Logout</button>
                        </li>
                        :
                        <li><Link to={"/sign-in"}>Sign In</Link></li>
                    }
                </ul>
            </header>

            <main>
                {children}
            </main>

        </div>
    );
};

export default Layout;
