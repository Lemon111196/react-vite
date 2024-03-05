import styled from "styled-components";

export const TodoContainer = styled.div`
    .input{
        width: 300px;
        border: none;
        margin: 10px;
    }
    .error{
        color: red;
        margin-left: 10px;
    }
    .btn{
        margin-left: 10px;
    }
    .list-note{
        background-color: cornsilk;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .note{
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .edit{
        color: orange;
        cursor: pointer;
    }
    .delete{
        color: red;
        cursor: pointer;
    }
    
    `;