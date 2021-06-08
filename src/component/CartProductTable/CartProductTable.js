import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button, Card, Image, Spinner, Table } from "react-bootstrap";
import {
  addtoCart,
  deleteCart,
  fetchProductToCart,
} from "../../page/Cartviewproduct/CartviewproductAction";
import { Link } from "react-router-dom";

const CartProductTable = () => {
  const { isLoading, status, message, cartList } = useSelector(
    (state) => state.cartListItem
  );
  console.log(cartList);
  const [qtyselected, setQtyselected] = useState(1);
  
 
  const dispatch = useDispatch();
// putting data in localstorage of browser
  const CartItemFromLocalStorage = localStorage.getItem("cartListItem") ? (JSON.parse(localStorage.getItem("cartListItem"))): [];

  useEffect(() => {
    !cartList && dispatch(addtoCart(CartItemFromLocalStorage));
  }, [CartItemFromLocalStorage, cartList, dispatch]);

  console.log("from add to cart", cartList);
  console.log(localStorage.getItem("item"));
  const handleOnquantityChanges = (listItem, qtyselected) => {
    dispatch(addtoCart(listItem, qtyselected));
  };
const HandleOndeleteItem= (item)=>{
  dispatch(deleteCart(item))
}
const handleOnMinus= ()=>{
 setQtyselected(qtyselected-1)
}
const handleOnAdd= ()=>{
  setQtyselected(qtyselected+1)
}
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
                      Quantity: <Link onClick={()=>{handleOnMinus()}}><i class="fas fa-minus"></i>
                 </Link>
                      <input
                        value={row.qtyselected}
                        name="Quantity"
                        onChange={(e) => {
                          handleOnquantityChanges(row, setQtyselected(+e.target.value));
                        }}
                      /> <Link onClick={()=>{handleOnAdd()}}><i class="fas fa-plus"></i>
                      </Link>
                    </p>
                  </td>
                  <td>{row.description}</td>
                  <td>
                    <Button variant="warning"  onClick={() => HandleOndeleteItem(row)}>remove Item</Button>
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
