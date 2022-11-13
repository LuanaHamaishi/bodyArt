import React from "react";
import styled from "styled-components";
import Menu from "../../components/Menu";
import imgDefault from "../../assets/images/imagem-default.png"
import { Button } from "../../components/inputs/Buttons";
import { useNavigate } from "react-router-dom";

export default function Edit() {

    const navigate = useNavigate();

    const img = imgDefault;

    return (
        <>
            <Header>
                <Menu />
            </Header>
            <Body>
                <CardImg style={{ backgroundImage: `url(${img})` }}></CardImg>
                <Container>
                    <CardDescription>
                        <span>Legenda</span>
                    </CardDescription>
                    <div>
                        <CardLike>
                            <span>Curtida</span>
                        </CardLike>
                        <Button
                        onClick={() => navigate("/portifolio")}>
                            Voltar
                        </Button>

                    </div>
                </Container>
            </Body>
        </>
    )
}

const Header = styled.div`
    width: 100%,
    height: 150px;
`
const Body = styled.div`
    padding-top: 100px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: row;
`
const CardImg = styled.div`
    height: 500px;
    width: 500px;  
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    border-radius: 5px;
`
const CardDescription = styled.div`
    height: 180px;
    width: 680px; 
    background-color: #B8C7CC;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    border-radius: 5px;
`
const CardLike = styled.div`
    padding-top: 16px;
    text-align: left;
    font-size: 1.25em;
    font-weight: 400;
    line-height: 1.5rem; 
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 500px;
`