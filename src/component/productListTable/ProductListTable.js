import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button, Card, Col, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchProduct } from "../../page/product/productAction";

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
    <div>
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
              <Image src={itm.images[0]} rounded />
            </Link>
            </Col>
            <Card.Body>
              <Card.Title>
                {itm.status ? (
                  <i className="fas fa-check-circle text-success"></i>
                ) : (
                  <i className="fas fa-times-circle text-danger"></i>
                )}
              </Card.Title>
              <Card.Title>{itm.name}</Card.Title>
              <Card.Title>{itm.price}</Card.Title>
              <Card.Text>{itm.description}</Card.Text>
              <Card.Text>{itm.saleEndDate}</Card.Text>
              <Card></Card>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default ProductListTable;
