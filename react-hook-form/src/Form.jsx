import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Form() {
  const { register, handleSubmit, control } = useForm();

  console.log(useForm());

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        <br />

        <label htmlFor="age">Age:</label>
        <br />
        <input
          type="text"
          id="age"
          {...register("age", {
            valueAsNumber: true,
            required: "Age is required",
            min: { value: 18, message: "Age must be at least 18" },
            max: { value: 25, message: "Age must be at most" },
          })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <DevTool control={control} placement="top-left" />
    </div>
  );
}

export default Form;
