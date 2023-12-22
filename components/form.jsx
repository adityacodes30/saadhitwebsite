"use client";

import { useForm } from "react-hook-form";
import stl from "./styles/form.module.css";

import bt from './styles/button.module.css'

function Form() {
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
    <form className={stl.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Great, Now lets get in touch </h2>
      <div className={stl.input}>
        <input
          placeholder="Full Name"
          className={stl.inputfield}
          {...register("name", { required: true })}
        />
        {errors.name && <span className={stl.req} >This field is required</span>}
      </div>

      <div className={stl.input}>
        <input
          placeholder="Email"
          className={stl.inputfield}
          {...register("email", { required: true })}
        />
        {errors.email && <span className={stl.req}>This field is required</span>}
      </div>

      <div className={stl.input}>
        <input
          placeholder="Phone Number"
          className={stl.inputfield}
          {...register("phone", { required: true, minLength: 10 })}
        />
        {errors.phone && <span className={stl.req}>This field is required</span>}
      </div>
      <input className={bt.btn} type="submit" />
    </form>
  );
}

export default Form;
