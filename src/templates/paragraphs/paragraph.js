// import { graphql } from 'gatsby'

export const pageQuery = graphql`
    query($id: String!) {
        page: nodeArticle(id: { eq: $id }) {
            id
            relationships {
                building_blocks: field_building_blocks {
                    type: __typename
                    ...ParagraphText
                    ...ParagraphCode
                    ...ParagraphImage
                }
            }
            title
        }
    }
`;