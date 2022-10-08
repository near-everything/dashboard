import { useState } from "react";
import CheckmarkIcon from "./icons/CheckmarkIcon";
import DeleteIcon from "./icons/DeleteIcon";

function DetailsModal({ thing }) {
  const [isEditEnabled, toggleEdit] = useState(false);
  return (
    <>
      <input type="checkbox" id="thing-details" className="modal-toggle" />
      <label
        htmlFor="thing-details"
        className="modal modal-bottom sm:modal-middle cursor-pointer"
      >
        <label className="modal-box relative" htmlFor="">
          <div className="flex flex-col justify-between">
            <div className="grid gap-2">
              {thing.characteristics?.edges.map((char) => (
                <>
                  <div className="flex flex-row w-full">
                    <div className="w-32">
                      <span className="font-semibold">
                        {char.node.attribute.name}
                      </span>{" "}
                    </div>
                    <div className="flex flex-1 leading-5">
                      {/* <div className="divide-y" /> */}
                      {/* this may have to be per component, give them their own state and mutation */}
                      {isEditEnabled ? (
                        <>
                          <div className="flex flex-row w-full">
                            <input
                              className="input input-xs flex-1"
                              placeholder={char.node.option.value}
                            />
                            <span className="px-2">
                              <button className="btn btn-ghost btn-xs">
                                <CheckmarkIcon />
                              </button>
                              <button className="btn btn-ghost btn-xs">
                                <CheckmarkIcon />
                              </button>
                            </span>
                          </div>
                        </>
                      ) : (
                        <>{char.node.option.value}</>
                      )}
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="grid grid-flow-col gap-2 mt-4">
              <button
                className="btn"
                onClick={() => toggleEdit(!isEditEnabled)}
              >
                Edit
              </button>
              <button className="btn">Delete</button>
            </div>
          </div>
        </label>
      </label>
    </>
  );
}

export default DetailsModal;
