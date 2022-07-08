import { useDispatch } from "react-redux";
import { mint } from "../features/near/nearSlice";

function ApproveItem({ item }) {
  const dispatch = useDispatch();

  function approve(id, data) {
    dispatch(mint({ id, data }));
  }

  return (
    <>
      <button
        onClick={() => {
          approve(item.node.id, item);
        }}
      >
        Approve
      </button>
    </>
  );
}

export default ApproveItem;
