import React from "react";
import "../../sass/__subHeader.scss";
import logo from "../../assets/logo.png";
import bott from "../../assets/bott.png";
const SubHeader = () => {
  return (
    <div className="subHeader__wrapper">
      <div className="container">
        <div className="subHeader__section">
          <div>
            <p>СЛАДКИЕ ДНИ</p>
            <span>%</span>
          </div>
          <div>
            <p>подарочные наборы</p>
            <img src={bott} alt="" />
          </div>
          <p>Собрать набор</p>
          <img src={logo} alt="" />
          <p>Создать дизайн</p>
          <div>
            <p>КОМПАНИЯМ</p>
            <img src={bott} alt="" />
          </div>
          <div>
            <p>ВЕСЬ КАТАЛОГ</p>
            <img src={bott} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
