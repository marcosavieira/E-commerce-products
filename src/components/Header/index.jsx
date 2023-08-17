import "./style.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Hamburguer from "../../assets/icon-menu.svg";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/icon-cart.svg";
import Avatar from "../../assets/image-avatar.png";

export const Header = () => {
    const cartValue = useSelector((state) => state.cart.value);
    return (
        <header className="header">
            {console.log(cartValue)}
            <div className="nav-left-header">
                <img src={Hamburguer} />
                <img src={Logo} />
            </div>
            <div className="nav-right-header">
                <div className="container-cart">
                    {cartValue > 0 && (
                        <div className="card-cart-value">
                            <span id="cart-value">{cartValue}</span>
                        </div>
                    )}
                    <img src={Cart}></img>
                </div>

                <img src={Avatar} />
            </div>
        </header>
    );
};
