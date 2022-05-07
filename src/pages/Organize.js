import { collection, query } from "firebase/firestore";
import React from "react";
import { db } from "../app/firebase";
import ItemCard from "../components/Cards/ItemCard";
import { useInfiniteItems } from "../hooks/useItems";

function Organize() {
  const q = query(collection(db, "items"));
  const { items, isLoading } = useInfiniteItems(q);
  return (
    <>
      <div className="my-6">
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2">
              {items.map((item, index) => (
                <div className="col-auto m-2" key={index}>
                  <ItemCard key={item.id} item={item} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Organize;
