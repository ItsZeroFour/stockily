import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import gifs from "../../assets/icons/gifs.png";
import coins from "../../assets/icons/coins.png";
import bannerSecondaryLogo from "../../assets/images/banner_secondary_logo.svg";

const BannerSecondary = () => {
  return (
    <div className={style.banner}>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/conversion" className={style.banner__link}>
            <img src={gifs} className={style.banner__image} alt="banner" />
            <div className={style.banner__main}>
              <img src={bannerSecondaryLogo} alt="logo" />
              <h2>Ready for luck?</h2>
              <p>
                Warning: trading involves financial risks.{" "}
                <Link to="/">Rules</Link>
              </p>
            </div>
            <img src={coins} className={style.banner__image} alt="banner" />
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BannerSecondary;
