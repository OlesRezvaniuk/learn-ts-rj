import styled from "styled-components"
import { IBox } from "../models"
import { useState } from "react"

interface ProductProps {
    product: IBox
}

const Button = styled.button<{active?:boolean}>`
background-color: ${props => props.active?'red':'white'};
`

const Box = styled.div<{ $background?: boolean; }>`
background: ${props => props.$background?'grey':'blue'};
`

const Title = styled.h1<{ active?: boolean; }>`
font-weight: ${props => props.active? '400':'700'}
`

const Count = styled.span<{ active?: boolean }>`
color: ${props => props.active? 'red': 'green'}
`

export function Product({ product }: ProductProps) {
    const [moreInfo, setMoreInfo] = useState(false)
    const { title, id, info, count, active } = product

    console.log(moreInfo, 'click')
    function handleMoreInfo() {
        setMoreInfo(!moreInfo)
    }
return (
    <Box $background={active}>
            <Title active={active}>{title}</Title>
        <Count active={!active}>{count}</Count>
        <Button active={moreInfo} onClick={
            handleMoreInfo
        }>{moreInfo?'hide details':'show details'}</Button>
         {moreInfo && <p>{info}</p>}
        </Box>
    )
}