import { Link, useNavigate } from "react-router-dom"
import Button from "../../common/Button/Button"
import Logo from "./components/Logo/Logo"
import './Header.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { loginSuccessAction } from "../../store/user/actions"
import { logout, UserState } from "../../store/user/reducer"

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState<UserState>({
        isAuth: false,
        name: '',
        email: '',
        token: '',
    });
    useEffect(() => {
        const token = localStorage.getItem("token");
        // If token is not present, navigate to login page automatically and user should be able to access register page
        if (!token && window.location.pathname !== "/login" && window.location.pathname !== "/register") {
            navigate("/login");
        } else {
            if (token) {
                dispatch(loginSuccessAction({
                    name: localStorage.getItem("name") || "",
                    email: localStorage.getItem("email") || "",
                    token: token || "",
                    isAuth: !!token
                }));
                setUser({
                    ...user,
                    name: localStorage.getItem("name") || "",
                    email: localStorage.getItem("email") || "",
                    token: localStorage.getItem("token") || "",
                });
            }
        }


    }, [navigate])
    return (
        <div className="header__container">
            <div className="header">
                <Logo />
                <div className="header__nav">
                    <Link to="/" className="nav__link">Home</Link>
                    <Link to="/courses" className="nav__link">Courses</Link>
                    {user.name && <p className="username">{user.name}</p>}
                    {localStorage.getItem("token") && <Button title="Logout" onClick={() => {
                        dispatch(logout());
                        navigate("/login");
                    }} />}
                </div>
            </div>
        </div>
    )
}

export default Header