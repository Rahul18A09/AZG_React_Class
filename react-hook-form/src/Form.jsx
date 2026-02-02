import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Form() {
  //   const { register, handleSubmit, control, formState } = useForm({
  //     defaultValues:{
  //         name:"Rahul",
  //         email:"example@gmail.com",
  //         age:"18"
  //     }
  //   });

  const { register, handleSubmit, control, formState } = useForm({
    defaultValues: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();

      return {
        name: data.name,
        email: data.email,
        age: 18,
      };
    },
  });

  const { errors } = formState;

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
        {errors.name && <p className="error">{errors.name?.message}</p>}
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

            validate: {
              notAdminEmail: (value) => {
                return (
                  value !== "admin@example.com" ||
                  "Enter a different email address"
                );
              },

              notBlacklistedEmail: (value) => {
                return (
                  !value.endsWith("@blacklisted.com") ||
                  "This domain is not allowed."
                );
              },
            },
          })}
        />
        {errors.email && <p className="error">{errors.email?.message}</p>}
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
            max: { value: 25, message: "Age must be at most 25" },
          })}
        />
        {errors.age && <p className="error">{errors.age?.message}</p>}
        <br />
        <button type="submit">Submit</button>
      </form>

      <DevTool control={control} placement="top-left" />
    </div>
  );
}

export default Form;
