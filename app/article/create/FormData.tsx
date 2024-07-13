"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function Ajouter({}: Props) {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Crée un objet FormData à partir du formulaire soumis
    const formData = new FormData(e.currentTarget);

    // Convertit FormData en un objet JavaScript ordinaire
    const data = Object.fromEntries(formData.entries());

    // Ajout d'un article via une requête POST
    fetch("http://localhost:4000/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000), // Génère un ID aléatoire pour l'article
        titre: data.titre, // Récupère le titre du formulaire
        contenu: data.contenu, // Récupère le contenu du formulaire
        auteur: data.auteur, // Récupère l'auteur du formulaire
        date: new Date(), // Ajoute la date actuelle
      }),
    }).then(() => {
      router.refresh(); // Rafraîchit la page
      router.push("/"); // Redirige vers la page d'accueil
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="titre">Ajouter un article</h1>
        <div className="form-group">
          <label htmlFor="titre">Titre</label>
          <input type="text" name="titre" id="titre" />
        </div>
        <div className="form-group">
          <label htmlFor="contenu">Contenu</label>
          <textarea name="contenu" id="contenu" cols={30} rows={10}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="auteur">Auteur</label>
          <input type="text" name="auteur" id="auteur" />
        </div>
        <div>
          <button type="submit" className="btn">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}
