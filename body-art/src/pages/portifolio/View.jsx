import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import Header from "../../components/Header";
import imgDefault from "../../assets/images/imagem-default.png"
import { Button } from "../../components/inputs/Buttons";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../hooks/userProfile";
import { HeartIcon, Pencil2Icon, ExitIcon } from '@radix-ui/react-icons';
import Edit from "./Edit";
import { useParams } from "react-router-dom";
import api from "../../api";

export default function View() {

    const navigate = useNavigate();
    const userProfile = getUserProfile();
    const { idProfissional, idPortifolio } = useParams();

    const [portifolio, setPortifolio] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        api
        .get(`/portifolio/${idProfissional}/${idPortifolio}`)
        .then((resposta) => {
          setPortifolio(resposta.data)
        })
        .catch((error) => {
          alert("Deu erro");
        });
    }, [open])


    function curtir() {
        console.log("Curtiu");
    }

    return (
        <>
            <Header />
            <Body>
                <CardImg style={{ backgroundImage: `url(${portifolio ? portifolio?.imagem : imgDefault})` }}></CardImg>
                <Container>
                    <CardAction>
                        {(userProfile.type === "pro") &&
                            <Edit 
                                trigger={<Button onClick={() => setOpen(true)}>
                                        <Pencil2Icon height={25} width={25} />
                                    </Button>} 
                                portifolio={portifolio} 
                                open={open} 
                                handleClose={() => setOpen(false)}/>
                        }
                    </CardAction>
                    <CardDescription>
                        {portifolio?.descricao}
                    </CardDescription>
                    <CardLikeAction>
                        <CardLike>
                            <HeartIcon onClick={() => curtir()} height={30} width={30} cursor={"pointer"} />
                            {/* <Likes>
                                0
                            </Likes> */}
                        </CardLike>
                        <CardAction>
                            <Button
                                onClick={() => navigate("/portifolio")}>
                                <ExitIcon height={25} width={25} />
                            </Button>
                        </CardAction>
                    </CardLikeAction>
                </Container>
            </Body>
        </>
    )
}

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
    padding: 15px;
    display: flex;
    justify-content: flex-start;
    border-radius: 5px;
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