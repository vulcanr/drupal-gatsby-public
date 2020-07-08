// TextParagraph.js
import React from "react";
import { graphql } from "gatsby";

export const ParagraphText = ({ node }) => (
    <div className= {`building-block building-block--text`}>
        <div dangerouslySetInnerHTML={{ __html: node.text.value }} />
    </div>
);

export const fragment = graphql`
    fragment ParagraphText on paragraph__text {
        id
        text: field_p_text {
            format
            processed
            value
        }
    }
`;