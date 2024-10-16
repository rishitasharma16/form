import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";

function ReadData() {
  const { formData, setFormData } = useContext(AppContext);
  console.log(formData);
  
  return (
    <div className="w-screen h-screen mx-auto bg-slate-200 ">
      <div className="w-96  p-5 text-center">
        <h1>Time Stamp</h1>
        {formData.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReadData;
