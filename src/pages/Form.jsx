import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import Navbar from "../components/Navbar";


function Form() {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState([{ value: "" }]);
  const { formData, setFormData } = useContext(AppContext);

  const handleAddField = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  const handleInputChange = (index, event) => {
    const newInputFields = [...inputFields];
    newInputFields[index].value = event.target.value;
    setInputFields(newInputFields);
    setFormData(newInputFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields);
    const isAnyFieldEmpty = inputFields.some(
      (inputField) => inputField.value.trim() === ""
    );
    if (isAnyFieldEmpty) {
      window.alert("fill the input fileds");
    } else {
      navigate("/data");
    }
  };

  const handleDeleteField = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  return (
  <div>
      <Navbar/>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
     
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            {inputFields.map((inputField, index) => {
              return (
                <div key={index} className="flex items-center mb-3">
                  <input
                    type="text"
                    value={inputField.value}
                    onChange={(event) => handleInputChange(index, event)}
                    placeholder={`Input field ${index + 1}`}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5 "
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteField(index)}
                    className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ms-2 focus-visible:outline-indigo-600"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleAddField}
              className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Form;
