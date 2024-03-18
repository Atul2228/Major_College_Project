// import React from 'react'
import AllProducts from "./AllProducts"

import DashBoardSideBar from "./DashBoardSideBar"
import styles from "./ShopHomePage.module.css"

function ShopAllProducts() {
  return (
    <div className={styles.container} style={{position:"fluid"}}>
    <DashBoardSideBar/>

   <main><AllProducts/></main>
</div>
  )
}

export default ShopAllProducts
