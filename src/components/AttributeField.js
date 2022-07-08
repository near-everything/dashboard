import React from "react";
import {
  useAttributeById,
  useOptionById
} from "../features/items/itemDeckApi";

const AttributeField = React.forwardRef(function AttributeField(props, ref) {
  const { characteristic } = props;
  const { data: attribute } = useAttributeById(characteristic.attributeId);
  const { data: option } = useOptionById(characteristic.optionId);

  return (
    <>
      <div className="flex flex-row">
        <span className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          {attribute.name}:
        </span>{" "}
        {option.value}
      </div>
    </>
  );
});

export default AttributeField;
