import React, { useRef } from "react";

export default function ItemPoint(props) {
    const refPoint = useRef();

    const ClosePoint = (ref) => {
        ref.current.style.display = 'none';
    }

    return (
        <div className={`popup-custom point${props.id}`} ref={refPoint}>
            <i className="popup-close-btn bi bi-x" onClick={() => ClosePoint(refPoint)}></i>
            <h1>{props.name}</h1>
            <img src={props.img} alt={`point${props.id}`} />
            <p className="text-1">{props.text}</p>
            <a href={props.link} target='_blank' rel="noreferrer">
                <button>Open Link</button>
            </a>
        </div>
    );
}
