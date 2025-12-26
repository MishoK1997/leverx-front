import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState } from "../store/store";

/**
 * This copmonent is responsible to protect url
 * If an user is not authenticated, will be redirected to sign-in page
 */

export default function ProtectRoute() {

    const user = useSelector((state: RootState) => state.auth.user);
    const location = useLocation()

    if(!user){
        return <Navigate to="/sign-in" replace state={{from: location}}/>
    }

    return <Outlet />
}