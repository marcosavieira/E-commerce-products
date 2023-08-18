import "./style.css";
import { images, next, previous } from "../../mock/product.json";
import { useState } from "react";
import { Desktop, Mobile } from "../../hooks/responsive";
import { ModalCart } from "../../modals/ModalCart";
import { useSelector } from "react-redux";

export const CardImages = () => {
    const modal = useSelector((state) => state);
    const [imgIndex, setImgIndex] = useState(0);

    const handleProductImgNext = () => {
        setImgIndex((imgIndex + 1) % images.length);
    };

    const handleProductImgPrevious = () => {
        setImgIndex((imgIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="container-card-images">
            <Mobile>
                {console.log(modal)}
                <div className="card-steps">
                    <span
                        className="card-previous"
                        onClick={handleProductImgPrevious}
                    >
                        <img src={previous} />
                    </span>
                    <span className="card-next" onClick={handleProductImgNext}>
                        <img src={next} />
                    </span>
                </div>
                <div>{modal && <ModalCart />}</div>
                <img
                    className="img-product-mobile"
                    style={
                        imgIndex === 0
                            ? { objectPosition: "center" }
                            : { objectPosition: "top" }
                    }
                    src={images[imgIndex].image}
                    alt=""
                />
            </Mobile>
        </div>
    );
};
