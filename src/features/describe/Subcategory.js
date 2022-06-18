import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { setSubcategory } from "./describeSlice";
import Input from "../../components/Input";

function Subcategory() {
  const [subcategories, setSubcategories] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = useSelector((state) => state.describe.category);

  useEffect(() => {
    getSubcategories();
  }, []);

  const getSubcategories = () => {
    if (category.id !== null) {
      axios
        .get(`http://192.168.1.23:8080/subcategory/?category_id=${category.id}`)
        .then((res) => {
          setSubcategories(res.data.subcategories);
        })
        .catch((err) => console.error(err));
    }
  };

  const createSubcategory = () => {
    navigate("create");
  };

  const onSubmit = (data) => {
    dispatch(setSubcategory(data));
    navigate("/describe/attribute");
  };

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 h-full">
        {subcategories &&
          subcategories.map((subcategory, index) => {
            return (
              <Button
                key={index}
                className="flex grow m-2"
                onClick={() => onSubmit(subcategory)}
              >
                {subcategory.name}
              </Button>
            );
            
          })}
          <Button className="flex grow m-2" onClick={() => createSubcategory()}>
          +
        </Button>
      </div>
    </>
  );
}

export function CreateSubcategory() {
  const category = useSelector((state) => state.describe.category);
  const subcategory = useSelector((state) => state.describe.subcategory);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: { subcategory : '' || subcategory.name },
  });

  const onSubmit = (data) => {
    axios(
      {
        method: 'post',
        url: 'http://127.0.0.1:8080/subcategory/create/',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        },
        data : JSON.stringify({
          name: data.subcategory,
          category_id: category.id
        })
      }
    )
    .then((res) => {
      dispatch(setSubcategory(res.data))
      navigate("/describe/");
    })
    .catch((err) => console.error(err));
  };

  return (
    <>
      <form
        id="create_subcategory"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-full w-full"
      >
        <div>
          <Input label="subcategory" register={register} />
        </div>
        <Button form="create_subcategory" type="submit">
          Create
        </Button>
      </form>
    </>
  );
}

export default Subcategory;
