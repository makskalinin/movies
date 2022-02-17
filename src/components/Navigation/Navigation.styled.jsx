import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Link = styled(NavLink)`
    margin-right: 20px;
    font-size: 26px;
    color: white;
    
    
    &.active{
        color: #3cff00;
    }
`;
export const Wrapper = styled.div`
    padding-left: 0px;
    padding-top: 20px;
`
