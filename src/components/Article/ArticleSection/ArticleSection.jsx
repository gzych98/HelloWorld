import React from 'react';
import { Element } from 'react-scroll';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/components/Article/CodeBlock/CodeBlock'
import Quiz from '../Quiz/Quiz';

const ArticleSection = ({ section, markdownContent, quizQuestions }) => (
    <Element name={section.id} id={section.id}>
        <ReactMarkdown
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                        <CodeBlock code={String(children).replace(/\n$/, '')} />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
        >
            {markdownContent[section.id]}
        </ReactMarkdown>
        {section.id === 'conclusion' && <Quiz questions={quizQuestions} />}
    </Element>
);

export default ArticleSection;
