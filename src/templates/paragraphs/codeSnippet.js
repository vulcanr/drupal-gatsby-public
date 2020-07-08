import React from "react";
import { graphql } from "gatsby";
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'


export const ParagraphCode = ({ node }) => (
    <div className={`building-block building-block--code-snippet`}>
        <Highlight {...defaultProps} code={node.code_snippet} language={node.field_p_code_type}theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
                {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                    <line style={{ width: `2rem`, height: `1.5rem`, display: `inline-block` }}>{i + 1}</line>
                    {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
                    </div>
                ))}
            </pre>

        )}
        </Highlight>
    </div>
);

export const fragment = graphql`
    fragment ParagraphCode on paragraph__code_snippet {
        id
        code_snippet: field_p_code_snippet
        field_p_code_type
    }
`;