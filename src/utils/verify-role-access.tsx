
export function useRoleAccess(navbarConfig: any) {
    // const auth = useSelector((state: any) => state?.user);
    try {
        let auth = JSON.parse(localStorage.getItem("authData") || "{}");

        if (auth) {
            console.log(auth);
            const user = auth?.user;
            console.log(user);
            const locationPath = location.pathname;
            console.log(locationPath);
            console.log(navbarConfig);
            const userRole = navbarConfig?.items?.find(
                (item: any) => item.path === locationPath
            );
            console.log(userRole);
            if (!user) {
                localStorage.removeItem("authData");
                window.location.href = "/auth/login";
            } else if (!userRole) {
                window.location.href = "/home";
            }
        } else {
            localStorage.removeItem("authData");
            window.location.href = "/auth/login";
        }
    } catch (error) {
        localStorage.removeItem("authData");
        window.location.href = "/auth/login";
    }
}
