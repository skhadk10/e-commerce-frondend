import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button, Card, Col, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchProduct } from "../../page/product/productAction";
import "./Productlist.css"
const ProductListTable = () => {
  const { isLoading, status, message, proDisplayList } = useSelector(
    (state) => state.displayProduct
  );
  // const { status, message } = useSelector(
  //   (state) => state.login
  // );
  console.log(proDisplayList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="productlist">
      {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

      {status === "error" && (
        <Alert variant={status === "success" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      {proDisplayList?.map((itm, i) => {
        return (
          <Card style={{ width: "18rem" }} key={i}>
            <Col xs={6} md={4}>
              <Link to={`/Products/${itm.slug}`}>
                <Image src={itm.images[0]} width="200px" height="300px" />
              </Link>
            </Col>
            <Card.Body>
              
              <Card.Title>Name:{itm.name}</Card.Title>
              <div>Our Sales Price:{itm.salePrice}</div>

              <div>Special Price:{itm.price}</div>
              <Card.Text>{itm.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default ProductListTable;
