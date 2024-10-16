import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";

function ReadData() {
  const { formData, setFormData } = useContext(AppContext);
  console.log(formData);
  
  return (
    <div className="w-screen h-screen mx-auto border ">
      <div className="p-5 ">
        <h1 className="text-lg font-medium text-center">Submission </h1>
       <div className="flex justify-center  mt-10 ">
      <div className="w-60 border border-neutral-700 px-3 py-2">
      {formData.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.value}</p>
            </div>
          );
        })}
      </div>
       </div>
      </div>
    </div>
  );
}

export default ReadData;
