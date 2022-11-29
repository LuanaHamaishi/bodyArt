import React, { useState } from "react";
import PopUp from "../PopUpRx";
import Description from "../inputs/Description";
import Title from "../inputs/Title";
import styled from "styled-components";
import { Button } from "../inputs/Buttons";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { setUserProfile } from "../../hooks/userProfile";
import Validate from "./Validation";
import { useForm } from "react-hook-form";
import InputLabel, { Label } from "../inputs/InputLabel";
import { Input, Option, Select, InputMask } from "../inputs/Inputs";
import { maskCep, maskCpf } from "./maskRegex";
import { Tabs, TabsContent, TabsItem, TabsList } from "../TabsRx";
import { toast } from "react-toastify";
import axios from "axios";
import { color } from "../../assets/colors";
import { useEffect } from "react";

export default function LoginRegistrationProfissional({
  buttonText,
  themeButton,
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const ContainerTwoInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  `;

  const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const ContainerSubmit = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${({ gap }) => (gap ? gap : "2rem")};
  `;

  const ButtonCep = styled.div.attrs({ className: "btn" })`
    background-color: ${color.bluePrimary} !important;
    color: ${color.shineWhite} !important;
    :hover {
      background-color: ${color.brownLight} !important;
      color: ${color.shineWhite} !important;
    }
    :active {
      background-color: ${color.bluePrimary} !important;
      color: ${color.shineWhite} !important;
    }
  `;

  const ContainerTitleDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0px 25px;
    gap: 5px;
  `;

  const [errorsMessage, setErrorsMessage] = useState({});

  function setProfile(data) {
    return {
      id: data.id,
      nome: data.nomeProfissional,
      userRole: "profissional",
      type: "pro",
    };
  }

  function Cadastrar() {
    const [part, setPart] = useState(1);
    const { register, handleSubmit, setValue, getValues, reset } = useForm();

    useEffect(() => {
      return isOpen
        ? undefined
        : () => {
            reset();
            setPart(1);
          };
    }, [isOpen]);

    const getAddress = async (cep) => {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setValue("cepProfissional", cep);
      setValue("ruaProfissional", data.logradouro);
      setValue("cidadeProfissional", data.localidade);
      setValue("ufProfissional", data.uf);
      setValue("bairroProfissional", data.bairro);
    };

    const errorPage = () => {
      if (
        errorsMessage?.nomeProfissional ||
        errorsMessage?.cpfProfissional ||
        errorsMessage?.generoProfissional ||
        errorsMessage?.emailProfissional ||
        errorsMessage?.dataNascProfissional ||
        errorsMessage?.senhaProfissional
      ) {
        return (
          <Label
            style={{
              fontWeight: "600",
              marginLeft: "-0.5rem",
              fontSize: "0.9rem",
            }}
            className="mt-3"
            color="red"
          >
            Error
          </Label>
        );
      } else {
        return null;
      }
    };

    const onSubmit = (data) => {
      api
        .post(`/profissionais`, data)
        .then((res) => {
          // setUserProfile(setProfile(res.data));
          toast.success("Cadastro concluído!");
          setIsOpen(false);
          setTimeout(() => {
            setIsOpen(true);
          }, 100);
        })
        .catch((erro) => {
          toast.warning("Cadastro inválido!");
          if (erro.response.status === 400) {
            console.log(erro);
            setErrorsMessage(Validate(erro.response.data.errors));
          }
        });
    };

    const RegistrationPartOne = () => {
      return (
        <>
          <ContainerTitleDescription>
            <Title>Dados</Title>
            <Description>Faça seu registro</Description>
          </ContainerTitleDescription>
          <InputLabel
            label="Nome"
            input={
              <Input
                name="nomeProfissional"
                placeholder="Ex: José Maria"
                type="text"
                {...register("nomeProfissional")}
              />
            }
            errorLabel={errorsMessage?.nomeProfissional}
          />

          <ContainerTwoInput>
            <InputLabel
              label="Data de Nascimento"
              input={
                <Input
                  name="dataNascProfissional"
                  type="date"
                  {...register("dataNascProfissional")}
                />
              }
              errorLabel={errorsMessage?.dataNascProfissional}
            />
            <InputLabel
              label="Genêro"
              input={
                <Select
                  name="generoProfissional"
                  {...register("generoProfissional")}
                >
                  <Option value="">Selecione</Option>
                  <Option value="N">Não declarado</Option>
                  <Option value="F">Feminino</Option>
                  <Option value="M">Masculino</Option>
                </Select>
              }
              errorLabel={errorsMessage?.generoProfissional}
            />
          </ContainerTwoInput>

          <InputLabel
            label="CPF"
            input={
              <InputMask
                name="cpfProfissional"
                mask={maskCpf}
                placeholder="000.000.000.00"
                guide={true}
                defaultValue={getValues("cpfProfissional")}
              />
            }
            errorLabel={errorsMessage?.cpfProfissional}
          />
          <InputLabel
            label="Email"
            input={
              <Input
                name="emailProfissional"
                type="email"
                {...register("emailProfissional")}
                placeholder="Ex: email@example.com"
              />
            }
            errorLabel={errorsMessage?.emailProfissional}
          />
          <InputLabel
            label="Senha"
            input={
              <Input
                name="senhaProfissional"
                type="password"
                {...register("senhaProfissional")}
                placeholder="***********"
              />
            }
            errorLabel={errorsMessage?.senhaProfissional}
          />

          <ContainerSubmit gap="1rem">
            <Button
              className="btn-sm mt-2"
              themeButton="primary"
              onClick={() => {
                setValue(
                  "cpfProfissional",
                  `${new URLSearchParams(
                    new FormData(document.getElementById("form-registration"))
                  ).get("cpfProfissional")}`
                );
                setPart(2);
              }}
            >
              Próximo
            </Button>
          </ContainerSubmit>
        </>
      );
    };

    const RegistrationPartTwo = () => {
      return (
        <>
          <ContainerTitleDescription>
            <Title>Endereço</Title>
            <Description>Local de trabalho</Description>
          </ContainerTitleDescription>

          <ContainerTwoInput>
            <InputLabel
              label="Cep"
              input={
                <InputMask
                  name="cepProfissional"
                  mask={maskCep}
                  placeholder="00000-000"
                  guide={true}
                  defaultValue={getValues("cepProfissional")}
                />
              }
              errorLabel={errorsMessage?.cepProfissional}
            />
            <ButtonCep
              className="btn-sm mt-2"
              onClick={() =>
                getAddress(
                  new URLSearchParams(
                    new FormData(document.getElementById("form-registration"))
                  ).get("cepProfissional")
                )
              }
            >
              Buscar
            </ButtonCep>
          </ContainerTwoInput>
          <ContainerTwoInput>
            <InputLabel
              label="Rua"
              input={
                <Input
                  name="ruaProfissional"
                  placeholder="Ex: Rua Haddock Lobo"
                  type="text"
                  {...register("ruaProfissional")}
                  defaultValue={getValues("ruaProfissional")}
                />
              }
              errorLabel={errorsMessage?.ruaProfissional}
            />
            <InputLabel
              label="Número"
              style={{ width: "60%" }}
              input={
                <Input
                  name="numeroProfissional"
                  placeholder="Ex: 1079"
                  type="text"
                  style={{ width: "60%" }}
                  {...register("numeroProfissional")}
                />
              }
              errorLabel={errorsMessage?.numeroProfissional}
            />
          </ContainerTwoInput>

          <ContainerTwoInput>
            <InputLabel
              label="Cidade"
              input={
                <Input
                  name="cidadeProfissional"
                  placeholder="Ex: São Paulo"
                  type="text"
                  {...register("cidadeProfissional")}
                  defaultValue={getValues("cidadeProfissional")}
                />
              }
              errorLabel={errorsMessage?.cidadeProfissional}
            />
            <InputLabel
              label="UF"
              style={{ width: "60%" }}
              input={
                <Input
                  name="ufProfissional"
                  placeholder="Ex: SP"
                  type="text"
                  style={{ width: "60%" }}
                  {...register("ufProfissional")}
                  defaultValue={getValues("ufProfissional")}
                />
              }
              errorLabel={errorsMessage?.ufProfissional}
            />
          </ContainerTwoInput>
          <InputLabel
            label="Bairro"
            input={
              <Input
                name="bairroProfissional"
                placeholder="Ex: Cerqueira César"
                type="text"
                {...register("bairroProfissional")}
                defaultValue={getValues("bairroProfissional")}
              />
            }
            errorLabel={errorsMessage?.bairroProfissional}
          />
          <InputLabel
            label="Complemento"
            input={
              <Input
                name="complementoProfissional"
                placeholder="Ex: Faculdade SPTech"
                type="text"
                {...register("complementoProfissional")}
              />
            }
            errorLabel={errorsMessage?.complementoProfissional}
          />
          <ContainerButton>
            <ContainerSubmit gap="1rem">
              <Button
                className="btn-sm mt-2"
                themeButton="primary"
                onClick={() => setPart(1)}
              >
                Voltar
              </Button>
              {errorPage()}
            </ContainerSubmit>
            <ContainerSubmit gap="1rem">
              <Button
                themeButton="confirm"
                type="submit"
                onClick={() => {
                  errorPage();
                  setValue(
                    "cepProfissional",
                    `${new URLSearchParams(
                      new FormData(document.getElementById("form-registration"))
                    ).get("cepProfissional")}`
                  );
                }}
              >
                Registrar
              </Button>
              <Button
                themeButton="cancel"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancelar
              </Button>
            </ContainerSubmit>
          </ContainerButton>
        </>
      );
    };

    return (
      <>
        <form id="form-registration" onSubmit={handleSubmit(onSubmit)}>
          {part === 2 ? <RegistrationPartTwo /> : <RegistrationPartOne />}
        </form>
      </>
    );
  }

  function Logar() {
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
      return isOpen
        ? undefined
        : () => {
            reset();
          };
    }, [isOpen]);

    const onSubmit = (data) => {
      api
        .post(`/profissionais/autenticar`, data)
        .then((res) => {
          setUserProfile(setProfile(res.data));
          toast.success("Login efetuado!");
          navigate("/dashboard");
        })
        .catch((erro) => {
          console.log(erro);
          toast.warning("Login inválido!");
          setErrorsMessage(Validate(erro.response.data.errors));
        });
    };

    return (
      <>
        <ContainerTitleDescription>
          <Title>Acesso</Title>
          <Description>Faça seu login</Description>
        </ContainerTitleDescription>

        <form id="form-login" onSubmit={handleSubmit(onSubmit)}>
          <InputLabel
            label="Email"
            input={
              <Input
                name="email"
                type="email"
                placeholder="Ex: email@example.com"
                {...register("email")}
                autoComplete="off"
                autoFocus="off"
              />
            }
            errorLabel={errorsMessage?.email}
          />
          <InputLabel
            label="Senha"
            input={
              <Input
                name="senha"
                placeholder="************"
                type="password"
                {...register("senha")}
                autoComplete="off"
                autoFocus="off"
              />
            }
            errorLabel={errorsMessage?.senha}
          />

          <ContainerSubmit gap="1rem">
            <Button themeButton="confirm" type="submit">
              Login
            </Button>
            <Button themeButton="cancel" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
          </ContainerSubmit>
        </form>
      </>
    );
  }

  return (
    <PopUp
      trigger={
        <Button
          onClick={() => setIsOpen(true)}
          themeButton={themeButton ? themeButton : "primary"}
          className={className}
        >
          {buttonText}
        </Button>
      }
      dropClose
      open={isOpen}
      handleClose={() => setIsOpen(false)}
    >
      <Tabs pageDefault={1} width="420px">
        <TabsList>
          <TabsItem page={1}>Acessar</TabsItem>
          <TabsItem page={2}>Registrar</TabsItem>
        </TabsList>
        <TabsContent page={1}>{Logar()}</TabsContent>
        <TabsContent page={2}>{Cadastrar()}</TabsContent>
      </Tabs>
    </PopUp>
  );
}
