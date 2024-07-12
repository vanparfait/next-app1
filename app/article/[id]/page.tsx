import { PropsArticle } from "@/app/page";
import { log } from "console";
import Link from "next/link";
import React from "react";

type Props = {
  params: {
    id: number;
  };
};

const page = async ({ params }: Props) => {
  const getArticles = async (id: number) => {
    const response = await fetch(`http://localhost:4000/articles/${id}`);
    const data = await response.json();
    return data;
  };
  const articles = await getArticles(params.id);

  //console.log(articles);

  return (
    <>
      <div className="container">
        <h1 className="titre">{articles.titre}</h1>
        <p className="bg-cyan-400">{articles.contenu}</p>
        <div className="mt-3">
          <span>{articles.auteur}</span>
        </div>
      </div>

      <div className="text-center inline-block mt-3 bg-orange-300">
        <Link href="/">Retour a la page d'accuei</Link>
      </div>
    </>
  );
};

export default page;
