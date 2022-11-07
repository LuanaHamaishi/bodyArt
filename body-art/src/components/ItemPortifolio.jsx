import React from "react";
import styled from "styled-components";

import imgDefault from "../assets/images/imagem-default.png"
import api from '../api';

export default function ItemPortifolio() {
    return (
        <Card>
            <input type="checkbox" name="selection-image" id="" />
            <CardImg src={imgDefault} alt="" />
        </Card>
    )
}

const Card = styled.div`
    background-size: cover;
    height: 371px;
    width: 31.3%;
    margin: 0 1%;   
    display: flex;
    margin-bottom: 30px;    
    flex-wrap: wrap;
    align-content: space-between;
`
const CardImg = styled.img`
    position: relative;
`