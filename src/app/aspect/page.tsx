"use client";

// import "./styles.css";
// import Input from "../input-field";
import InputExample from "@/components/atoms/exampleInput/InputExample";
import { useForm } from "react-hook-form";

const page = () => {
  return <NewTodoForm />;
};

export default page;

const NewTodoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form-title">Create a new Todo</h1>
      <InputExample
        type="text"
        name="title"
        label="Todo (e.g do laundry)"
        errors={errors}
        register={register}
        maxLength={3}
        required="this is required"
        // validationSchema={{
        //   required: "Todo text is required",
        //   minLength: {
        //     value: 3,
        //     message: "Please enter a minimum of 3 characters",
        //   },
        // }}
        // required
      />{" "}
      {/* <InputExample
        type="date"
        name="date"
        label="Due Date"
        errors={errors}
        register={register}
        validationSchema={{
          required: "Todo deadline is required",
        }}
        // required
      />{" "} */}
      <input type="submit" />
    </form>
  );
};
