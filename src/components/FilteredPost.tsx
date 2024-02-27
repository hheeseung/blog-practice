"use client";
import { Post } from "@/service/posts";
import FilteredPostCard from "./FilteredPostCard";
import Categories from "./Categories";
import { useState } from "react";

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "All Posts";

export default function FilteredPost({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);

  const filter =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="flex mb-3 p-2">
      <FilteredPostCard posts={filter} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        setSelected={setSelected}
      />
    </section>
  );
}
