import React from 'react';
import {Link} from "react-router-dom";
import {useAuth} from "../auth";
import '../App.css';

const Layout = ({children}) => {
    const auth = useAuth();

    return (
        <div>
            <header className={"header"}>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    {auth.user ?
                        <>
                        <li>
                            <Link to={"/profile"}>Profile</Link>
                        </li>
                        <li>
                            <Link to={"/watchlist"}>Watchlist</Link>
                        </li>
                        <li>
                            <button onClick={auth.logout}>Logout</button>
                        </li>
                        </>
                        :
                        <li><Link to={"/sign-in"}>Sign In</Link></li>
                    }
                </ul>
            </header>

            <main className={"container"}>
                {children}
            </main>

        </div>
    );
};

export default Layout;
