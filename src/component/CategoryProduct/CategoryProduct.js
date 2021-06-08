import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchProductByCatId } from "../../page/category/categortAction";
// import { useDispatch } from "react-router-dom";
const CategoryProduct = () => {
  const { catDisplayListById } = useSelector((state) => state.categoryList);
  const dispatch = useDispatch();
  let { _id } = useParams();
  console.log(_id);
  useEffect(() => {
    dispatch(fetchProductByCatId(_id));
  }, [dispatch, _id]);
  return (
    <div>
      {catDisplayListById.map((item, i) => {
        <tr key={i}>
          <td>{item.name}</td>
          <td>{item.qty}</td>
          <td>{item.images[0]}</td>
          <td>{item.description}</td>
          <td></td>
        </tr>;
      })}
    </div>
  );
};

export default CategoryProduct;
