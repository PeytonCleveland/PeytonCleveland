import Posts from "../../_posts";

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const post = Posts.find((post) => post.slug === params.slug);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = Posts;
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug.toString(),
        },
      };
    }),
    fallback: false,
  };
}
