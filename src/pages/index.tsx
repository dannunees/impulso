import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";

export default function Home() {
  const Router = useRouter();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState<{ user?: string; pass?: string }>({});

  const validate = () => {
    const newErrors: { user?: string; pass?: string } = {};

    if (!user) newErrors.user = "E-mail é obrigatório";
    else if (!/\S+@\S+\.\S+/.test(user)) newErrors.user = "E-mail inválido";

    if (!pass) newErrors.pass = "Senha é obrigatória";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const login = { user, pass };

    try {
      const res = await fetch(
        "https://projeto-impulso.vercel.app/api/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        }
      );

      const data = await res.json();

      if (data?.data?.token) {
        localStorage.setItem("token", data.data.token);
        Router.push("/dashbord");
      } else {
        alert("Dados incorretos! Tente novamente");
      }
    } catch (error) {
      alert("Erro na requisição");
    }
  };

  return (
    <>
      <Head>
        <title>Impulso Mídia - Front-end challenge</title>
      </Head>

      <main>
        <div className="p-8">
          <Image
            src="/logo.svg"
            alt="Impulso Mídia logo"
            width={138}
            height={40}
            priority
          />
        </div>

        <div className="container w-[90%] lg:w-full mx-auto pt-8 lg:flex lg:justify-center">
          <div>
            <h2 className="text-black font-bold text-2xl">
              Entre na sua conta
            </h2>
            <p className="pt-4 font-normal max-w-72">
              Usuário novo?
              <Link href="/cadastro" className="underline text-lighter px-1">
                Entre em contato
              </Link>
              com o administrador.
            </p>

            <form onSubmit={handleSubmit} className="pt-16 lg:w-[365px] ">
              <fieldset className="relative mb-6">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                  <MailOutlinedIcon fontSize="small" />
                </div>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="pl-8 border border-[#6a708679] rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-darkest"
                />
                {errors.user && (
                  <p className="text-red-500 text-xs mt-1">{errors.user}</p>
                )}
              </fieldset>

              <fieldset className="relative mb-6">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                  <LockOutlinedIcon fontSize="small" />
                </div>
                <input
                  type="password"
                  placeholder="Senha"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="pl-8 border border-[#6a708679] rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-darkest"
                />
                {errors.pass && (
                  <p className="text-red-500 text-xs mt-1">{errors.pass}</p>
                )}
              </fieldset>

              <a href="#" className="font-bold text-pure underline">
                Esqueci a senha
              </a>

              <button
                className="bg-pure text-white text-xs font-bold w-full py-2.5 rounded-md mt-14"
                type="submit"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
