import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carslanding.css";
const CarCard = ({ title, value, bgColor, textColor, icon }) => {
    return (
        <div className="custom-card animate__animated animate__fadeInTopLeft" style={{ backgroundColor: textColor, color: bgColor }}>
            <div className="card-body text-center">
                <h3 className="card-title fw-bold" style={{ fontSize: "3rem" }}>
                <i className={icon} style={{ fontSize: "2.5rem" }}></i> {title}
                </h3>
                <p className="fw-bold speed-text" style={{ fontSize: "1rem" }}>{value}</p>
            </div>
        </div>
    );
};

export default CarCard;
