import "./style.css";
import { images, next, previous } from "../../mock/product.json";
import { useState } from "react";
import { Desktop, Mobile } from "../../hooks/responsive";

export const CardImages = () => {
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
