// import React from 'react'

import styles from "./Home.module.css";
import Homeslider from "./HomeSlider";
import Cardcategory from "./Cardcategory";
import BestDeals from "./BestDeals";

function Home() {
  return (
    <div className={styles.hombg}>
      <Homeslider />
      <Cardcategory />
      <BestDeals />
    </div>
  );
}

export default Home;
