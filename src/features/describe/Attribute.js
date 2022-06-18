import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { setAttribute } from "./describeSlice";

function Attribute() {
  const [attributes, setAttributes] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subcategory = useSelector((state) => state.describe.subcategory);

  useEffect(() => {
    getAllAttributes();
  }, []);

  const getAllAttributes = () => {
    if (subcategory.id !== null) {
      axios
        .get(
          `http://192.168.1.23:8080/attribute/`
        )
        .then((res) => {
          setAttributes(res.data.attributes);
        })
        .catch((err) => console.error(err));
    }
  };

  const createAttribute = () => {
    navigate("create");
  };

  const onSubmit = (data) => {
    dispatch(setAttribute(data));
    navigate("/describe/characteristic");
  };

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 h-full">
        {attributes &&
          attributes.map((attribute, index) => {
            return (
              <Button
                key={index}
                className="flex grow m-2"
                onClick={() => onSubmit(attribute)}
              >
                {attribute.name}
              </Button>
            );
          })}
        <Button className="flex grow m-2" onClick={() => createAttribute()}>
          +
        </Button>
      </div>
    </>
  );
}

export function CreateAttribute() {
  const attribute = useSelector((state) => state.describe.attribute);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: { attribute: "" || attribute.name },
  });

  const onSubmit = (data) => {
    axios(
      {
        method: 'post',
        url: 'http://127.0.0.1:8080/attribute/create/',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        },
        data : JSON.stringify({
          name: data.attribute,
        })
      }
    )
    .then((res) => {
      dispatch(setAttribute(res.data))
      navigate("/describe/");
    })
    .catch((err) => console.error(err));
  };

  return (
    <>
      <form
        id="create_attribute"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-full w-full"
      >
        <div>
          <Input label="attribute" register={register} />
        </div>
        <Button form="create_attribute" type="submit">
          Create
        </Button>
      </form>
    </>
  );
}

export default Attribute;
