import React from "react";
import "../../sass/__supHeader.scss";
import loc from "../../assets/loc.png";
import tel from "../../assets/tel.png";
import bag from "../../assets/bag.png";
import telegram from "../../assets/telegram.png";
import vk from "../../assets/vk.png";
import ok from "../../assets/ok.png";
const SupHeader = () => {
  return (
    <div className="supHeader__wrapper">
      <div className="container">
        <div className="supHeader__section">
          <div className="supHeader__section-links">
            <a href="#">Гарантия свежести</a>
            <a href="#">Доставка и оплата</a>
            <a href="#">Оптовые поставки</a>
            <a href="#">Контакты</a>
          </div>
          <div className="supHeader__section-info">
            <span>
              <img src={loc} alt="img" />
              <p>Санкт-Петербург</p>
            </span>
            <span>
              <img src={tel} alt="img" />
              <p>8 812 309-82-88</p>
            </span>
            <span>
              <img src={bag} alt="img" />
              <p>В корзине (4 товара)</p>
            </span>
            <article>
              <img src={telegram} alt="" />
              <img src={vk} alt="" />
              <img src={ok} alt="" />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupHeader;
