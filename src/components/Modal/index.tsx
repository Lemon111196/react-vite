// import { Button } from "@mui/material"
// import DialogModal from "@mui/material/Dialog"
import { DialogContainer } from "./style"
import IProps from "./interface"
import { TextField, Button } from "@mui/material"
import { ChangeEvent } from "react"
// import { ITodo } from "../../pages/todo/inteface"
import { useState } from "react"


export default function Dialog(props: IProps) {
    const { open, title, submitBtn, onCancel, onSubmit, children } = props
    //?? nếu thỏa mãn open thì sẽ lấy open, nếu k thỏa mãn thì sẽ lấy false ưu tiên thằng phía trước
    //? chỉ xét null hoặc undifined
    return (
        <DialogContainer open={open} >
            <div className="dialog-container">
                <h2 className="header">{title}</h2>
                <div className="modal-body">
                    {children}
                </div>
                <div className="group-btn">
                    <Button onClick={onCancel} color="error" className="cancel" variant="outlined">Cancel</Button>
                    <Button onClick={onSubmit} className="confirm" variant="outlined"
                    >{submitBtn && "OK"}</Button>
                </div>
            </div>
        </DialogContainer>
    )
}
