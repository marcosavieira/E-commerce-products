import "./style.css";
import {
    name,
    company,
    description,
    desc,
    price,
    priceAtual,
} from "../../mock/product.json";
import cartIcon from "../../assets/icon-cart-button.svg";
import plus from "../../assets/icon-plus.svg";
import minus from "../../assets/icon-minus.svg";
import {
    decrement,
    increment,
    resetValue,
} from "../../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addPrice, addTitle } from "../../features/cart/cartSlice";

export const CardDetails = () => {
    const count = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();

    const handleRemoveProduct = () => {
        count > 0 && dispatch(decrement());
    };

    const handleCart = () => {
        dispatch(addToCart(count));
        dispatch(addPrice(priceAtual));
        dispatch(addTitle(name));
        dispatch(resetValue(0));
    };

    return (
        <div className="card-details">
            {console.log(count)}
            <strong>{company.toLocaleUpperCase()}</strong>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="card-product-pricing">
                <div className="product-pricing-desc">
                    <h1 id="price-atual">{priceAtual}</h1>
                    <div className="card-desc">
                        <strong id="desc">{desc}</strong>
                    </div>
                </div>
                <div className="product-pricing-old">
                    <h3 id="price">{price}</h3>
                </div>
            </div>
            <div className="card-buttons">
                <button className="button-add">
                    <span
                        className="container-add"
                        onClick={handleRemoveProduct}
                    >
                        <img src={minus} alt="" />
                    </span>

                    <strong id="count">{count}</strong>
                    <span
                        className="container-add"
                        onClick={() => dispatch(increment())}
                    >
                        <img src={plus} alt="" />
                    </span>
                </button>
                <button className="button-cart" onClick={handleCart}>
                    <img src={cartIcon} alt="" />

                    <strong id="text-button-cart">Add to cart</strong>
                </button>
            </div>
        </div>
    );
};
