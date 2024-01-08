import styled from "styled-components";

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .reg-form{
        max-width: 350px;
        border: 1px solid rgba(128, 128, 128, 0.3);
        padding: 20px;
        position: absolute;
        top: 170px;
    }
    .reg-btn{
        width: 300px;
        padding: .2rem;
        font-weight: 700;
        background-color: rgb(1,183, 255);
        border: none;
        color: white;
        margin-top: 12px;
        border-radius: 8px; 
    }
    .reg-form input{
        padding: .5rem;
        border-radius: 5px;
        border: 1px solid rgba(128, 128, 128, 0.3);
        width: 300px;
        margin: 5px 0;
    }
    .reg-form h2{
        margin-bottom: 10px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 800;
    }
`;