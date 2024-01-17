import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #CCCCCC;
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    h2{
        display: flex;
        align-items: center;
        margin-left: 10px;
    }
.part2{
    display: flex;
    align-items: center;
    padding: 10px
}
.avatar{
    width: 50px;
    height: 45px;
}
`;