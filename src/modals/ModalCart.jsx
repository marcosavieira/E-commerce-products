import "./style.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const ModalCart = () => {
    const { price, title, values } = useSelector((state) => state.cart);

    const total = price * values;
    return (
        <div className="container-modal">
            <div className="header-modal">
                <strong>Cart</strong>
            </div>
            <div className="content-cart">
                <div className="content-cart-product">
                    <img src="" alt="" />
                </div>
                <div className="content-cart-data">
                    <p>{title}</p>
                    <p>
                        ${price} x {values} <strong>${total}</strong>
                    </p>
                </div>
                <div className="content-cart-trash">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="container-cart-button">
                <button>Checkout</button>
            </div>
        </div>
    );
};
