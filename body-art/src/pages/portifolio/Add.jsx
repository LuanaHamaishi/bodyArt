import React from "react";
import PopUp from "../../components/PopUpRx";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../../components/inputs/Buttons";
import { styled } from "@stitches/react";
import { color } from "../../assets/colors";
import { getUserProfile } from "../../hooks/userProfile";
import { useNavigate } from "react-router-dom";

import api from "../../api";

export default function Add(props) {

    const navigate = useNavigate();
    const userProfile = getUserProfile();

    const salvar = (event) => {

        event.preventDefault();

        const data = {
            imagem: event.target.image.value,
            descricao: event.target.description.value 
        }
        console.log(data);

        api
        .post(`/portifolio/${userProfile.id}`, data)
        .then((resposta) => {
            props.handleClose();
        })
        .catch((error) => {
          alert("Deu erro");
        });
    }

    return <PopUp {...props}>
        <Body>
            <Dialog.Title>Adicionar portifólio</Dialog.Title>
            <form onSubmit={salvar}>
            <Fieldset>
                <Label>
                    Imagem
                </Label>
                <Input id="image" defaultValue="http://url-da-imagem.com.br" />
            </Fieldset>
            <Fieldset>
                <Label>
                    Descrição
                </Label>
                <TextArea id="description" defaultValue="ex. Tendência verão/outono 2023" />
            </Fieldset>
            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                    <Button type="submit">Salvar</Button>
            </div>
            </form>
            
        </Body>
    </PopUp>
}

const Body = styled(
    "div",
    {
        margin: "20px",
        width: "500px",
    }
)
 
const Fieldset = styled(
    "fieldset",
    {
        all: "unset",
        marginBottom: 15,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    }
);

const Label = styled(
    "label",
    {
        fontSize: 13,
        lineHeight: 1,
        marginBottom: 10,
        color: color.bluePrimary,
        display: "block",
    }
);

const Input = styled(
    "input",
    {
        all: "unset",
        flex: "1 0 auto",
        borderRadius: 4,
        padding: "0 10px",
        fontSize: "1rem",
        lineHeight: 1,
        alignItems: "center",
        justifyContent: "center",
        color: color.bluePrimary,
        boxShadow: `0 0 0 1px ${color.blueSecondary}`,
        height: 35,
        "&:focus": { boxShadow: `0 0 0 2px ${color.blueSecondary}` },
    }
);

const TextArea = styled(
    "textarea",
    {
        all: "unset",
        flex: "1 0 auto",
        borderRadius: 4,
        padding: "0 10px",
        fontSize: "1rem",
        lineHeight: 1,
        alignItems: "center",
        justifyContent: "center",
        color: color.bluePrimary,
        boxShadow: `0 0 0 1px ${color.blueSecondary}`,
        heigth: 60,
        "&:focus": { boxShadow: `0 0 0 2px ${color.blueSecondary}` },
    }
);