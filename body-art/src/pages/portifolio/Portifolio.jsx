import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import useUserProfile from "../../hooks/useUserProfile";
import { Button } from "../../components/inputs/Buttons";
import ItemPortifolio from "../../components/ItemPortifolio";
import { useNavigate } from "react-router-dom";
import Add from "./Add";
import { useEffect } from "react";
import api from "../../api";
import { TrashIcon, PlusIcon, Pencil2Icon, ResetIcon } from '@radix-ui/react-icons';

function Portifolio() {

    const navigate = useNavigate();
    const userProfile = useUserProfile();

    const [portifolio, setPortifolio] = useState([]);
    const [selectable, setSelectable] = useState(false);
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);
    const [disabledReset, setDisabledReset ] = useState(true);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        api
            .get(`/portifolio/${userProfile.id}`)
            .then((resposta) => {
                setPortifolio(resposta.data)
                if (resposta.status === 204) {
                    setPortifolio([])
                }
            })
            .catch((error) => {
                alert("Deu erro");
            });

        api
            .get(`/portifolio/refazer/${userProfile.id}`)
            .then((resposta) => {
                if (resposta.status === 204) {
                    setDisabledReset(true)
                } else if (resposta.status === 200) {
                    setDisabledReset(false)
                }
            })
            .catch((erro) => {
                alert("Erro ao refazer, procure ajuda");
            });
        
    }, [open, refresh])

    const handleSelectable = () => {
        setSelectable(!selectable);
        setSelected([]);
    }

    const handleSelect = (value) => {
        setSelected(selecteds => {
            if (selecteds.find(s => s === value)) {
                return [...selecteds.filter(s => s !== value)]
            }
            return [...selecteds, value]
        })
    }

    const handleSelectItem = (e, idPortifolio) => {
        handleSelect(idPortifolio)
        console.log("selected", idPortifolio)
    }

    async function deletar(handleSelectItem) {

        for (const id of selected) {
            await api
                .delete(`/portifolio/${userProfile.id}/${id}`)
                .catch((erro) => {
                    alert("Erro ao deletar, procure ajuda");
                });
        }
        setRefresh(r => r + 1);
        setSelectable(false);
        setSelected([]);
    }

    async function refazer() {
        await api
            .patch(`/portifolio/${userProfile.id}`)
            .catch((erro) => {
                alert("Erro ao refazer, procure ajuda");
            });
        setRefresh(r => r + 1);
    }

    return (
        <>
            <Header />
            <Body>

                <div style={{ margin: "32px 0" }}>

                    {(userProfile.type === "pro") &&
                        <>
                            <div style={{ display: "flex", 
                            flexDirection: "row", 
                            justifyContent: "space-between",
                            padding: "0 32px",
                            width: "100%" }}>
                                <div style={{ flex: "1" }}></div>
                                <div style={{ flex: "1" }}>
                                    <Add
                                        trigger={<Button onClick={() => setOpen(true)}>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <span style={{ marginRight: "10px" }}>Adicionar Foto</span>
                                                <PlusIcon height={25} width={25} />
                                            </div>
                                        </Button>}
                                        portifolio={portifolio}
                                        open={open}
                                        handleClose={() => setOpen(false)} />

                                    {(selected == false) &&
                                        <Button
                                            style={{ marginLeft: "16px" }}
                                            onClick={handleSelectable} >
                                            <Pencil2Icon height={25} width={25} />
                                        </Button>}

                                    {(selected != false) &&
                                        <Button
                                            style={{ marginLeft: "16px" }}
                                            onClick={deletar} >
                                            <TrashIcon height={25} width={25} />
                                        </Button>}

                                </div>
                                <div style={{flex: "1", display: "flex", justifyContent: "flex-end"}}>
                                <Button
                                    onClick={refazer}
                                    disabled={disabledReset} >
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <span style={{ marginRight: "10px" }}>Desfazer</span>
                                        <ResetIcon height={25} width={25} />
                                    </div>
                                </Button>
                                </div>
                            </div>
                        </>
                    }

                </div>
                <PhotosWrapper>
                    {portifolio?.map((photo) =>
                        <ItemPortifolio
                            key={photo.idPortifolio}
                            selectable={selectable}
                            img={photo.imagem}
                            handleClick={() => navigate(`/portifolio/view/${photo.profissional.id}/${photo.idPortifolio}`)}
                            handleSelect={e => handleSelectItem(e, photo.idPortifolio)}
                        />
                    )}
                </PhotosWrapper>
            </Body>
        </>
    )
}

const Body = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: calc(100vh - 150px);
`
const PhotosWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > div:not(:last-child) {
        margin-right: 16px;
        margin-bottom: 16px;
    }
`

export default Portifolio;