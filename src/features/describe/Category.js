import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { setCategory } from "./describeSlice";

function Category() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    axios
      .get("http://192.168.1.23:8080/category/")
      .then((res) => {
        const allCategories = res.data.categories;
        setCategories(allCategories);
      })
      .catch((err) => console.error(err));
  };

  const createCategory = () => {
    navigate("create");
  };

  const onSubmit = (data) => {
    dispatch(setCategory(data));
    navigate("/describe/subcategory");
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {categories &&
          categories.map((category, index) => {
            return (
              <Button
                key={index}
                className="flex grow m-2"
                onClick={() => onSubmit(category)}
              >
                {category.name}
              </Button>
            );
          })}
        <Button className="flex grow m-2" onClick={() => createCategory()}>
          +
        </Button>
      </div>
    </>
  );
}

export function CreateCategory() {
  const category = useSelector((state) => state.describe.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: { category : '' || category.name },
  });

  const onSubmit = (data) => {
    axios(
      {
        method: 'post',
        url: 'http://127.0.0.1:8080/category/create/',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        },
        data : JSON.stringify({
          name: data.category
        })
      }
    )
    .then((res) => {
      dispatch(setCategory(res.data))
      navigate("/describe/");
    })
    .catch((err) => console.error(err));
  };

  return (
    <>
      <form
        id="create_category"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-full w-full"
      >
        <div>
          <Input label="category" register={register} />
        </div>
        <Button form="create_category" type="submit">
          Create
        </Button>
      </form>
    </>
  );
}

export default Category;
