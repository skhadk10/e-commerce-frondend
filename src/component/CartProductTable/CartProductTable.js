import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button, Card, Image, Spinner, Table } from "react-bootstrap";
import {
  addtoCart,
  deleteCart,
  fetchProductToCart,
} from "../../page/Cartviewproduct/CartviewproductAction";
import { Link } from "react-router-dom";
import {
  quantitydecrease,
  quantityincrease,
} from "../../page/Cartviewproduct/CartviewproductSlice";

const CartProductTable = () => {
  const { isLoading, status, message, cartList } = useSelector(
    (state) => state.cartListItem
  );

  const [qtyselected, setQtyselected] = useState(1);

  const dispatch = useDispatch();
  // putting data in localstorage of browser
  const CartItemFromLocalStorage = localStorage.getItem("cartListItem")
    ? JSON.parse(localStorage.getItem("cartListItem"))
    : [];

  useEffect(() => {
    !cartList && dispatch(addtoCart(CartItemFromLocalStorage));
  }, [CartItemFromLocalStorage, cartList, dispatch]);

  const handleOnquantityChanges = (listItem, qtyselected) => {
    dispatch(addtoCart(listItem, qtyselected));
  };
  const HandleOndeleteItem = (item) => {
    dispatch(deleteCart(item));
  };

  // this will count all the price of product
  const totalprice = cartList.reduce(
    (subttl, item) => subttl + item.price * item.qtyselected,
    0
  );

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
              <th>ItemTotal</th>
            </tr>
          </thead>
          <tbody>
            {cartList?.map((row, i) => {
              return (
                <tr key={row._id}>
                  <td>{i + 1}</td>
                  <Link to={`/Products/${row.slug}`}>
                    <Image src={row?.images[0]} />
                  </Link>
                  <td>{row.name}</td>
                  <td>{row.price}</td>
                  <td>
                    <p>
                      Quantity:
                      <i
                        onClick={() => dispatch(quantitydecrease(row._id))}
                        class="fas fa-minus"
                      ></i>
                      <input
                        value={row.qtyselected}
                        name="Quantity"
                        onChange={(e) => {
                          handleOnquantityChanges(
                            row,
                            setQtyselected(+e.target.value)
                          );
                        }}
                      />{" "}
                      <i
                        onClick={() => dispatch(quantityincrease(row._id))}
                        class="fas fa-plus"
                      ></i>
                    </p>
                  </td>
                  <td>{row.price * row.qtyselected}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => HandleOndeleteItem(row)}
                    >
                      remove Item
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          total price of cart = {totalprice}
          <Button>Checkout</Button>
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
