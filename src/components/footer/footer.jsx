import React from "react";
import "../../sass/__footer.scss";
import img1 from "../../assets/fimg1.png";
import img2 from "../../assets/fimg2.png";
import img3 from "../../assets/fimg3.png";
import insta from "../../assets/insta.png";
import face from "../../assets/face.png";
import wk from "../../assets/wk.png";
const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="container">
        <div className="footer__section">
          <div className="footer__info">
            <div className="footer__info-del">
              <div>
                <img src={img1} alt="" />
                <p>Готовим вручную и c любовью</p>
              </div>
              <div>
                <img src={img2} alt="" />
                <p>Доставим в день заказа</p>
              </div>
              <div>
                <img src={img3} alt="" />
                <p>100% миндальная мука и натуральные ингредиенты</p>
              </div>
            </div>
            <div>
              <p>
                © 2021 Макароншоп "Квантум", Санкт-Петербург, улица Маршала
                Тухачевского, дом 22
              </p>
            </div>
          </div>
          <div className="footer__information">
            <h3>Информация</h3>
            <p> компании</p>
            <p>Гарантии вкуса и свежести</p>
            <p>Доставка и оплата</p>
            <p>Контакты</p>
          </div>
          <div className="footer__category">
            <h3>Каталог</h3>
            <p>Каталог десертов</p>
            <p>Готовые наборы</p>
            <p>Собрать свой набор</p>
            <p>Наборы печатью</p>
            <p>Свадебные предложения</p>
            <p>Акции</p>
          </div>
          <div className="footer__business">
            <h3>ДЛЯ БИЗНЕСА</h3>
            <p>Корпоративные подарки</p>
            <p>Для юридических лиц</p>
            <p>Оповикам</p>
          </div>
          <div className="footer__media">
            <h3>+7 (812) 309 82 88</h3>
            <p> c 9:00 до 21:00</p>
            <div className="media">
              <img src={insta} alt="" />
              <img src={face} alt="" />
              <img src={wk} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
