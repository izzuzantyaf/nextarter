import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextarter</title>
        <meta name="description" content="Next.js starter app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto min-h-screen flex items-center">
          <h1 className="font-extrabold text-4xl">Nextarter</h1>
        </div>
      </main>
    </>
  );
}
