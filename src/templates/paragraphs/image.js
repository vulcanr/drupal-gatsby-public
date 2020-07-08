import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

export const ParagraphImage = ({ node }) => (
    <div className= {`building-block building-block--image`}>
        <Img fluid={ node.relationships.images.relationships.field_media_image.localFile.childImageSharp.fluid } />        
        { node.field_p_image_credit != '' ? 
        <p>{ node.field_p_image_credit }</p>
        : ''}
    </div>
);

export const fragment = graphql`
    fragment ParagraphImage on paragraph__image {
        id
        field_p_image_credit
        relationships {
            images: field_p_image {
                id
                relationships {
                    field_media_image {
                        localFile {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;