import React, { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchProductByCatId } from "../../page/category/categortAction";
// import { useDispatch } from "react-router-dom";
const CategoryProduct = () => {
  const { catDisplayListById } = useSelector((state) => state.categoryList);
  console.log("from category Product ", catDisplayListById);
  const dispatch = useDispatch();
  let { _id } = useParams();
  console.log("from categoryProduct", _id);
  useEffect(() => {
    dispatch(fetchProductByCatId(_id));
  }, [dispatch, _id]);
  return (
    <div>
      hello there
      {catDisplayListById?.map((itm, i) => {
        return (
          <Row key={i}>
            <Col xs={6} md={4}>
            <Link to={`/Products/${itm.slug}`}>
              <Image src={itm.images[0]} rounded />
            </Link>
             
              <div> {itm.status ? (
                  <i className="fas fa-check-circle text-success"></i>
                ) : (
                  <i className="fas fa-times-circle text-danger"></i>
                )} Available</div>
              <div>{itm.name}</div>
              <div>{itm.qty}</div>
              <div>{itm.description}</div>
              <div>{itm.price}</div>
              <div>{itm.date}</div>
            </Col>
            
          </Row>
        );
      })}
    </div>
  );
};

export default CategoryProduct;
