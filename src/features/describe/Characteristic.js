// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Button from "../../components/Button";
// import Input from "../../components/Input";
// import { setOption } from "./describeSlice";

// function Characteristic() {
//   const [characteristics, setCharacteristics] = useState([]);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const attribute = useSelector((state) => state.describe.attribute);

//   useEffect(() => {
//     getCharacteristicsForAttribute();
//   }, []);

//   const getCharacteristicsForAttribute = () => {
//     if (attribute.id !== null) {
//       axios
//         .get(
//           `http://192.168.1.23:8080/characteristic/?attribute_id=${attribute.id}`
//         )
//         .then((res) => {
//           setCharacteristics(res.data.characteristics);
//         })
//         .catch((err) => console.error(err));
//     }
//   };

//   const createOption = () => {
//     navigate("create");
//   };

//   const onSubmit = (data) => {
//     dispatch(setOption(data));
//     navigate("/describe/option");
//   };

//   return (
//     <>
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 h-full">
//         {characteristics &&
//           characteristics.map((characteristic, index) => {
//             return (
//               <Button
//                 key={index}
//                 className="flex grow m-2"
//                 onClick={() => onSubmit(Option)}
//               >
//                 {characteristic.attributes[0].name} and {characteristic.name}
//               </Button>
//             );
//           })}
//         <Button className="flex grow m-2" onClick={() => createOption()}>
//           +
//         </Button>
//       </div>
//     </>
//   );
// }

// export function CreateOption() {
//   const Option = useSelector((state) => state.describe.Option);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { register, handleSubmit } = useForm({
//     defaultValues: { Option: "" || Option.name },
//   });

//   const onSubmit = (data) => {
//     axios(
//       {
//         method: 'post',
//         url: 'http://127.0.0.1:8080/Option/create/',
//         headers: { 
//           'Accept': 'application/json',
//           'Content-Type': 'application/json;charset=UTF-8',
//           'Access-Control-Allow-Origin': '*'
//         },
//         data : JSON.stringify({
//           name: data.Option,
//         })
//       }
//     )
//     .then((res) => {
//       dispatch(setOption(res.data))
//       navigate("/describe/");
//     })
//     .catch((err) => console.error(err));
//   };

//   return (
//     <>
//       <form
//         id="create_Option"
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col justify-between h-full w-full"
//       >
//         <div>
//           <Input label="Option" register={register} />
//         </div>
//         <Button form="create_Option" type="submit">
//           Create
//         </Button>
//       </form>
//     </>
//   );
// }

// export default Characteristic;
