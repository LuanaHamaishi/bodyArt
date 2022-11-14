import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Menu from "../../components/Menu";
import imgDefault from "../../assets/images/imagem-default.png"
import { Button } from "../../components/inputs/Buttons";
import { useNavigate } from "react-router-dom";
import useUserProfile from "../../hooks/useUserProfile";
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons';
import Edit from "./Edit";

export default function View() {

    const navigate = useNavigate();
    const userProfile = useUserProfile();

    const img = imgDefault;


    function curtir() {
        console.log("Curtiu");
    }

    return (
        <>
            <Header>
                <Menu />
            </Header>
            <Body>
                <CardImg style={{ backgroundImage: `url(${img})` }}></CardImg>
                <Container>
                    <CardAction>
                        {(userProfile.type === "pro") &&
                            
                            <Edit textButton="Editar"/>

                        }
                    </CardAction>
                    <CardDescription>
                        Legenda
                    </CardDescription>
                    <CardLikeAction>
                        <CardLike>
                            <HeartIcon onClick={() => curtir()} height={30} width={30} cursor={"pointer"} />
                            <Likes>
                                0
                            </Likes>
                        </CardLike>
                        <CardAction>
                            <Button
                                onClick={() => navigate("/portifolio")}>
                                Voltar
                            </Button>
                        </CardAction>
                    </CardLikeAction>
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
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5rem; 
`
const CardAction = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 16px;
`
const CardLike = styled.div`
    display: flex;
    flex-direction: row;
`
const Likes = styled.span`
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5rem; 
    margin-left: 5px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 500px;
`
const CardLikeAction = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:100%; 
    margin-top: 16px;
`