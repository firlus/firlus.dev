import fs from "fs";

export const getAllPosts = () =>
  fs
    .readdirSync("./posts")
    .map((filename) => `/blog/post/${filename.replace(".md", "")}`);

export const getAllTags = () =>
  getAllPosts
    .map(
      matter((postName) => fs.readFileSync(`posts/${postName}.md`).toString())
        .data.tags
    )
    .flatten();
