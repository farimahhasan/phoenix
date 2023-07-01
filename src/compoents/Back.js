import React from "react";
import arrowUp from '../images/arrow-left-short.svg'
import { useNavigate } from 'react-router-dom';

const Back = () => {

    const navigate = useNavigate();
    const back = () => {
        navigate(-1)
    }

    return (
        <div className="back-btn position-fixed button-link bg-white" onClick={back}>
            <img src={arrowUp} alt="arrow icon"/>
        </div>
    );
};

export default Back;