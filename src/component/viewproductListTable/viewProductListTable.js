import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Alert,
  Button,
  ButtonGroup,
  Card,
  Container,
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

  useEffect(() => {
    dispatch(fetchProductBySLug(slug));
  }, [slug]);

  const handleOnClick = (itemlist, qtyselected) => {
    dispatch(addtoCart(itemlist, qtyselected));
  };
  const handleOnChange = (e) => {
    setcontrolQuantity("false");
    const { value } = e.target;

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
          <Container>
            <div className="productdetail" style={{ width: "18rem" }} key={i}>
              <img className="img" variant="top" src={item.images[0]} />

              <div>
                <div>
                  {item.status ? (
                    <i className="fas fa-check-circle text-success"></i>
                  ) : (
                    <i className="fas fa-times-circle text-danger"></i>
                  )}
                </div>
                <tr className="text-center">{item.name}</tr>
                <tr>Total price:${item.price}</tr>
                <tr>{item.description}</tr>

                <tr>
                  {item.qty > qtyselected  ? (
                    <i className="fas fa-check-circle text-success">
                      we have {item.qty - qtyselected } left on stock
                    </i>
                  ) : (  
                    <i className="fas fa-times-circle text-danger">
                      {item.qty - qtyselected} out of stock
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
          </Container>
        );
      })}
    </div>
  );
};
export default ViewProductListTable;
