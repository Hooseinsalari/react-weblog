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

export { GET_POSTS_INFO };
