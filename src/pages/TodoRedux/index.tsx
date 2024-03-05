import { useAppDispatch, useAppSelector } from "../../hooks/useRedux"
import { useEffect, useState } from "react"
import { RootState } from "../../store/store";
import { TodoActions } from "../../store/todoStore/TodoReducer";
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TodoContainer } from "./style";
import { ITodoList } from "../../store/todoStore/interface";
import { schema } from "./schema";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog } from "../../components";
import { TodoEdit } from "./interface";


export default function TodoRedux() {
  const todoState = useAppSelector((state: RootState) => state.todo);
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<TodoEdit>({ title: '', content: '', status: '', id: '' });
  const [editingId, setEditingId] = useState<string | null>(null);

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
    reset
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: defaultValue
  })


  const createTodo = (data: ITodoList) => {
    dispatch(
      TodoActions.createTodo({
        ...data,
        id: Math.floor(Math.random() * 99999999).toString(),
      }
      ))
    reset()
  }
  const handleDelete = (id: string) => {
    dispatch(
      TodoActions.deleteTodo(id)
    )
  }
  const openHandleUpdate = (title: string, content: string, status: string, id: string) => {
    setEditTodo({ title, content, status, id });
    setEditingId(id);
    setOpenModal(true);
  };
  const handleCancelModal = () => {
    setOpenModal(false);
  }
  const handleUpdateTodo = () => {
    dispatch(
      TodoActions.updateTodo({
        id: editingId!,
        updatedTodo: { title: editTodo.title, content: editTodo.content, status: editTodo.status },
      })
    );
    setOpenModal(false);
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
              variant="outlined"
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
                variant="outlined"
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
                variant="outlined"
              />}
          />
          <div className="validate">
            {errors.status && (
              <span className="error">{errors?.status?.message?.toString()}</span>
            )}
          </div>

        </div>
        {todoState.todoList.map((item, index) => (
          <div className="list-note" key={index}>
            <div className="list">
              <p className="note">Title: {item.title}</p>
              <p className="note">Content: {item.content}</p>
              <p className="note">Status: {item.status}</p>
            </div>
            <div className="btn-list">
              <EditIcon className="edit" onClick={() => openHandleUpdate(item.title, item.content, item.status, item.id)} />
              <DeleteIcon className="delete" onClick={() => handleDelete(item.id)} />
            </div>
          </div>
        ))}
      </div>
      <Button
        className="btn"
        variant="contained"
        onClick={handleSubmit(createTodo)}>Create todo</Button>
      <Dialog
        open={openModal}
        onCancel={handleCancelModal}
        title="Edit"
        onSubmit={handleUpdateTodo}
      >
        <div className="text-field-modal"></div>
        <Controller
          control={control}
          name="title-edit"
          render={({ field }) => (
            <TextField
              {...field}
              className="input-modal"
              variant="outlined"
              label="Title"
              value={editTodo.title}
              onChange={(e) => setEditTodo({ ...editTodo, title: e.target.value })}
            />
          )}
        />
        <Controller
          control={control}
          name="content-edit"
          render={({ field }) => (
            <TextField
              {...field}
              className="input-modal"
              variant="outlined"
              label="Content"
              value={editTodo.content}
              onChange={(e) => setEditTodo({ ...editTodo, content: e.target.value })}
            />
          )}
        />
        <Controller
          control={control}
          name="status-edit"
          render={({ field }) => (
            <TextField
              {...field}
              className="input-modal"
              variant="outlined"
              label="Status"
              value={editTodo.status}
              onChange={(e) => setEditTodo({ ...editTodo, status: e.target.value })}
            />
          )}
        />
      </Dialog>
    </TodoContainer>
  )
}
