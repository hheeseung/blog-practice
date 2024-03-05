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

export type PostData = Post & {
  content: string;
  prev: Post | null;
  next: Post | null;
};

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");

  const posts: Post[] = JSON.parse(data);
  return posts.sort((a, b) => {
    const date1 = new Date(a.date).getTime();
    const date2 = new Date(b.date).getTime();
    return date2 - date1;
  });
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
  const posts = await getPosts();
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const currIdx = posts.indexOf(post);
  const prev = currIdx !== 0 ? posts[currIdx - 1] : null;
  const next = currIdx !== posts.length - 1 ? posts[currIdx + 1] : null;
  const content = await fs.readFile(filePath, "utf-8");
  return { ...post, content, prev, next };
}
