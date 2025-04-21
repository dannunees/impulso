import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Home() {
  const Router = useRouter();

  interface FormData {
    user: string;
    pass: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const login = { user: data.user, pass: data.pass };

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

      const result = await res.json();

      if (result?.data?.token) {
        localStorage.setItem("token", result.data.token);
        Router.push("/dashboard");
      } else {
        alert(result?.message || "Dados incorretos! Tente novamente.");
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
              <a href="#" className="underline text-lighter px-1">
                Entre em contato
              </a>
              com o administrador.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="pt-16 lg:w-[365px] "
            >
              <fieldset className="relative mb-8">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                  <MailOutlinedIcon fontSize="small" />
                </div>
                <input
                  type="email"
                  placeholder="E-mail"
                  {...register("user", {
                    required: "E-mail é obrigatório",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "E-mail inválido",
                    },
                  })}
                  className="pl-8 border border-[#6a708679] rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-darkest"
                />
                {errors.user && (
                  <p className="text-red-500 text-xs mt-1 absolute">
                    {errors.user.message}
                  </p>
                )}
              </fieldset>

              <fieldset className="relative mb-8">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                  <LockOutlinedIcon fontSize="small" />
                </div>
                <input
                  type="password"
                  placeholder="Senha"
                  {...register("pass", { required: "Senha é obrigatória" })}
                  className="pl-8 border border-[#6a708679] rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-darkest"
                />
                {errors.pass && (
                  <p className="text-red-500 text-xs mt-1 absolute">
                    {errors.pass.message}
                  </p>
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
