import Link from "next/link";

export default function page() {
  return (
    <>
      <h1>Bienvenue dans NEXT JS</h1>
      <p>
        <Link href="/connexion/google">Connectez vous</Link>
      </p>
    </>
  );
}
