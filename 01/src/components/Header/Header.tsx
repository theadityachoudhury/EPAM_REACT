import Button from "../../common/Button/Button"
import Logo from "./components/Logo/Logo"
import './Header.css'

const Header = () => {
    return (
        <div className="header__container">
            <div className="header">
                <Logo />
                <div className="header__nav">
                    <Button title="Logout" onClick={() => { }} />
                </div>
            </div>
        </div>
    )
}

export default Header