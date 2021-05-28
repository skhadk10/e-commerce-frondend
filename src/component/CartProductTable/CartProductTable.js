import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button, Card, Image, Spinner, Table } from "react-bootstrap";
import {
  addtoCart,
  fetchProductToCart,
} from "../../page/Cartviewproduct/CartviewproductAction";
import { Link } from "react-router-dom";

const CartProductTable = () => {
  const { isLoading, status, message, cartList } = useSelector(
    (state) => state.cartListItem
  );
  console.log(cartList);
  const [QuantityChanges, setQuantityChanges] = useState(cartList.qtyselected);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const data = localStorage.getItem("item");
  //   !cartList && cartList.push(data);
  // }, [cartList]);

  console.log("from add to cart", cartList);
  console.log(localStorage.getItem("item"));
  const handleOnquantityChanges = (listItem, qtyselected) => {
    dispatch(addtoCart(listItem, qtyselected));
  };

  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

      {status === "error" && (
        <Alert variant={status === "success" ? "success" : "danger"}>
          {message}
        </Alert>
      )}

      {cartList.length ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Discription</th>
            </tr>
          </thead>
          <tbody>
            {cartList?.map((row, i) => {
              return (
                <tr key={row._id}>
                  <td>{i + 1}</td>
                  <Link to={`/Products/${row.slug}`}>
                    <Image src={row.images[0]} />
                  </Link>
                  <td>{row.name}</td>
                  <td>{row.price}</td>
                  <td>
                    <p>
                      Quantity
                      <input
                        value={QuantityChanges}
                        placeholder={row.qtyselected}
                        name="Quantity"
                        onChange={(e) => {
                          handleOnquantityChanges(row, +e.target.value);
                        }}
                      />
                    </p>
                  </td>
                  <td>{row.description}</td>
                  <td>
                    <Button>Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Link to="/Products">
          <Button>Go to product</Button>
        </Link>
      )}
    </div>
  );
};
export default CartProductTable;
