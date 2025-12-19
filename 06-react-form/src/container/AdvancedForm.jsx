import React from "react";
import { useState } from "react";

const AdvancedForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    country: "India",
    agree: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form With checkbox, Radio & Select</h2>

      <div>
        Male:
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
      </div>

      <div>
        Female:
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="country">
          Country:
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </label>
      </div>

      <div>
        <label htmlFor="agree">I agree to the terms and conditions</label>
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AdvancedForm;
