import { metadata } from "./../app/layout";
import path from "path";
import { promises as fs, readFile } from "fs";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string };

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((item) => item.featured);
}

export async function getNonfeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((item) => !item.featured);
}

export async function getPostDetails(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const metadata = await getPosts() //
    .then((posts) => posts.find((post) => post.path === fileName));
  if (!metadata)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  const content = await fs.readFile(filePath, "utf-8");
  return { ...metadata, content };
}
