import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderBar.module.css";
import Logo from "./Logo";

function HeaderBar() {
  const productData = [
    {
      id: 1,
      title: "Cement",
      subTitle: "",
      image_Url:
        "https://tse2.mm.bing.net/th?id=OIP.64RsVauXJm3H87jZDiBtAQHaE8&pid=Api&P=0&h=220",
    },
    {
      id: 2,
      title: "Bricks & Blocks",
      subTitle: "",
      image_Url:
        "https://tse2.mm.bing.net/th?id=OIP.V4qQNDvAjeJESjvW-WvE4wHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 3,
      title: "Tiles",
      subTitle: "",
      image_Url:
        "https://tse1.mm.bing.net/th?id=OIP.L502FzWvyN1oD3B2a1AMWwHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 4,
      title: "Sand & Aggregates",
      subTitle: "",
      image_Url:
        "https://tse4.mm.bing.net/th?id=OIP.rm3mtRxr5_UBQKmFQMPtBQHaE7&pid=Api&P=0&h=220",
    },
    {
      id: 5,
      title: "Paint & Finishes",
      subTitle: "",
      image_Url:
        "https://tse3.mm.bing.net/th?id=OIP.AvplztPWdbT_MDY3uQR-YgHaDt&pid=Api&P=0&h=220",
    },
    {
      id: 6,
      title: "TMT Steels",
      subTitle: "",
      image_Url:
        "https://tse3.mm.bing.net/th?id=OIP.ubqXKds_pYdlGvQ2uNYnSQHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 7,
      title: "Bathroom Accessories",
      subTitle: "",
      image_Url:
        "https://tse4.mm.bing.net/th?id=OIP.KvBnecj0GhoqxYrrC_1CSwHaHI&pid=Api&P=0&h=220",
    },
    {
      id: 8,
      title: "Doors",
      subTitle: "",
      image_Url:
        "https://tse2.mm.bing.net/th?id=OIP.b3x1f-wCmzm3VKYKQm4TiQHaJ3&pid=Api&P=0&h=220",
    },
    {
      id: 9,
      title: "Electrical",
      subTitle: "",
      image_Url:
        "https://tse1.mm.bing.net/th?id=OIP.kuKbMP3H7ZJLhsDU35dapgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 10,
      title: "Plumbing",
      subTitle: "",
      image_Url:
        "https://tse3.mm.bing.net/th?id=OIP.z1t0z1yuanb-xvzdtWAjSgHaE8&pid=Api&P=0&h=220",
    },
  ];

  const [searchtTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };
  return (
    <>
      <div className={styles.headbar}>
        <header className="py-3 mb-4 border-bottom bg-info bg-gradient text-white  ">
          <div className="container d-flex flex-wrap justify-content-center ">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
            >
              <svg className="bi me-2" width="40" height="20">
                <use xlinkHref="#bootstrap"></use>
              </svg>
              <span className="fs-2">
                <Logo></Logo>
              </span>
            </a>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                value={searchtTerm}
                onChange={handleSearch}
                aria-label="Search"
              />
              {searchData && searchData.length !== 0 ? (
                <div>
                  {searchData &&
                    searchData.map((i, index) => {
                      const d = i.title;
                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <div key={i.id}>
                          {/* <img src={i.image_Url} className="size-1" alt="" /> */}
                          <Link to={`/product/${Product_name}`}>{i.title}</Link>
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}
            </form>
          </div>
        </header>
      </div>
    </>
  );
}

export default HeaderBar;
