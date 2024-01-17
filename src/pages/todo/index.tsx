import { TodoContainer, TextFieldStyle } from "./style"
import { TextField, Button } from "@mui/material"
// import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { ITodo } from "./inteface";
import { useState, useId, ChangeEvent, useContext } from "react";
import Dialog from "../../components/Modal"
import Navbar from "../../components/Navbar";
import { SetAuthContext } from "../../contexts";

export default function Todo() {
  const id = useId()
  const authContext = useContext(SetAuthContext)
  const [formData, setFormData] = useState<ITodo>({
    id,
    todo: "",
    isEdit: false
  })
  const [todo, setTodo] = useState<ITodo[]>([]);
  /**
   * !Create a new todo
   * @params
   * @return void */
  const onChange = (e: ChangeEvent<HTMLInputElement>, isUpdate: boolean = false) => {
    if (isUpdate) {
      setFormData({
        ...formData,
        [e.target?.name]: e.target?.value,
      })
    } else {
      setFormData({
        ...formData,
        id: Math.floor(Math.random() * 1000000000000),
        [e.target?.name]: e.target?.value,
      })
    }
  }
  //! Thêm vào 1 note
  const createTodo = () => {
    setFormData({
      id,
      todo: "",
      isEdit: false,
    })
    setTodo([...todo, formData]) //thêm todo vào để ghi nhớ giá trị đã thêm vào trc nó
  }
  //! Open modal
  const [updateModal, setUpdateModal] = useState<boolean>(false);
  const showModal = (id: string | number) => {
    const updateItem = todo.find(item => { return item.id === id });
    if (updateItem) {
      setFormData(updateItem);
    }
    setUpdateModal(true);

  }

  //! Edit content
  const closeUpdateDialog = () => {
    setFormData({
      id,
      todo: "",
      isEdit: false,
    });
    setUpdateModal(false);
  };
  const updateDialog = () => {
    const updateData = todo.map(item => {
      if (item.id === formData.id) {
        return {
          ...formData,
          todo: formData.todo
        }
      } else {
        return item;
      }
    })
    setTodo(updateData);
    closeUpdateDialog();
  }

  //! Delete todo
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const deleteTodo = () => {
    const deleteData = todo.filter(item => {
      return item.id !== formData.id
    })
    setDeleteModal(false);
    setTodo(deleteData);
  }

  const showDeleteModal = (id: string | number) => {
    const deleteItem = todo.find(item => {
      return item.id === id
    })
    if (deleteItem) {
      setFormData(deleteItem);
    }
    setUpdateModal(false);
    setDeleteModal(true);
  }
  return (
    <TodoContainer>
      <Navbar></Navbar>
      <h1>Todo List</h1>
      <div className="addItem">
        <TextField
          id="outlined-basic"
          size="small"
          label="Todo"
          variant="outlined"
          name="todo"
          value={formData.todo}
          onChange={onChange} />
        <Button variant="outlined" onClick={createTodo}>Add</Button>

      </div>
      <div className="listItem">
        {todo.map((item, index) => (
          <div className="singleTodo" key={index}>
            <div className="content">
              <span className="todo-no">{index + 1}.</span>
              <span>{item.todo}</span>
            </div>
            <div className="btnGroup">
              <ModeEditOutlineOutlinedIcon onClick={() => showModal(item.id)} className="edit"></ModeEditOutlineOutlinedIcon>
              <DeleteOutlineOutlinedIcon onClick={() => showDeleteModal(item.id)} className="delete"></DeleteOutlineOutlinedIcon>
            </div>
          </div>
        ))}
      </div>
      <Dialog open={updateModal} title="Update List"
        submitBtn="Update"
        onCancel={closeUpdateDialog}
        onSubmit={updateDialog}>
        <TextFieldStyle
          name="todo"
          value={formData.todo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e, true)}>
        </TextFieldStyle>
      </Dialog>
      <Dialog open={deleteModal}
        title="Delete Todo"
        submitBtn="Delete"
        onCancel={closeUpdateDialog}
        onSubmit={deleteTodo}
        >
        <p>Are you sure to delete this?</p>
      </Dialog>
    </TodoContainer>
  )
}
