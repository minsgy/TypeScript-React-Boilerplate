import axios from "axios";
import { Post } from "../interface";
import Link from "next/link";

export const getServerSideProps = async () => {
  const { data: posts } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );

  return {
    props: { posts },
  };
};

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  return (
    <>
      <div>Home</div>
      <ul>
        {posts.map((post) => (
          <Link
            href="/posts/[id]"
            as={`/posts/${post.id}`}
            key={post.id}
            passHref
          >
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;
