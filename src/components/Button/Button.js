import {Wrapper,ButtonLoadMore} from './Button.styled'
export default function Button({onClick}){
    return(
        <Wrapper>
            <ButtonLoadMore onClick={()=>onClick()} type="submit">Load More</ButtonLoadMore>
        </Wrapper>
    )
    }