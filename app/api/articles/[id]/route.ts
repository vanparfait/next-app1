import { NextResponse } from "next/server";
import { json } from "stream/consumers";

type RouteParams = {
  params: {
    id: string;
  };
};

const getOneArticle = async (id: string) => {
  const response = await fetch(`http://localhost:4000/articles/${id}`);
  const data = await response.json();
  return data;
};

export async function GET(req: Request, { params }: RouteParams) {
  const data = await getOneArticle(params.id);
  console.log(params.id);
  return NextResponse.json({ message: "donneees recupere avec succees", data });
}

//PUT

export async function PUT(req: Request, { params }: RouteParams) {
  const { titre, contenu, auteur } = await req.json();

  const article = await getOneArticle(params.id);

  const newArticle = {
    ...article,
    titre: titre || article.titre,
    contenu: contenu || article.contenu,
    auteur: auteur || article.auteur,
  };

  await fetch(`http://localhost:4000/articles/${params.id}`, {
    method: "PUT",
    body: JSON.stringify(newArticle),
    headers: { "content-Type": "application/json" },
  });

  return NextResponse.json({
    message: "donnees modifie avec succes",
    data: newArticle,
  });
}

//DELETE
export async function DELETE(req: Request, { params }: RouteParams) {
  const { titre, contenu, auteur } = await req.json();

  //   const article = await getOneArticle(params.id);

  //   if (!article) NextResponse.json({ message: "cet id n'existe pas" });

  await fetch(`http://localhost:4000/articles/${params.id}`, {
    method: "DELETE",
  });

  return NextResponse.json({
    message: `donnees de l'id ${params.id} supprime avec succes`,
  });
}
