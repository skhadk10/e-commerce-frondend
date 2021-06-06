import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Alert,
  Button,
  ButtonGroup,
  Card,
  Image,
  Spinner,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { fetchProductBySLug } from "../../page/selectedviewproduct/ViewproductAction.js";
import { addtoCart } from "../../page/Cartviewproduct/CartviewproductAction";
import "./ViewProduct.css";
const ViewProductListTable = () => {
  const { isLoading, status, message, selectedproDisplayList } = useSelector(
    (state) => state.selecteddisplayProduct
  );
  const [qtyselected, setqtyselected] = useState(1);
  const [controlQuantity, setcontrolQuantity] = useState(false);
  const dispatch = useDispatch();

  let { slug } = useParams();
  console.log("from slug",slug)
  useEffect(() => {
    dispatch(fetchProductBySLug(slug));
  }, [dispatch, slug]);

  const handleOnClick = (itemlist, qtyselected) => {
    
    dispatch(addtoCart(itemlist, qtyselected));
  };
  const handleOnChange = (e) => {
    setcontrolQuantity("false");
    const { value } = e.target;
    console.log(value);
    setqtyselected(+value);
  };

  // for how many qty stock are there checking
  if (qtyselected > selectedproDisplayList[0]?.qty) {
    setcontrolQuantity(true);
    setqtyselected(selectedproDisplayList[0]?.qty);
  }
  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

      {status === "error" && (
        <Alert variant={status === "success" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      {selectedproDisplayList?.map((item, i) => {
        return (
          <div className="productdetail" style={{ width: "18rem" }} key={i}>
            <img variant="top" src={item.images[0]} />

            <div>
              <div>
                {item.status ? (
                  <i className="fas fa-check-circle text-success"></i>
                ) : (
                  <i className="fas fa-times-circle text-danger"></i>
                )}
              </div>
              <tr>{item.name}</tr>
              <tr>Total price:${item.price}</tr>
              <tr>{item.description}</tr>

              <tr>
                {item.qty > 0 ? (
                  <i className="fas fa-check-circle text-success">
                    we have {item.qty} left on stock
                  </i>
                ) : (
                  <i className="fas fa-times-circle text-danger">
                    out of stock
                  </i>
                )}
              </tr>
              <tr>
                <p>
                  Quantity:
                  <input
                    type="form"
                    name="quantity"
                    onChange={handleOnChange}
                    value={controlQuantity === true ? "0" : qtyselected}
                  ></input>
                </p>
              </tr>
              <Button onClick={() => handleOnClick(item, qtyselected)}>
                Add to Cart
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ViewProductListTable;
