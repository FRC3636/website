import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/Simple.tsx";

interface Props {}

const Page: React.FC<Props> = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <div className="prose dark:prose-dark lg:prose-xl dark:lg:prose-xl-dark max-w-prose py-32 m-4 sm:m-auto">
        <h1>{post.frontmatter.title}</h1>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default Page;
