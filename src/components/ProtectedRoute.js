import {useAuth} from "../auth";
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const auth = useAuth()
    return auth.user ? children : <Navigate to={"/sign-in"}/>
}

export default ProtectedRoute;