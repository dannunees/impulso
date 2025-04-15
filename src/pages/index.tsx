import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Impulso Mídia - Front-end challenge</title>
      </Head>

      <main>
        <div>
          <Image
            src="/logo.svg"
            alt="Impulso Mídia logo"
            width={138}
            height={40}
            priority
          />
        </div>

      </main>
    </>
  );
}
