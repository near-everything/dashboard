import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Link,
  Route, Routes
} from "react-router-dom";
import ThemedSuspense from "../components/ThemedSuspense";
import Sub from "../containers/Sub";
import Attribute, { CreateAttribute } from "../features/describe/Attribute";
import Category, { CreateCategory } from "../features/describe/Category";
// import Characteristic, { CreateCharacteristic } from "../features/describe/Characteristic";
import { resetDescribe } from "../features/describe/describeSlice";
import Subcategory, { CreateSubcategory } from "../features/describe/Subcategory";

function Describe() {
  return (
    <>
      <Suspense fallback={<ThemedSuspense />}>
        <Routes>
          <Route element={<Sub />}>
            <Route index element={<Start />} />
            <Route path="/category/*" element={<Category />} />
            <Route path="/category/create" element={<CreateCategory />} />
            <Route path="/subcategory/*" element={<Subcategory />} />
            <Route path="/subcategory/create" element={<CreateSubcategory />} />
            <Route path="/attribute/*" element={<Attribute />} />
            <Route path="/attribute/create" element={<CreateAttribute />} />
            {/* <Route path="/characteristic/*" element={<Characteristic />} />
            <Route path="/characteristic/create" element={<CreateCharacteristic />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

function Start() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDescribe())
  }, [dispatch])

  return (
    <>
      <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">This tool allows you to create new categories, subcategories, and attributes.</p>

      <Link to="category">Create a new category or subcategory</Link>
      <br />
      <Link to="attribute">Create a new attribute or attribute option</Link>
    </>
  )
}

export default Describe;
