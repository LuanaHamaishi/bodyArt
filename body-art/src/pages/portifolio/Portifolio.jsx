import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Menu from "../../components/Menu";
import useUserProfile from "../../hooks/useUserProfile";
import { Button } from "../../components/inputs/Buttons";
import ItemPortifolio from "../../components/ItemPortifolio";
import { useNavigate } from "react-router-dom";
import Add from "./Add";

function Portifolio() {

    const navigate = useNavigate();

    const userProfile = useUserProfile();

    const photos = [1, 2, 3, 4, 5, 6];

    const [selectable, setSelectable] = useState(false);
    const [selected, setSelected] = useState([]);

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

    const handleSelectItem = (e, photo) => {
        handleSelect(photo)
        console.log("selected", photo)
    }

    const handleAdicionar = () => {
        console.log("Adicionar");
    }

    const handleDelete = () => {
        console.log("Deletar", selected)
    }

    return (
        <>
            <Header>
                <Menu />
            </Header>
            <Body>

                <div style={{ margin: "32px 0" }}>

                    {(userProfile.type === "pro") &&
                        <>
                            <Add textButton="Adicionar" />

                            {(selected == false) &&
                                <Button
                                    style={{ marginLeft: "16px" }}
                                    onClick={handleSelectable} >
                                    Selecionar
                                </Button>}

                            {(selected != false) &&
                                <Button
                                    style={{ marginLeft: "16px" }}
                                    onClick={handleDelete} >
                                    Excluir
                                </Button>
                            }
                        </>
                    }

                </div>
                <PhotosWrapper>
                    {photos.map((photo, index) =>
                        <ItemPortifolio
                            key={index}
                            selectable={selectable}
                            handleClick={() => navigate("/portifolio/view")}
                            handleSelect={e => handleSelectItem(e, photo)}
                        />
                    )}
                </PhotosWrapper>
            </Body>
        </>
    )
}

const Header = styled.div`
    width: 100%,
    height: 150px;
`
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