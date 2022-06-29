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
                    slug
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

export const getProduct = (slug) => {
    return gql`
    query getProduct {
        post(id: "${slug}", idType: URI) {
          id
          title
          seo {
            metaDesc
            title
          }
          product {
            description
            price
            subtitle
            image {
              sourceUrl(size: LARGE)
            }
          }
        }
    }
    `;
};

export const getProductById = (id) => {
    return gql`
    query getProduct {
        post(id: ${id}, idType: DATABASE_ID) {
          slug
        }
    }
    `;
};
