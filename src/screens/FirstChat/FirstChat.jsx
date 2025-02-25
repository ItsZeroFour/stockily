import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { motion } from "framer-motion";
import sisterImageAvatar from "../../assets/images/sister_avatar.png";
import personalImageAvatar from "../../assets/images/personal_avatar.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Banner from "../../components/banner/Banner";
import BannerSecondary from "../../components/banner_secondary/BannerSecondary";

const FirstChat = () => {
  const [showFirstMessage, setShowFirstMessage] = useState(false);
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [showLink, setShowLink] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const firstMessageTimer = setTimeout(() => {
      setShowFirstMessage(true);
    }, 0);

    const secondMessageTimer = setTimeout(() => {
      setShowSecondMessage(true);
    }, 2000);

    const linkTimer = setTimeout(() => {
      setShowLink(true);
    }, 3000);

    return () => {
      clearTimeout(firstMessageTimer);
      clearTimeout(secondMessageTimer);
      clearTimeout(linkTimer);
    };
  }, []);

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const fadeTransition = {
    duration: 0.5,
  };

  const firstMessageVariants = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const secondMessageVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const transition = {
    type: "tween",
    duration: 0.5,
  };

  return (
    <motion.section
      className={style.first__chat}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeVariants}
      transition={fadeTransition}
    >
      <div className="container">
        <div className={`wrapper ${style.first__chat__wrapper}`}>
          <BannerSecondary />
          <div className={style.first__chat__user}>
            <div className={style.first__chat__avatar}>
              <img src={sisterImageAvatar} alt="Sister" />
            </div>

            <h3>{t("sister")}</h3>
          </div>

          <div className={style.first__chat__history}>
            {showFirstMessage && (
              <motion.div
                className={style.first__chat__message}
                initial="hidden"
                animate="visible"
                variants={firstMessageVariants}
                transition={transition}
              >
                <div className={style.first__chat__message__avatar}>
                  <img src={sisterImageAvatar} alt="sister avatar" />
                </div>
                <div className={style.first__chat__message__content}>
                  <p>{t("sisterMsg1")}</p>
                </div>
              </motion.div>
            )}

            {showSecondMessage && (
              <motion.div
                className={`${style.first__chat__message} ${style.first__chat__message__last}`}
                initial="hidden"
                animate="visible"
                variants={secondMessageVariants}
                transition={transition}
              >
                <div className={style.first__chat__message__content}>
                  <p>{t("sisterMsg2")}</p>
                </div>
                <div className={style.first__chat__message__avatar}>
                  <img src={personalImageAvatar} alt="personal avatar" />
                </div>
              </motion.div>
            )}
          </div>

          {showLink && (
            <motion.div
              className={style.first__chat__link}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/after-chat"
                className={`${style.fadeInLink} ${showLink && style.show}`}
              >
                {t("goToSiteButton")}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default FirstChat;
