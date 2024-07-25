/* eslint-disable no-shadow */
/* eslint-disable react-hooks/rules-of-hooks */
import "../styles/newsOverview.css";
import "../styles/globals.css";
import { useLoaderData } from "react-router-dom";
import CardNews from "../components/CardNews";
import Footer from "../components/Footer";

export default function newsOverview() {
  // TODO : Map articles using this object
  const articles = useLoaderData();

  return (
    <>
      <main className="container cardNews">
        <h1 className="titreActu">NOS ACTUALITÉS</h1>
        <p className="pActu">fil-ariane</p>
        {articles.map((articles) => (
          <CardNews
            key={articles.id}
            title={articles.title}
            content={articles.content}
            date={articles.publication_date}
            imageUrl={articles.imageUrl}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
