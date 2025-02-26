import React from "react";
import style from "./style.module.scss";
import afterChatPerson5 from "../../assets/images/after-chat-5.png";
import ausCan from "../../assets/images/flags/aus-can.png";
import euCan from "../../assets/images/flags/eu-can.png";
import usCan from "../../assets/images/flags/us-can.png";
import usJpn from "../../assets/images/flags/us-jpn.png";
import euUs from "../../assets/images/flags/eu-us.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section className={style.advice_main}>
      <div className="contaioner">
        <div className={`wrapper ${style.advice_main__wrapper}`}>
          <div className={style.advice_main__top}>
            <img src={afterChatPerson5} alt="person" />
            <div className={style.advice_main__top__text}>
              <h4>Mohammed Shami</h4>
              <p>
                I I advise you to trade not just like that, but based on
                economic data. Stokity has a calendar for tracking important
                reports.
              </p>
            </div>
          </div>

          <ul>
            <li>
              <div className={style.advice_main__item__top}>
                <div className={style.advice_main__item__top__text}>
                  <p>Tomorrow</p>
                  <p>BoC’s Governor Macklem...</p>
                </div>

                <div className={style.advice_main__item__top__important}>
                  <p>Important</p>
                </div>
              </div>

              <ul>
                <li>
                  <img src={usCan} alt="us-can" />
                </li>

                <li>
                  <img src={euCan} alt="eu-can" />
                </li>

                <li>
                  <img src={ausCan} alt="aus-can" />
                </li>
              </ul>
            </li>

            <li>
              <div className={style.advice_main__item__top}>
                <div className={style.advice_main__item__top__text}>
                  <p>Tomorrow</p>
                  <p>Average Hourly Earnings...</p>
                </div>

                <div className={style.advice_main__item__top__important}>
                  <p>Important</p>
                </div>
              </div>

              <ul>
                <li>
                  <img src={usCan} alt="us-can" />
                </li>

                <li>
                  <img src={euUs} alt="eu-us" />
                </li>

                <li>
                  <img src={usJpn} alt="us-jpn" />
                </li>
              </ul>
            </li>

            <li>
              <div className={style.advice_main__item__top}>
                <div className={style.advice_main__item__top__text}>
                  <p>Tomorrow</p>
                  <p>Net Change in Employment</p>
                </div>

                <div className={style.advice_main__item__top__important}>
                  <p>Important</p>
                </div>
              </div>

              <ul>
                <li>
                  <img src={usCan} alt="us-can" />
                </li>

                <li>
                  <img src={ausCan} alt="aus-can" />
                </li>

                <li>
                  <img src={euCan} alt="eu-can" />
                </li>
              </ul>
            </li>
          </ul>

          <Link to="/graphick-main">Go it!</Link>
        </div>
      </div>
    </section>
  );
};

export default Main;
