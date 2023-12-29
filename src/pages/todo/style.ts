import styled from "styled-components";
export const TodoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    .addItem{
        display: flex;
        justify-content: space-around;
        /* align-items: center; */
        min-width: 500px;
    }
    .addItem input{
        width: 400px;
    }
    .singleTodo{
        display: flex;
        justify-content: space-between;
        width: 500px;
        margin: 10px
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