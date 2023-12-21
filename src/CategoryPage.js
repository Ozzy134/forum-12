import React from 'react';
import { useParams } from 'react-router-dom';
import Artikles from './Artikles';
import ArtikalsList from "./ArtikalsList";

const CategoryPage = () => {
    const { category } = useParams();

    const articles = categories

    const filteredArticles = articles.filter((article) => article.category === category);

    return (
        <div>
            <h1>{category} Articles</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {filteredArticles.map((article, index) => (
                    <Article key={index} {...article} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
