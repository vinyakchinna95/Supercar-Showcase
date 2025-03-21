import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carslanding.css";
import car1 from "../assets/2.png";
import car2 from "../assets/3.png";
import car3 from "../assets/4.png";
import car4 from "../assets/1.png";
import Card from "./Card";

const carData = [
    {name: "FERRARI SF90 Spider",image: car1,bgColor: "#053e6c",textColor: "#ffffff",Speed: "0-100 km/h\n2.5 sec",TS: "340 km/h \n211 mph",rpm: "9,500 \n RPM",Hp: "840 HP",engine: "6.5L  \n V12"},
    {name: "FERRARI 812 Competizione",image: car2,bgColor: "#d4af37",textColor: "#000000",Speed: "0-100 km/h\n2.85 sec",TS: "340 km/h \n211 mph",rpm: "9,500 \n RPM",Hp: "830 HP",engine: "6.5L \n V12"},
    {name: "FERRARI Daytona SP3",image: car3,bgColor: "#8b0000",textColor: "#ffffff",Speed: "0-100 km/h\n2.85 sec",TS: "340 km/h \n211 mph",rpm: "9,500 \n RPM",Hp: "840 HP",engine: "6.5L  \n V12"},
    {name: "FERRARI Stradale",image: car4,bgColor: "#897875",textColor: "#ffffff",Speed: "0-100 km/h\n2.5 sec",TS: "330 km/h \n205 mph",rpm: "8,000 \n RPM",Hp: "986 HP",engine: "4.0L Twin-Turbocharged \n V8 + Electric Motors"}
];

const CarsLandingPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carData.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carData.length) % carData.length);
    };

    const currentCar = carData[currentIndex];

    return (
        <div
            className="container-fluid text-center min-vh-100 d-flex flex-column justify-content-center p-3 "
            style={{ backgroundColor: currentCar.bgColor, color: currentCar.textColor, transition: "background-color 0.5s, color 0.5s" }}
        >
            {/* Image Section with Responsive Buttons */}
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between  gap-3 ">
                <button style={{ backgroundColor: currentCar.textColor, color: currentCar.bgColor }} className="btn  btn-responsive" onClick={prevImage}><i className="fa-solid fa-arrow-left"></i></button>
                {/* Image with fade-in effect */}
                <div className="position-relative d-inline-block animate__animated animate__fadeInUp">
                    <div className="position-absolute top-50 start-50 translate-middle text-white fw-bold text-nowrap text-uppercase animate__animated animate__fadeInLeft">
                        <h1 key={currentIndex} className="title-responsive position-absolute top-50 start-50 translate-middle text-white fw-bold text-uppercase animate__animated animate__fadeInTopLeft">
                            {currentCar.name}
                        </h1>

                    </div>
                    <img
                        key={currentIndex}
                        src={currentCar.image}
                        alt={currentCar.name}
                        className="car-image-responsive animate__animated animate__fadeInTopLeft"
                        style={{ width: "50rem" }}
                    />
                </div>

                <button style={{ backgroundColor: currentCar.textColor, color: currentCar.bgColor }} className="btn  btn-responsive" onClick={nextImage}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div>
                <h1 key={currentIndex} className="fw-bold animate__animated animate__fadeInTopLeft text-uppercase" style={{ fontSize: "50px" }} >
                    {currentCar.name}
                </h1>
            </div>
            <div key={currentIndex} className="card_box animate__animated animate__fadeInTopLeft">
                <Card key={currentIndex} value={currentCar.Speed} bgColor={currentCar.bgColor} textColor={currentCar.textColor} icon="fa-solid fa-gauge" />
                <Card key={currentIndex} value={currentCar.TS} bgColor={currentCar.bgColor} textColor={currentCar.textColor} icon="fa-solid fa-gauge-high" />
                <Card key={currentIndex} value={currentCar.rpm} bgColor={currentCar.bgColor} textColor={currentCar.textColor}  />
                <Card key={currentIndex} value={currentCar.Hp} bgColor={currentCar.bgColor} textColor={currentCar.textColor}/>
                <Card key={currentIndex} value={currentCar.engine} bgColor={currentCar.bgColor} textColor={currentCar.textColor} icon="fa-solid fa-cogs" />
            </div>
        </div>
    );
};

export default CarsLandingPage;