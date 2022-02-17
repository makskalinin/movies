import styled from "styled-components";
import { Link } from "react-router-dom";



export const Img = styled.img`
    width: 274px;
    height: 398px;
    border-radius: 5px;
    &:hover{
        box-shadow: 2px -2px 2px 3px white;
        transform: translateX(1px) rotate(1deg) translateY(1px);
        transition: all 400ms;
    }
    `
    export const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    margin: 0;
`
export const Title = styled.p`
    font-size: 18px;
    height: 36px;
    
    color: #ffffff;
    &:hover{
        color: #ffae00;
        transition: all 400ms;
    }
`
export const LinkCard = styled(Link)`
    text-decoration: none;
   
`
export const Li = styled.li`
    list-style: none;
    width: 274px;
    text-align: center;
`
export const Input = styled.input`
    width: 400px;
    height: 28px;
    font-size: 18px;
    padding-left: 10px;
   
`
export const Form = styled.form`
display: flex;
align-items:center;
justify-content: center;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
 
`
export const Btn = styled.button`
    width: 90px;
    height: 36px;
    background-color: #ffae00;
    color: black;
    margin-left: 5px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    &:hover{
        background-color: #7127fc;
    color: white;
    
    transition: all 350ms;
    }
`
export const Loader = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
    
`