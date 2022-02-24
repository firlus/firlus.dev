import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import { getAllPosts } from "../../../common/blog";

export default function Post({ data, html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}

export const getStaticPaths = async () => {
  return {
    paths: getAllPosts((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdown = fs.readFileSync(`posts/${slug}.md`).toString();
  const blogData = matter(markdown);
  const html = marked(blogData.content);
  return {
    props: {
      data: blogData.data,
      html: html,
    },
  };
};
