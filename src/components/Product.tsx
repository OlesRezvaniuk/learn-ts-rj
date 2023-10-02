import styled from "styled-components"
import { IBox } from "../models"
import { useState } from "react"

interface ProductProps {
    product: IBox
}

const Button = styled.button<{active?:boolean}>`
background-color: ${props => props.active ? 'red' : 'white'};
transition: 250ms;
&:hover {
    color: red;
    background-color: ${props => props.active ? 'purple' : 'grey'};
}
`

const Box = styled.div<{ $background?: boolean; }>`
background: ${props => props.$background ? 'grey' : 'blue'};
transition: 250ms;
display: block;
    width: 50%;
    margin: auto;
    text-align: center;
&:hover {
    color: red;
    box-shadow: 1px 1px 1px black;
}
`

const Title = styled.h1<{ active?: boolean; }>`
font-weight: ${props => props.active ? '400' : '700'};
pointer-events: none;
`

const Count = styled.span<{ active?: boolean; value?: number }>`
color: ${props => props.active ? 'red' : 'green'};
pointer-events: none;
`

export function Product({ product }: ProductProps) {
    const [moreInfo, setMoreInfo] = useState(false)
    const { title, id, info, count, active } = product

    function handleMoreInfo() {
        setMoreInfo(!moreInfo)
    }

    function weight() {
        if (count >= 50) {
        return 'bold'
        } else if (count <= 40) {
            return 'lighter'
    }
}

return (
    <Box $background={active}>
            <Title active={active}>{title}</Title>
        <Count style={{fontWeight: weight()}} active={!active}>{count}</Count>
        <Button active={moreInfo} onClick={
            handleMoreInfo
        }>{moreInfo?'hide details':'show details'}</Button>
         {moreInfo && <p>{info}</p>}
        </Box>
    )
}