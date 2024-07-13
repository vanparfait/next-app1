import Link from "next/link";
import Button from "./ui/Button";
import Image from "next/image";

export type PropsArticle = {
  id: number;
  titre: string;
  contenu: string;
  auteur: string;
  date: string;
  lienImage: string;
};

export default async function page() {
  const getArticles = async () => {
    const response = await fetch("http://localhost:3000/api/articles");
    const data = await response.json();
    return data;
  };
  const { data: articles } = await getArticles();
  // const article1 = await getArticles();
  // const articles = article1.data;

  return (
    <>
      <h1>Bienvenue dans NEXT JS</h1>
      <p>Tout se passe du cote serveur</p>
      <div className="flex gap-4 flex-wrap">
        {articles.map((article: PropsArticle) => (
          // <div key={article.id} className="carte">
          //   <Link href={`/article/${article.id}`}>
          //     {article.id}-{article.titre}
          //   </Link>
          // </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <Image
                src={article.lienImage}
                width={250}
                height={250}
                alt="technologie"
                className="w-full object-cover"
              />
              <h2 className="card-title">{article.titre}</h2>
              <div className="card-actions justify-end">
                <Link
                  href={`/article/${article.id}`}
                  className="btn btn-primary"
                >
                  Visite l'article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>
        <Link href="/connexion/google">Connectez vous</Link>
      </p>
      <Button />
      <Link className="btn btn-active btn-accent" href="/article/create">
        Ajouter un article
      </Link>
    </>
  );
}
