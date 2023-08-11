import "./style.css";
import Hamburguer from "../../assets/icon-menu.svg";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/icon-cart.svg";
import Avatar from "../../assets/image-avatar.png";

export const Header = () => {
    return (
        <header className="header">
            <div className="nav-left-header">
                <img src={Hamburguer} />
                <img src={Logo} />
            </div>
            <div className="nav-right-header">
                <img src={Cart} />
                <img src={Avatar} />
            </div>
        </header>
    );
};
