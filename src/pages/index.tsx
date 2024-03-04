import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>RD Ads - Front-end challenge</title>
      </Head>

      <main>
        <div>
          <Image
            src="/logo.svg"
            alt="RD Ads logo"
            width={138}
            height={40}
            priority
          />
        </div>

      </main>
    </>
  );
}
