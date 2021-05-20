import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button, Card, Spinner } from "react-bootstrap";

const CartProductTable = () => {
  const { isLoading, status, message, CartList } = useSelector(
    (state) => state.CartListItem
  );

  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

      {status === "error" && (
        <Alert variant={status === "success" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      {CartList?.map((itm, i) => {
        return (
          <Card style={{ width: "18rem" }} key={i}>
            <Card.Img variant="top" src={itm.images[0]} />

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
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default CartProductTable;
