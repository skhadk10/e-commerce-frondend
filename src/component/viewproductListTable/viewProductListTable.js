import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button, ButtonGroup, Card, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { fetchProductBySLug } from "../../page/selectedviewproduct/ViewproductAction.js";
import { fetchProductToCart } from "../../page/Cartviewproduct/CartviewproductAction";
const ViewProductListTable = () => {
  const { isLoading, status, message, selectedproDisplayList } = useSelector(
    (state) => state.selecteddisplayProduct
  );

  const dispatch = useDispatch();

  let { slug } = useParams();

  useEffect(() => {
    dispatch(fetchProductBySLug(slug));
  }, [dispatch, slug]);

  const handleOnClick = (item) => {
    dispatch(fetchProductToCart(item));
  };
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
          <Card style={{ width: "18rem" }} key={i}>
            <Link>
              <Card.Img variant="top" src={item.images[0]} />
            </Link>

            <Card.Body>
              <Card.Title>
                {item.status ? (
                  <i className="fas fa-check-circle text-success"></i>
                ) : (
                  <i className="fas fa-times-circle text-danger"></i>
                )}
              </Card.Title>
              <Card.Title>{item.name}</Card.Title>
              <Card.Title>{item.price}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button onClick={() => handleOnClick(item)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default ViewProductListTable;
