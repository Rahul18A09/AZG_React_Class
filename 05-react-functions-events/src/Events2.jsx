import React from "react";

const Events2 = () => {
  // 6. onKeyDown Event

  //   function handleKeyDown(e) {
  //     // console.clear();
  //     console.log("Key pressed:", e.target.value);
  //   }
  // 7. onFocus Event

  //  8. onBlur Event

  // const handleBlur = () => {
  //     console.log("pressed outside the input!:");

  // }

  // 9.onDoubleClick Event

  

  return (
    <div>

      <input type="text" onKeyDown={handleKeyDown} />

      <input type="text" onBlur={handleBlur} />;
      <button onDoubleClick={handleDoubleClick}>Double CLick me</button>;

    </div>
  );
};

export default Events2;
