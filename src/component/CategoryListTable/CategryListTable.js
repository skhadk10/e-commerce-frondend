import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchCategory } from "../../page/category/categortAction";
import "./Category.style.css";

const CategoryListTable = () => {
  const { catDisplayList } = useSelector((state) => state.categoryList);

  // console.log("from category list", catDisplayList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div className="mid-nav">
      {catDisplayList?.map((itm, i) => {
        return (
          <ul  className="listitem"key={i}>
            <Link to={`/Category/${itm._id}`}>
              <li>{itm.name}</li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
};
export default CategoryListTable;
