import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { db, st } from "../app/firebase";
import Button from "../components/Button";
import ImageCard from "../components/Cards/ImageCard";
import FileUpload from "../components/FileUpload";
import Input from "../components/Input";
import Select from "../components/Select";
import ThemedSuspense from "../components/ThemedSuspense";
import { selectUser } from "../features/auth/authSlice";
import { categories, subcategories } from "../utils/categories";

function Request() {
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const requestsRef = collection(db, "requests");
  const user = useSelector(selectUser);

  const removeFile = (index) => {
    setFiles((old) => {
      return old.filter((value, i) => i !== index);
    });
  };

  const insertRequest = async () => {
    setLoading(true);
    // const urls = await createUrls();
    let urls = [];
    for (const img of files) {
      const storageRef = ref(st, `images/${user}/${img.name}`);
      const snapshot = await uploadBytes(storageRef, img);
      const downloadURL = await getDownloadURL(snapshot.ref);
      urls.push(downloadURL);
    }

    try {
      await addDoc(requestsRef, {
        description: description,
        category: category,
        subcategory: subcategory,
        createdBy: user,
        media: urls,
        createdTimestamp: Timestamp.now(),
        updatedTimestamp: Timestamp.now(),
        isFulfilled: false
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // const handleSelected = (id) => {
  //   if (selected.includes(id)) {
  //     setSelected((prevSelected) => prevSelected.filter((s) => s !== id));
  //   } else {
  //     setSelected((prevSelected) => [...prevSelected, id]);
  //   }
  // };
  if (loading) {
    return <ThemedSuspense />;
  }

  return (
    <>
      <div className="flex flex-col my-6">
        <FileUpload
          onChange={(event) => {
            if (event.target.files.length > 0) {
              setFiles([...files, ...event.target.files]);
              event.target.value = null;
            }
          }}
        />
        <div className="flex flex-row mt-4">
          {files.length > 0 &&
            files.map((file, index) => (
              <ImageCard
                index={index}
                media={URL.createObjectURL(file)}
                removeImage={removeFile}
              />
            ))}
        </div>
        <br />
        <Select
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
          options={categories}
        />
        <br />
        <Select
          placeholder="subcategory"
          onChange={(e) => setSubcategory(e.target.value)}
          options={category ? subcategories[category] : []}
        />
        <br />
        <Input
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <Button
          onClick={insertRequest}
          disabled={
            !description && (files.length === 0 || files.length > 10)
          }
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default Request;