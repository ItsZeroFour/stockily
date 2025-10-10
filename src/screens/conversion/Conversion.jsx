import React, { useEffect } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import tab from "../../assets/images/Tab.png";
import { useTranslation } from "react-i18next";
import apple from "../../assets/icons/apple.svg";
import gplay from "../../assets/icons/gplay.svg";
import { useNavigate } from "react-router-dom";

const Final = ({ redirectUrl }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className={style.final}>
      <div className="container">
        <div className={`wrapper ${style.final__wrapper}`}>
          <div className={style.final__content}>
            <h1>
              Start earning <br /> for real
            </h1>
            <p>
              Double your first deposit — use promo code <span>GAMEHERO</span>{" "}
              for 100% bonus
            </p>

            <Link to="https://tradesapp.tips/3QSBsQGG" target="_blank">
              START TRADING
            </Link>

            <div className={style.final__img}>
              <img src={tab} alt="tab" />
            </div>

            <div className={style.final__apps}>
              {/* <Link to="/">
                <img src={apple} alt="app store" />

                <div className={style.final__apps__text}>
                  <p>Download on</p>
                  <h4>App store</h4>
                </div>
              </Link> */}

              <Link to="https://tradesapp.tips/8XK7xTF5" target="_blank">
                <img src={gplay} alt="google play" />

                <div className={style.final__apps__text}>
                  <p>Download on</p>
                  <h4>Google play</h4>
                </div>
              </Link>
            </div>

            <div className={style.final__bottom}>
              <Link to="" onClick={() => navigate(-1)}>
                {t("finalStay")}
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
