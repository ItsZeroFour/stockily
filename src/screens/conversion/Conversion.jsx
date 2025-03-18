import React from "react";
import style from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
import tab from "../../assets/images/Tab.png";
import { useTranslation } from "react-i18next";

const Conversion = ({ redirectUrl }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className={style.final}>
      <div className="container">
        <div className={`wrapper ${style.final__wrapper}`}>
          <div className={style.final__content}>
            <h1>Register at Stockity.id</h1>
            <p>{t("finalText")}</p>

            <div className={style.final__img}>
              <img src={tab} alt="tab" />
            </div>

            <Link to={redirectUrl} target="_blank">
              {t("finalButton")}
            </Link>

            <div className={style.final__bottom}>
              <Link to="" onClick={() => navigate(-1)}>
                {t("finalStay")}
              </Link>
              <Link to="/">{t("finalRules")}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversion;
