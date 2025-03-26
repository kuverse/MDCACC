import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import styles from "./blogs.module.css";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const POSTS_QUERY = `*[
    _type == "post" && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    publishedAt,
    image
  }`;
  
  const builder = imageUrlBuilder(client);
  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }
const options = { next: { revalidate: 30 } };

export default async function BlogPosts() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Blog Posts</h1>
        <ul>
        {posts.map((post) => (
  <li key={post._id} className={styles.postItem}>
    <Link href={`/blogs/${post.slug.current}`}>
      <div>
        {post.image && (
          <div className={styles.imageWrapper2}>
            <Image
              src={urlFor(post.image).width(768).height(732).url()}
              alt={post.title}
              className={styles.postImage2}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p className={styles.postDate}>
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </Link>
  </li>
))}



        </ul>
      </div>
    </main>
  );
}
