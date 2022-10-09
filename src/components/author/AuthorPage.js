import React from "react";
import { useParams } from "react-router-dom";

// GraphQl
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";

const AuthorPage = () => {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  console.log(data);

  if (loading) return <h3>loading</h3>;

  if (errors) return <h3>errors</h3>;

  return <div>AuthorPage</div>;
};

export default AuthorPage;
