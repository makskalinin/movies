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
export const Li = styled.li`
    list-style: none;
    width: 274px;
    text-align: center;
    &:hover{
        color: black;
    }

`
export const Title = styled.p`
    font-size: 18px;
    height: 36px;
    margin-top: 8px;
    color: #ffffff;
    &:hover{
        color: #ffae00;
        transition: all 400ms;
    }
`
export const LinkCard = styled(Link)`
    text-decoration: none;
   
`
export const Loader = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
    
`
export const TitleHome = styled.h1`
    color: #3cff00;
    
    margin: 10px 0px 0px 0px;
    text-align:center;
`