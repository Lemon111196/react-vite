import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ReactHookFormContainer } from "./style";
import { IForm } from "./interface";
import { useRef } from "react";
import { TextField } from "@mui/material";
// import yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
export default function ReactHookForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const nameDefaultValues = {
    firstName: "",
    lastName: "",
  }
  const {
    register, //dùng để đăng kí
    handleSubmit, //dùng để submit
    reset,
    control,
    watch,
    getValues,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: nameDefaultValues,
  })


  const submitName: SubmitHandler<IForm> = (data) => {
    // reset();
    // getValues();
    console.log(data);
  }
  console.log(watch("lastName"));
  const getForm = (error:any) => {
    console.log(error);
    // console.log(getValues());
  }
  const getRef = () => {
    console.log(inputRef.current?.value);
  }

  const submitClass: SubmitHandler<any> = (data) => {
    console.log(data);
  }
  return (
    <ReactHookFormContainer>
      <div className="introduce-rhf">
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => <TextField {...field} />}
        />
        {errors.firstName && (
          <span className="error">{errors?.firstName?.message?.toString()}</span>
        )}
        <input type="text" {...register("lastName")} />
        {errors.lastName && (
          <span className="error">{errors?.lastName?.message?.toString()}</span>
        )}
        <button onSubmit={handleSubmit(submitName)}
          type="submit">Submit</button>
        <button onClick={() => getForm(errors)}>Get all value</button>
      </div>

    </ReactHookFormContainer>
  )
}
