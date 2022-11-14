import React from "react";
import styled from "styled-components";

import imgDefault from "../assets/images/imagem-default.png"

export default function ItemPortifolio(props) {
    const { selectable, handleSelect, handleClick } = props;
    const img = imgDefault;

    const handleImgClick = () => {
        if (selectable) {
            return;
        }
        handleClick()
    }

    return (
        <Card>
            <CardImg style={{backgroundImage: `url(${img})`}} onClick={handleImgClick} >
                {selectable && <Input type="checkbox" name="selection-image" onChange={handleSelect} /> }
            </CardImg>
        </Card>
    )
}

const Card = styled.div`
    height: 250px;
    width: 250px;  
    display: flex; 
`
const CardImg = styled.div`
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    border-radius: 5px;
    cursor: pointer;
`
const Input = styled.input`
    margin: 5px;
    width: 27px;
    height: 27px;
    cursor: pointer;
`