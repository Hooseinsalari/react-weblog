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

const GET_AUTHOR_INFO = gql`
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

export { GET_POSTS_INFO, GET_AUTHOR_INFO };
