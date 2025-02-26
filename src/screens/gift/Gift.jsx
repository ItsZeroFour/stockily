import React from "react";
import mainImg from "../../assets/images/tv.png";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Gift = () => {
  return (
    <section className={style.gift}>
      <div className="container">
        <div className={`wrapper ${style.gift__wrapper}`}>
          <div className={style.gift__img}>
            <img src={mainImg} alt="main" />
          </div>

          <div className={style.gift__characteristicks}>
            <div className={style.gift__top}>
              <p>Product Code: 2002220</p>
              <p>4.9</p>
            </div>

            <h4>Samsung 56gn12 TV</h4>
            <h2>2 000 000 Rp</h2>

            <Link to="">Read it 77 reviews</Link>
          </div>

          <ul className={style.gift__characteristicks__bottom}>
            <li>
              <p>Pick up at the store</p>
              <p>15 min</p>
            </li>

            <li>
              <p>Delivery</p>
              <p>From $3.4, tomorrow</p>
            </li>
          </ul>

          <Link to="/mom">Buy gift for mom</Link>
        </div>
      </div>
    </section>
  );
};

export default Gift;
