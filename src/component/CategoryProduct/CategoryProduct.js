import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Categoryproduct.css"
import { fetchProductByCatId } from "../../page/category/categortAction";
// import { useDispatch } from "react-router-dom";
const CategoryProduct = () => {
  const { catDisplayListById } = useSelector((state) => state.categoryList);
  console.log("from category display by id",catDisplayListById);
  const dispatch = useDispatch();
  let { _id } = useParams();
  console.log(_id);
  useEffect(() => {
    dispatch(fetchProductByCatId(_id));
  }, [dispatch, _id]);
  return (
    <div className="categoryproductlist">
        {catDisplayListById?.map((item, i) => {
        return (
      
            <div  style={{ width: "18rem" }} key={i}>
            <div><img  variant="top" src={item.images[0]} width="250px" height="300px" /></div>
            

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
            <Link to={`/Products/${item.slug}`}> <Button >
                view Product
              </Button>
            </Link>
             
            </div>
          </div>
  
        );
      })}
    </div>
  );
};

export default CategoryProduct;
