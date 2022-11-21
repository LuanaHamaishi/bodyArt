import React from "react";
import PopUp from "../../components/PopUpRx";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../../components/inputs/Buttons";
import { styled } from "@stitches/react";
import { color } from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../hooks/userProfile";
import { useParams } from "react-router-dom";
import api from "../../api";

export default function Edit(props) {

    const navigate = useNavigate();
    const { idProfissional, idPortifolio } = useParams();

    const salvar = (event) => {

        event.preventDefault();

        const data = {
            imagem: event.target.image.value,
            descricao: event.target.description.value 
        }

        api
        .put(`/portifolio/${idProfissional}/${idPortifolio}`, data)
        .then((resposta) => {
            props.handleClose();
        })
        .catch((error) => {
          alert("Deu erro");
        });
    }

    return <PopUp {...props}>
        <Body>
            <Dialog.Title>Editar portifólio</Dialog.Title>
            <form onSubmit={salvar}>
                <Fieldset>
                    <Label>
                        Imagem
                    </Label>
                    <Input id="image" defaultValue={props.portifolio?.imagem} />
                </Fieldset>
                <Fieldset>
                    <Label>
                        Descrição
                    </Label>
                    <TextArea id="description" defaultValue={props.portifolio?.descricao} />
                </Fieldset>
                <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                    <Button type="submit">Salvar alterações</Button>
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