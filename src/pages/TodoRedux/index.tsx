import { useAppDispatch, useAppSelector } from "../../hooks/useRedux"
import { useEffect } from "react"
import { RootState } from "../../store/store";
import { TodoActions } from "../../store/todoStore/TodoReducer";
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TodoContainer } from "./style";
import { ITodoList } from "../../store/todoStore/interface";
import { schema } from "./schema";

export default function TodoRedux() {
  const todoState = useAppSelector((state: RootState) => state.todo)
  const dispatch = useAppDispatch()
  useEffect(() => {
    // console.log(todoStore);

  }, []);

  const defaultValue = {
    title: '',
    content: '',
    status: '',
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: defaultValue
  })


  const createTodo = (data: ITodoList) => {
    dispatch(TodoActions.createTodo(data))
  }

  return (
    <TodoContainer>
      <div className="todo-list">
        <div className="group-input">
          <Controller
            control={control}
            name="title"
            render={({ field }) =>
            (<TextField
              {...field}
              className="input"
              color="success"
              label="Title"
              variant="filled"
            />)}

          />
          <div className="validate">
            {errors.title && (
              <span className="error">{errors?.title?.message?.toString()}</span>
            )}
          </div>
          <Controller
            control={control}
            name="content"
            render={({ field }) =>
              <TextField
                className="input"
                {...field}
                color="success"
                label="Content"
                variant="filled"
              />}

          />
          <div className="validate">
            {errors.content && (
              <span className="error">{errors?.content?.message?.toString()}</span>
            )}
          </div>
          <Controller
            control={control}
            name="status"
            render={({ field }) =>
              <TextField
                className="input"
                {...field}
                color="success"
                label="Status"
                variant="filled"
              />}
          />
          <div className="validate">
            {errors.status && (
              <span className="error">{errors?.status?.message?.toString()}</span>
            )}
          </div>

        </div>
        {todoState.todoList.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.content}</p>
            <p>{item.status}</p>
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        onClick={handleSubmit(createTodo)}>Create todo</Button>
    </TodoContainer>
  )
}
