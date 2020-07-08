// paragraphHelpers.js
import React from "react"
import "./paragraph.css"
import { ParagraphText } from "./text"
import { ParagraphCode } from "./codeSnippet"
import { ParagraphImage } from "./image"

const components = {
    paragraph__text: ParagraphText,
    paragraph__image: ParagraphImage,
    paragraph__code_snippet: ParagraphCode,
};

const getParagraph = node => {
    if (components.hasOwnProperty(node.type)) {
        const ParagraphComponent = components[node.type];
        if (ParagraphComponent) {
            return <ParagraphComponent key={node.id} node={node} />;
        }
    }
    return <p key={node.id}>Unknown type {node.__typename}</p>;
};

export default getParagraph;