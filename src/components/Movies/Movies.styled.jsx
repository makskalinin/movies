import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  margin-right: 20px;
  color: white;
  font-size:22px;
  &.active {
    color: red;
  }
`;
export const LinkBack = styled(NavLink)`
  display: flex;
  align-items:center;
  color: white;
  font-size:18px;
  margin-top: 5px;
  text-decoration: none;
  &:hover {
    color: #ffae00;
    transition: color 300ms;
  }
`;
export const Wrapper = styled.ul`
display: flex;
`;
export const Li = styled.li`
    list-style: none;
    margin-right: 15px;
`
export const Container = styled.div`
  display:flex;
  margin-top: 20px;
`
export const Title = styled.h1`
  font-size: 24px;
  
  color: white;
`
export const TitleInfo = styled.h2`
  font-size: 22px;
  color: #ffae00;
  margin: 0;
`
export const Img = styled.img`
  width: 234px;
    height: 338px;
    border-radius: 5px;
   
`
export const P = styled.p`
  color: white;
`
export const PRed = styled.p`
  color: #ffae00;
  font-size: 16px;
`
export const GanrLi = styled.li`
  color: white;
`
export const Span = styled.span`
  color:white;
`
export const DivRight = styled.div`
position: relative;
  margin-right: 30px;
`
export const DivYouTube = styled.div`
  position: absolute;
  top: 125px;
  left: 79px;
  &:hover{
    transform: scale(1.05)
  }
`


