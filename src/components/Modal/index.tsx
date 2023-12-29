// import { Button } from "@mui/material"
// import DialogModal from "@mui/material/Dialog"
import { DialogContainer } from "./style"
import IProps from "./interface"
import { TextField, Button } from "@mui/material"
import { ChangeEvent } from "react"
// import { ITodo } from "../../pages/todo/inteface"
import { useState } from "react"


export default function Dialog(props: IProps) {
    const { open, title, content } = props
    //?? nếu thỏa mãn open thì sẽ lấy open, nếu k thỏa mãn thì sẽ lấy false ưu tiên thằng phía trước
    //? chỉ xét null hoặc undifined
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    }
    const [saveChange, closeModal] = useState(false);
    const hideModal = () => {
        closeModal(false);
    }
    const updateContent = () => {
        
    }
    return (
        <DialogContainer open={open ?? false} >
            <div className="dialog-container">
                <h2 className="header">{title}</h2>
                <TextField className="text-field"
                    value={content}
                    onChange={onChange}
                >{content}</TextField>
                <div className="group-btn">
                    <Button onClick={hideModal} color="error" className="cancel" variant="outlined">Cancel</Button>
                    <Button  className="confirm" variant="outlined">Save</Button>
                </div>
            </div>
        </DialogContainer>
    )
}
