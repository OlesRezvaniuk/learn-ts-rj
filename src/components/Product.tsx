import styled from "styled-components"
import { IBox } from "../models"

interface ProductProps {
    product: IBox
}

const Box = styled.div<{ $background?: boolean; }>`
background: ${props => props.$background?'grey':'blue'};
`

export function Product(props: ProductProps) {
    const {title, id, info, count, active} = props.product
    console.log(title, id, info, count, active)
return (
    <Box $background={active}>
            <h1>{title}</h1>
        <span>{count}</span>
        <p>{info}</p>
        </Box>
    )
}