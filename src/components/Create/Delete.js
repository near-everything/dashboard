import React from "react";
import { collection, doc } from "firebase/firestore";
import { useFirestoreDocumentDeletion } from "@react-query-firebase/firestore";

import { db } from "../../app/firebase";

function Delete({ id, colRef }) {
  const col = collection(db, colRef);
  const ref = doc(col, id);
  const mutation = useFirestoreDocumentDeletion(ref);

  return (
    <>
      <button
        disabled={mutation.isLoading}
        onClick={() => {
          mutation.mutate();
        }}
      >
        Delete
      </button>
      {mutation.isError && <p>{mutation.error.message}</p>}
    </>
  );
}

export default Delete;
