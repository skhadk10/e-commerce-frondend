import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button, Card, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { fetchProductBySLug } from "../../page/selectedviewproduct/ViewproductAction.js";

const ViewProductListTable = () => {
  const { isLoading, status, message, selectedproDisplayList } = useSelector(
    (state) => state.selecteddisplayProduct
  );
  console.log(selectedproDisplayList);

  const dispatch = useDispatch();

  let { slug } = useParams();
  console.log("form slog", slug);

  useEffect(() => {
    dispatch(fetchProductBySLug(slug));
  }, [dispatch, slug]);

  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

      {status === "error" && (
        <Alert variant={status === "success" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      {selectedproDisplayList?.map((itm, i) => {
        return (
          <Card style={{ width: "18rem" }} key={i}>
            <Link>
              <Card.Img variant="top" src={itm.images[0]} />
            </Link>

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
              <Card></Card>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default ViewProductListTable;
