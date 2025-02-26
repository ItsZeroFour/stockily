import React from "react";
import style from "./style.module.scss";
import Banner from "../../components/banner/Banner";
import { useNavigate } from "react-router-dom";
import afterChatPerson3 from "../../assets/images/after-chat-3.png";

const Advice = () => {
  const navigate = useNavigate();

  return (
    <section className={style.advice}>
      <div className="container">
        <div className={`wrapper ${style.advice__wrapper}`}>
          <Banner />

          <div
            className={`${style.after_chat__person} ${style.after_chat__person__third}`}
          >
            <div className={style.after_chat__messages}>
              <div className={style.after_chat__message}>
                <p>
                  No, you are wrong! But I have some advice on how to trade.
                </p>
              </div>
            </div>

            <img src={afterChatPerson3} alt="after chat 3" />

            <button onClick={() => navigate("/advice-sec")}>
              How to top up?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advice;
