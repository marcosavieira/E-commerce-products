import "./style.css";
import {
    name,
    company,
    description,
    desc,
    price,
    priceAtual,
} from "../../mock/product.json";
import cart from "../../assets/icon-cart-button.svg";
import plus from "../../assets/icon-plus.svg";
import minus from "../../assets/icon-minus.svg";
import { useState } from "react";

export const CardDetails = () => {
    const [count, setCount] = useState(0);
    const handleAddProduct = () => {
        setCount(count + 1);
    };
    const handleRemoveProduct = () => {
        count > 0 && setCount(count - 1);
    };
    return (
        <div className="card-details">
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
                    <span className="container-add" onClick={handleAddProduct}>
                        <img src={plus} alt="" />
                    </span>
                </button>
                <button className="button-cart">
                    <img src={cart} alt="" />

                    <strong id="text-button-cart">Add to cart</strong>
                </button>
            </div>
        </div>
    );
};
