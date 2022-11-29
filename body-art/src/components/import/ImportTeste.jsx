import React, { useState } from "react";
import styled from "styled-components";
import imageNotAvaliable from "../../assets/images/Image_not_available_404.jpg";
import { color } from "../../assets/colors";
import { PersonIcon, UploadIcon } from "@radix-ui/react-icons";
import { Button } from "../inputs/Buttons";

export default function FileUploadPage({ accept, imagem }) {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    // console.log("aqui seria pra enviar a imagem");
    // const formData = new FormData();
    // formData.append("File", selectedFile);
    // fetch("https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log("Success:", result);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  const verificationImage = () => {
    // TEM QUE FAZER TODAS AS VERIFICAÇOES DE CADA CAMPO DO ARQUIVO RECEBIDO, SE NÃO A APLICAÇÃO QUEBRA!
    try {
      if (selectedFile.name === undefined) return;
      return selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpeg" ||
        selectedFile.type === "image/jpg"
        ? URL.createObjectURL(selectedFile)
        : imageNotAvaliable;
    } catch (error) {
      // NÃO DEVE RETORNAR ERRO! NÃO FAZ SENTIDO!
      return console.log("Error:", error);
      return null;
    }
    // let type = selectedFile.type;
    // return selectedFile.type === "image/png" ||
    //   selectedFile.type === "image/jpeg" ||
    //   selectedFile.type === "image/jpg"
    //   ? URL.createObjectURL(selectedFile)
    //   : imageNotAvaliable;
  };

  const VerificationArchive = () => {
    // TEM QUE FAZER TODAS AS VERIFICAÇOES DE CADA CAMPO DO ARQUIVO RECEBIDO, SE NÃO A APLICAÇÃO QUEBRA!
    try {
      if (selectedFile.name === undefined) return;
      if (selectedFile.type === undefined) return;
      if (selectedFile.size === undefined) return;
      if (selectedFile.lastModifiedDate === undefined) return;
      if (selectedFile.name === undefined) return;
    } catch (error) {
      // NÃO DEVE RETORNAR ERRO! NÃO FAZ SENTIDO!
      return console.log("Error:", error);
    }
    // let type = selectedFile.type;
    // return selectedFile.type === "image/png" ||
    //   selectedFile.type === "image/jpeg" ||
    //   selectedFile.type === "image/jpg"
    //   ? URL.createObjectURL(selectedFile)
    //   : imageNotAvaliable;
    return (
      <div>
        <p>Filename: {selectedFile.name}</p>
        <p>Filetype: {selectedFile.type}</p>
        <p>Size in bytes: {selectedFile.size}</p>
        <p>
          lastModifiedDate: {selectedFile.lastModifiedDate.toLocaleDateString()}
        </p>
      </div>
    );
  };

  const InputFile = styled.input`
    display: none;
  `;

  const LabelFilePhoto = styled.label`
    width: 200px;
    height: 200px;
    background-color: ${color.blue};
    background: ${({ img }) => (img ? `url(${img})` : null)};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    box-shadow: 0px 2px 3px -5px rgba(22, 23, 24, 0.35),
      0px 2px 13px -5px rgba(22, 23, 24, 0.2);
    cursor: pointer;
    :hover {
      background-color: ${color.blueSecondary};
      box-shadow: 0px 15px 45px -5px rgba(22, 23, 24, 0.35),
        0px 15px 25px -5px rgba(22, 23, 24, 0.2);
    }
  `;

  const ButtonUpload = styled.label`
    background-color: ${color.bluePrimary};
    color: ${color.shineWhite};
    font-weight: 600;
    font-size: 18px;
    width: 150px;
    padding: 5px 10px;
    border-radius: 5px;
    transition: 0.2s;
    :hover {
      background-color: ${color.beigeDark};
      color: ${color.shineWhite};
    }
    :disabled {
      background-color: ${color.blue};
      color: #ababab;
    }
    cursor: pointer;
  `;

  return (
    <>
      <div>
        <InputFile
          accept={accept}
          type="file"
          id="file"
          name="file"
          onChange={changeHandler}
        />
        {accept === "image/*" ? (
          imagem || isFilePicked ? (
            isFilePicked ? (
              <LabelFilePhoto for="file" img={verificationImage()} />
            ) : (
              <LabelFilePhoto for="file" img={imagem} />
            )
          ) : (
            <LabelFilePhoto for="file">
              <PersonIcon height={60} width={60} color={color.bluePrimary} />
            </LabelFilePhoto>
          )
        ) : (
          //  TEM QUE FAZER TODAS AS VERIFICAÇOES DE CADA CAMPO DO ARQUIVO RECEBIDO, SE NÃO A APLICAÇÃO QUEBRA!
          <>
            {VerificationArchive()}
            <ButtonUpload for="file">
              <UploadIcon height={20} width={20} color={color.shineWhite} />
              <label
                for="file"
                style={{ marginLeft: "5px", cursor: "pointer" }}
              >
                Upload
              </label>
            </ButtonUpload>
          </>
        )}

        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
      </div>
    </>
  );
}
