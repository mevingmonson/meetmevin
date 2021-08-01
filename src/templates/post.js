import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from './../components/Layout';
import { Disqus } from 'gatsby-plugin-disqus'

const StyledPostDate = styled.time`
  color: #999;
  font-weight: 400;
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: right;
`;

const PostTemplate = ({ data }) => {

  const { frontmatter, body } = data.mdx;

  return (
    <Layout>
      {frontmatter.title && (
        <Helmet>
          <title>Rounak Vyas | {frontmatter.title}</title>
        </Helmet>
      )}
      {frontmatter.title && (
        <Helmet>
          <meta property="og:title" content={frontmatter.title} />
          <meta name="twitter:title" content={frontmatter.title} />
        </Helmet>
      )}
      {frontmatter.excerpt && (
        <Helmet>
          <meta property="og:description" content={frontmatter.excerpt} />
          <meta name="twitter:description" content={frontmatter.excerpt} />
        </Helmet>
      )}
      <h1>{frontmatter.title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      <StyledPostDate>{frontmatter.date}</StyledPostDate>
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        excerpt
      }
      body
    }
  }
`;
