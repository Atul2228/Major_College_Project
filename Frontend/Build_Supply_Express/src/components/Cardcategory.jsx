// import React from 'react'
import styles from "./Cardcategory.module.css";
import { Link, useNavigate } from "react-router-dom";
import { categoriesData } from "../static/data";

function Cardcategory() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row my-lg-4 my-0">
        {categoriesData.map((item) => {
          const hadleSubmit = (item) =>
            navigate(`/products?category=${item.title}`);

          return (
            <div
              key={item.id}
              className="col-md-3"
              onClick={() => hadleSubmit(item)}
            >
              <div className={styles.block}>
                <div
                  className="card    my-lg-0 my-3"
                  style={{ position: "static" }}
                >
                  <div className="card-body  d-flex justify-content-center ">
                    <img
                      src={item.image_Url}
                      alt="card1"
                      className={styles.image}
                    />
                  </div>
                  <Link
                    to={`/product?category/=${item.title}`}
                    className="btn mt-auto bg-info w-100 "
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cardcategory;
