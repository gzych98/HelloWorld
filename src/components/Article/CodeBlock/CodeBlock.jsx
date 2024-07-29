import React, { useState } from 'react';
import './styles_code_block.css';

const copyToClipboard = (code, setCopied) => {
    navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
        alert('Wystąpił błąd podczas kopiowania kodu');
    });
};

const CodeBlock = ({ code }) => {
    const [copied, setCopied] = useState(false);

    return (
        <div className="code-block" onClick={() => copyToClipboard(code, setCopied)}>
            <pre>{code}</pre>
            <div className="copy-hint">{copied ? "Skopiowano" : "Kliknij żeby skopiować"}</div>
        </div>
    );
};

export default CodeBlock;
