import { useEffect } from "react";
import { Button, Table, Spinner } from "react-bootstrap";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
// import { getAllProductsShop, deleteProduct } from '../.redux/actions/product';
import { getAllProductsShop, deleteProduct } from "../redux/actions/product";

const AllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { seller } = useSelector((state) => state.seller);
console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(seller?._id));
  }, [dispatch, seller?._id]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    window.location.reload();
  };

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <div className="mt-3">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Sold out</th>
                <th>Preview</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{`$${item.discountPrice}`}</td>
                    <td>{item.stock}</td>
                    <td>{item.sold_out}</td>
                    <td>
                      {/* <Link to={`/product/${item._id}`}> */}
                      <Button variant="outline-primary">
                        <AiOutlineEye size={20} />
                      </Button>
                      {/* </Link> */}
                    </td>
                    <td>
                      <Button
                        variant="outline-danger"
                        onClick={() => handleDelete(item._id)}
                      >
                        <AiOutlineDelete size={20} />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default AllProducts;
