import { store } from "@/store/store";
import * as authDuck from "@/store/reducers/auth.duck";
import generateNavbar from "@/components/navbar/navbar.config";
import { useNavigate, useLocation } from "react-router-dom";

export async function useRoleAccess (){
    const location = useLocation();
    const navigate = useNavigate();
    const navbarConfig = generateNavbar();

    const auth = store.getState().user;
    console.log(auth);
    const user = auth?.user;
    console.log(user);

    const locationPath = location.pathname;
    console.log(locationPath);

    const userRole = navbarConfig?.items?.find(
        (item: any) => item.path === locationPath
    );
    console.log(userRole);

    if (!user) {
        store.dispatch(authDuck.actions.logout());
        console.log("logout");
        navigate("/auth/login");
    } else if (!userRole) {
        console.log("not found");
        navigate("/home");
    }
};

export default useRoleAccess;
