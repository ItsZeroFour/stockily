import React, { useEffect } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import tab from "../../assets/images/Tab.png";
import { useTranslation } from "react-i18next";
import mainImg from "../../assets/images/main_person/1.png";
import arrow from "../../assets/icons/final-arrow.svg";
import gplay from "../../assets/icons/gplay.svg";

const Final = ({ redirectUrl }) => {
  const { t } = useTranslation();

  return (
    <section className={style.final}>
      <div className="container">
        <div className={`wrapper ${style.final__wrapper}`}>
          <div className={style.final__content}>
            <h1>Now it’s a time for a real trading!</h1>

            <div className={style.final__promo}>
              <p>Start your way with our promocodes:</p>

              <Link
                to="https://tradesapp.tips/6P9pSmPd"
                target="_blank"
                className={style.final__promo__main}
              >
                <p>FIRSTHERO</p>
                <img src={arrow} alt="arrow" />
              </Link>
            </div>

            <p>Enter the promo code and get 100% of the deposit</p>

            {/* <Link to="https://tradesapp.tips/bpzd47bG" target="_blank">
              START TRADING
            </Link> */}

            <img src={mainImg} alt="main" />

            <div className={style.final__bottom}>
              <Link to="https://tradesapp.tips/w6FxZwZj" target="_blank">
                <img src={gplay} alt="google play" />

                <div className={style.final__apps__text}>
                  <p>Download on</p>
                  <h4>Google play</h4>
                </div>
              </Link>

              <Link to="https://tradesapp.tips/6P9pSmPd" target="_blank">
                Go to Stockity
              </Link>
              {/* <Link
                to="https://stockity.id/id/ad/tradinghero-rules"
                target="_blank"
              >
                {t("finalRules")}
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Final;
