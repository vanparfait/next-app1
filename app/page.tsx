import Link from "next/link";
import Button from "./ui/Button";

export type PropsArticle = {
  id: number;
  titre: string;
  contenu: string;
  auteur: string;
  date: string;
};

export default async function page() {
  const getArticles = async () => {
    const response = await fetch("http://localhost:4000/articles", {
      next: {
        revalidate: 10,
      },
    });
    const data = await response.json();
    return data;
  };
  const articles = await getArticles();
  //console.log(articles);

  return (
    <>
      <h1>Bienvenue dans NEXT JS</h1>
      <p>Tout se passe du cote serveur</p>
      <div className="container">
        {articles.map((article: PropsArticle) => (
          <div key={article.id} className="carte">
            <Link href={`/article/${article.id}`}>
              {article.id}-{article.titre}
            </Link>
          </div>
        ))}
      </div>
      <p>
        <Link href="/connexion/google">Connectez vous</Link>
      </p>
      <Button />
      <Link className="bg-green-300 ml-8" href="/article/create">
        Ajouter un article
      </Link>
    </>
  );
}
