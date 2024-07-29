import React from 'react';

const ArticleHeader = ({ date, title, coverImage }) => (
    <div>
        <div className="article-cover-container">
            <img src={coverImage} alt="Article Cover" className="article-cover" />
            <div className="cover-text">wygenerowano przy pomocy sztucznej inteligencji</div>
        </div>
        <header className="article-header">
            <p className="date">{date}</p>
            <h1 className="title">{title}</h1>
        </header>
    </div>
);

export default ArticleHeader;
