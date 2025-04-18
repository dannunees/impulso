import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import handler from "./api/sign-in";
import { useRouter } from "next/navigation";
handler;
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import RadioOutlinedIcon from "@mui/icons-material/RadioOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function Home() {
  const Router = useRouter();

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    console.log("token", userToken);
    if (!userToken) {
      Router.push("/");
    }
  }, []);

  interface Proposta {
    id: number;
    titulo: string;
    descricao: string;
  }

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [proposta, setProposta] = useState<Proposta[]>([]);

  useEffect(() => {
    const propostaStorage = localStorage.getItem("propostas");
    if (propostaStorage) {
      setProposta(JSON.parse(propostaStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("propostas", JSON.stringify(proposta));
  }, [proposta]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const listaPropostas: Proposta = { id: Date.now(), titulo, descricao };

    setProposta([...proposta, listaPropostas]);

    localStorage.setItem("proposta", JSON.stringify(listaPropostas));

    setTitulo("");
    setDescricao("");
  }

  function deleteProposta(id: number) {
    const removeItem = proposta.filter((item) => item.id !== id);
    setProposta(removeItem);
  }

  return (
    <>
      <Head>
        <title>Impulso Mídia - Front-end challenge</title>
      </Head>

      <main>
        <div className="border-b border-[#d5d7e0]">
          <div className="flex items-center justify-between border-b border-[#d5d7e0] pl-4">
            <Image
              src="/logo.svg"
              alt="Impulso Mídia logo"
              width={138}
              height={40}
              priority
            />
            <div className="flex items-center gap-4 border-l border-[#d5d7e0] p-4">
              <PersonOutlineOutlinedIcon
                fontSize="large"
                className="text-pure"
              />
              <div>
                <p className="text-paragraph text-[10px] lg:text-[16px]">
                  Minha conta
                </p>
                <p className="text-title font-bold text-[10px] lg:text-[16px]">
                  Candidato
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="border border-[#d5d7e0] max-w-[30%] lg:max-w-[230px] py-4  pr-2">
            <ul className="flex flex-col gap-6">
              <li className="group flex items-center gap-2 text-paragraph font-bold text-[0.6rem] lg:text-xs hover:bg-lightest hover:text-pure p-2 rounded-md ">
                <FileOpenOutlinedIcon
                  fontSize="small"
                  className="text-paragraph group-hover:text-pure"
                />
                Propostas
              </li>
              <li className="group flex items-center gap-2 text-paragraph font-bold text-[0.6rem] lg:text-xs hover:bg-lightest hover:text-pure p-2 rounded-md ">
                <RadioOutlinedIcon
                  fontSize="small"
                  className="text-paragraph group-hover:text-pure"
                />
                Planos de mídia
              </li>
              <li className="group flex items-center gap-2 text-paragraph font-bold text-[0.6rem] lg:text-xs hover:bg-lightest hover:text-pure p-2 rounded-md ">
                <CampaignOutlinedIcon
                  fontSize="small"
                  className="text-paragraph group-hover:text-pure"
                />
                Campanhas
              </li>
              <li className="group flex items-center gap-2 text-paragraph font-bold text-[0.6rem] lg:text-xs hover:bg-lightest hover:text-pure p-2 rounded-md ">
                <DescriptionOutlinedIcon
                  fontSize="small"
                  className="text-paragraph group-hover:text-pure"
                />
                Reserva
              </li>
              <li className="group flex items-center gap-2 text-paragraph font-bold text-[0.6rem] lg:text-xs hover:bg-lightest hover:text-pure p-2 rounded-md ">
                <AssessmentOutlinedIcon
                  fontSize="small"
                  className="text-paragraph group-hover:text-pure"
                />
                Relatórios
              </li>
              <li className="group flex items-center gap-2 text-paragraph font-bold text-[0.6rem] lg:text-xs hover:bg-lightest hover:text-pure p-2 rounded-md ">
                <FileOpenOutlinedIcon
                  fontSize="small"
                  className="text-paragraph group-hover:text-pure"
                />
                Contas e Permissões
              </li>
              <li className="group flex items-center gap-2 text-paragraph font-bold text-[0.6rem] lg:text-xs hover:bg-lightest hover:text-pure p-2 rounded-md ">
                <GroupOutlinedIcon
                  fontSize="small"
                  className="text-paragraph group-hover:text-pure"
                />
                Canais
              </li>
              <li className="group flex items-center gap-2 text-paragraph font-bold text-[0.6rem] lg:text-xs hover:bg-lightest hover:text-pure p-2 rounded-md ">
                <ManageSearchOutlinedIcon
                  fontSize="small"
                  className="text-paragraph group-hover:text-pure"
                />
                Gestão de lista
              </li>
              <li className="group flex items-center gap-2 text-paragraph font-bold text-[0.6rem] lg:text-xs hover:bg-lightest hover:text-pure p-2 rounded-md mt-52">
                <SettingsOutlinedIcon
                  fontSize="small"
                  className="text-paragraph group-hover:text-pure"
                />
                Configurações de conta
              </li>
            </ul>
          </div>

          <div className="flex justify-center w-1/2 mx-auto lg:w-full py-8">
            <div>
              <h2 className="text-pure font-bold text-[14px] lg:text-3xl">
                Cadastre suas propostas!
              </h2>

              <form onSubmit={handleSubmit} className="pt-8">
                <fieldset>
                  <label
                    className="text-[12px] lg:text-[16px]"
                    htmlFor="titulo"
                  >
                    Título Proposta
                  </label>
                  <input
                    type="text"
                    id="titulo"
                    placeholder="Digite o título da proposta..."
                    className="pl-2 mt-2 border border-[#6a708679] rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-darkest text-[12px] lg:text-[16px]"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                  />
                </fieldset>
                <fieldset className="pt-4">
                  <label
                    htmlFor="descricao"
                    className="text-[12px] lg:text-[16px]"
                  >
                    Descrição da Proposta
                  </label>
                  <textarea
                    name="descricao"
                    id="descricao"
                    placeholder="Digite a descrição da proposta"
                    className="pl-2 mt-2 border border-[#6a708679] rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-darkest text-[12px] lg:text-[16px]"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    rows={4}
                  ></textarea>
                </fieldset>
                <button
                  className="bg-pure text-white font-bold p-2 rounded mt-4 w-full text-[12px] lg:text-[16px]"
                  type="submit"
                >
                  Cadastrar
                </button>
              </form>

              <ul className="pt-8">
                {proposta.map((proposta) => (
                  <li
                    key={proposta.titulo}
                    className="border border-dark rounded-md p-2 my-4 "
                  >
                    <h4 className="text-lighter font-bold text-xl text-[12px] lg:text-[16px]">
                      {proposta.titulo}
                    </h4>
                    <div className="pt-4 text-[12px] lg:text-[16px]">
                      {proposta.descricao}
                    </div>
                    <button
                      onClick={() => deleteProposta(proposta.id)}
                      className="bg-dark text-white font-bold p-2 mt-8 w-full text-[12px] lg:text-[16px]"
                    >
                      Excluir
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
