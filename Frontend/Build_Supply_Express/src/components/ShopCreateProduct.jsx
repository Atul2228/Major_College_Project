import CreateProduct from "./CreateProduct"
import DashBoardSideBar from "./DashBoardSideBar"
import styles from "./ShopHomePage.module.css"


function ShopCreateProduct() {
  return (
    <div className={styles.container} style={{position:"fluid"}}>
    <DashBoardSideBar/>

   <main><CreateProduct/></main>
</div>
  )
}

export default ShopCreateProduct
