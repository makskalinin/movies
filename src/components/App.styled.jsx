import styled from "styled-components";
export const Container = styled.div`
    min-width: 270px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    @media screen and (min-width: 320px) {
        &{
            width: 320px;
        }}
    @media screen and (min-width: 768px) {
        &{
         width: 768px;
         padding: 0px 75px;
        }
    }
    @media screen and (min-width: 1200px) {
        &{
         width: 1200px;
         
        }
    }`

