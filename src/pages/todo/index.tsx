import { TodoContainer } from "./style"
import { TextField, Button } from "@mui/material"
// import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { ITodo } from "./inteface";
import { useState, useId, ChangeEvent } from "react";
import Dialog from "../../components/Modal"

export default function Todo() {
    const id = useId()
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

    const [isEdit, setIsEdit] = useState<ITodo[]>([]);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setFormData({
            ...formData,
            id: Math.floor(Math.random() * 1000000000000),
            [e.target?.name]: e.target?.value,
        })
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
    const [isOpen, openModal] = useState(false);
    const showModal = () =>{
        openModal(true);
    }
    
    //! Edit content
    const editTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            id: Math.floor(Math.random() * 1000000000000),
            [e.target?.name]: e.target?.value,
        })
        setIsEdit([...todo, formData])
    }

    return (
        <TodoContainer>
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
                            <ModeEditOutlineOutlinedIcon onClick={showModal} className="edit"></ModeEditOutlineOutlinedIcon>
                            <DeleteOutlineOutlinedIcon className="delete"></DeleteOutlineOutlinedIcon>
                        </div>
                    </div>
                ))}
            </div>
            <Dialog open={isOpen} title="Update List"></Dialog>
        </TodoContainer>
    )
}
