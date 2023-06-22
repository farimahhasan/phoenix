import React, { useState, useEffect } from "react";
import arrowUp from '../images/arrow-up-short.svg'

const ScrollTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            {showTopBtn &&

                <div className="scroll-top position-fixed button-link bg-white" onClick={goToTop}>
                    <img src={arrowUp} />
                </div>

            }
        </>



        // {showTopBtn && (
        //     <FaAngleUp
        //         className="icon-position icon-style"
        //         onClick={goToTop}
        //     />
        // )}

    );
}

export default ScrollTop;