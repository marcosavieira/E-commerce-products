import "./style.css";
import { useMediaQuery } from "react-responsive";

import product from "../../mock/product.json";
import { useState } from "react";

export const CardImages = () => {
    const cardImagesMobile = product.imagesDesktop;
    const [imgIndex, setImgIndex] = useState(0);
    const next = product.next;
    const previous = product.previous;

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 902 });
        return isDesktop ? children : null;
    };

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 901 });
        return isMobile ? children : null;
    };

    const handleProductImgNext = () => {
        if (imgIndex >= 0 || imgIndex < 3) {
            setImgIndex(imgIndex + 1);
        }
        if (imgIndex === 3) {
            setImgIndex(0);
        }
    };

    const handleProductImgPrevious = () => {
        if (imgIndex === 3 || imgIndex > 0) {
            setImgIndex(imgIndex - 1);
        }
        if (imgIndex === 0) {
            setImgIndex(3);
        }
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
                    src={cardImagesMobile[imgIndex].image}
                    alt=""
                />
            </Mobile>
        </div>
    );
};
