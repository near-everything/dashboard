
import { useDeleteItem } from "../../app/api";

function DeleteItem({ id }) {
  const deleteItem = useDeleteItem();

  return (
    <>
      <button
        onClick={() => {
          deleteItem.mutate(id);
        }}
      >
        Delete
      </button>
    </>
  );
}

export default DeleteItem;
