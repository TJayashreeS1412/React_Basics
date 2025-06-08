import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({
  category,
  showItems,
  setShowIndex,
  unsetShowIndex,
}) => {
  return (
    <div className="w-1/2 bg-gray-50 m-auto my-4 p-4 shadow-lg">
      {/* accordion header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => (showItems ? unsetShowIndex() : setShowIndex())}
      >
        <span className="font-bold text-lg">
          {category.title} ({category.itemCards.length})
        </span>
        <span className="text-lg font-bold h-full">
          {showItems ? "˰" : "˯"}
        </span>
      </div>
      {/* accordian data */}
      {showItems && <ItemList items={category.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
