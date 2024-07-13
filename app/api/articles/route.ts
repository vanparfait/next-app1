import { NextRequest, NextResponse } from "next/server"

const getData = async () => {

    const response = await fetch("http://localhost:4000/articles")
    const data = await response.json()
    return data

}


// GET
export async function GET(req:Request) {

    const data = await getData()
       
    
    return NextResponse.json({message:"donnees recupere avec succes",data})
}

// POST


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { titre, contenu, auteur } = body;

    // Validation des champs requis
    if (!titre || !contenu || !auteur) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulons l'ajout d'un article
    const newArticle = {
      id: Math.floor(Math.random() * 1000),
      titre,
      contenu,
      auteur,
      date: new Date().toISOString(),
    };

   await fetch("http://localhost:4000/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newArticle),
      });
      

    // Retourner l'article ajouté avec un statut 201
    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    return NextResponse.json(
      { message: "Invalid JSON format" },
      { status: 400 }
    );
  }
}
