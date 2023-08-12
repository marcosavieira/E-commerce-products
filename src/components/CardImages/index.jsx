import "./style.css";
import { useMediaQuery } from "react-responsive";
import { images, next, previous } from "../../mock/product.json";
import { useState } from "react";

export const CardImages = () => {
    const [imgIndex, setImgIndex] = useState(0);

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 902 });
        return isDesktop ? children : null;
    };

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 901 });
        return isMobile ? children : null;
    };

    const handleProductImgNext = () => {
        setImgIndex((imgIndex + 1) % images.length);
    };

    const handleProductImgPrevious = () => {
        setImgIndex((imgIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="container-card-images">
            {console.log(images.length)}
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
