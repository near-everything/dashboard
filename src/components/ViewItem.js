import { useNavigate } from "react-router-dom";

function ViewItem({ item }) {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate(`/item/${item.node.id}`);
        }}
      >
        View
      </button>
    </>
  );
}

export default ViewItem;
