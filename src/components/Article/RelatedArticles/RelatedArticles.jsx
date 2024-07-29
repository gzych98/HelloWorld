import React from 'react';
import './styles_related_articles.css';

const RelatedArticles = ({ articles }) => (
    <div className="related-articles">
        <h2>Może Cię zainteresować</h2>
        <ul>
            {articles.map(article => (
                <li key={article.id}>
                    <a href={article.link}>{article.title}</a>
                </li>
            ))}
        </ul>
    </div>
);

export default RelatedArticles;
