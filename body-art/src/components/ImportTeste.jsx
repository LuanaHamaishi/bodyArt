import React, { useState } from "react";
import imageNotAvaliable from "../assets/images/Image_not_available.png";

export default function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    console.log("aqui seria pra enviar a imagem");
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
      if (selectedFile.name == undefined) return;
      return selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpeg" ||
        selectedFile.type === "image/jpg"
        ? URL.createObjectURL(selectedFile)
        : imageNotAvaliable;
    } catch (error) {
      // NÃO DEVE RETORNAR ERRO! NÃO FAZ SENTIDO!
      // return console.log("Error: UploadFile");
      return null;
    }
    // let type = selectedFile.type;
    return selectedFile.type === "image/png" ||
      selectedFile.type === "image/jpeg" ||
      selectedFile.type === "image/jpg"
      ? URL.createObjectURL(selectedFile)
      : imageNotAvaliable;
  };

  return (
    <>
      <div>
        <input type="file" name="file" onChange={changeHandler} />
        {isFilePicked ? (
          <div>
            <img
              height={"300px"} // DEPOIS TEM QUE MUDAR ESSAS COISAS DE TAMANHO AE
              src={verificationImage()}
              alt={selectedFile ? "Image not avaliable" : "Image not avaliable"}
            />
            ,
            {/* TEM QUE FAZER TODAS AS VERIFICAÇOES DE CADA CAMPO DO ARQUIVO RECEBIDO, SE NÃO A APLICAÇÃO QUEBRA! */}
            {/* <p>Filename: {selectedFile.name}</p> */}
            {/* <p>Filetype: {selectedFile.type}</p> */}
            {/* <p>Size in bytes: {selectedFile.size}</p> */}
            {/* <p>
              lastModifiedDate:{" "}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p> */}
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
      </div>
    </>
  );
}
