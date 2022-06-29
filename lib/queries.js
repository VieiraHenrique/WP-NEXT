import { gql } from "@apollo/client";

export const getPages = gql`
    query getPages {
        pages {
            edges {
                node {
                    id
                    title
                    seo {
                        metaDesc
                        title
                    }
                    slug
                }
            }
        }
    }
`;

export const getPage = (slug) => {
    return gql`
    query getPage {
        page(id: "${slug}", idType: URI) {
            id
            slug
            title
            seo {
                metaKeywords
                metaDesc
                title
              }
        }
    }
`;
};

export const getProducts = gql`
    query getProducts {
        posts {
            edges {
                node {
                    id
                    title
                    seo {
                        title
                        metaDesc
                    }
                    product {
                        description
                        price
                        subtitle
                        image {
                            mediaItemUrl
                        }
                    }
                }
            }
        }
    }
`;
