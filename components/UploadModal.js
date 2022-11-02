import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { useCreateMedia } from "../graphql/queries";

const BUCKET_URL = "https://everything-1.s3.us-east-1.amazonaws.com/";

function UploadModal({ thing }) {
  const [files, setFiles] = useState([]);
  const queryClient = useQueryClient();
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const createMedia = useCreateMedia();
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const uploadFile = async (file) => {
    let { data } = await axios.post("/api/s3/uploadFile", {
      name: file.name,
      type: file.type,
    });

    const url = data.url;
    await axios.put(url, file, {
      headers: {
        "Content-Type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    createMedia.mutate(
      {
        mediaUrl: BUCKET_URL + data.name,
        thingId: thing.id,
      },
      {
        onSuccess: async () => {
          toast.success("created media successfully");
        },
        onError: () => {
          toast.error("error creating media, please try again.");
        },
      }
    );
  };

  const uploadImages = async () => {
    setUploading(true);
    for (const file of files) {
      await uploadFile(file);
    }
    files.forEach((file) => URL.revokeObjectURL(file.preview));
    setFiles([]);
    queryClient.invalidateQueries({ queryKey: ['thingsByOwner'] })
    setUploading(false);
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <Image
        src={file.preview}
        alt=""
        layout="fill"
        objectFit="contain"
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      />
    </div>
  ));

  return (
    <>
      <input type="checkbox" id="upload-modal" className="modal-toggle" />
      <label
        htmlFor="upload-modal"
        className="modal modal-bottom sm:modal-middle cursor-pointer"
      >
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="upload-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => {
              files.forEach((file) => URL.revokeObjectURL(file.preview));
              setFiles([]);
            }}
          >
            ✕
          </label>
          <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Drag and drop some files here, or click to select files</p>
            </div>
            <aside className="flex flex-row flex-wrap mt-4">{thumbs}</aside>
            <button
              className="btn"
              disabled={files.length < 1 || files.length > 7 || uploading}
              onClick={uploadImages}
            >
              submit
            </button>
          </section>
        </label>
      </label>
    </>
  );
}

export default UploadModal;

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
  position: "relative",
};
