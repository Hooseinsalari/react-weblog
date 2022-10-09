import { gql } from "@apollo/client";

const GET_POSTS_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      slug
      id
      title
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      avatar {
        url
      }
      id
      name
      slug
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: {slug: $slug}) {
      avatar {
        url
      }
      id
      name
      position
      slug
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        slug
        title
        id
      }
    }
  }
`;

export { GET_POSTS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO };
