import { NextResponse } from "next/server"

type RouteParams = {
    params:{
        id:string
    }
}

const getOneArticle = async (id:string) => {
    const response = await fetch(`http://localhost:4000/articles/${id}`);
    const data = await response.json();
    return data;
  };

export async function GET(req:Request, {params}:RouteParams){

    const data = await getOneArticle(params.id)
    console.log(params.id); 
     return NextResponse.json({message:"donneees recupere avec succees",data})
    
    
}