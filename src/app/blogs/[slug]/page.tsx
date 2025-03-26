import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import styles from "../blogs.module.css";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(410).url()
    : null;

  return (
    <main className={styles.container}>
      <Link href="/blogs" className={styles.backLink}>
        ← Back to posts
      </Link>

      {postImageUrl && (
        <div className={styles.imageWrapper}>
            <Image
            src={postImageUrl}
            alt={post.title}
            className={styles.postImage}
            fill
            />
        </div>
        )}

      <h1 className={styles.title}>{post.title}</h1>

      <p className={styles.meta}>
        Published: {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      <div className={styles.body}>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}
