function importAll(r) {
  return r.keys().map((fileName) => {
    const post = r(fileName)

    return {
      link: `/blog${fileName.substr(1).replace(/\.mdx$/, "")}`,
      module: post,
      timestamp: new Date(post.meta.date),
      date: post.meta.date
    }
  });
}

export const posts = importAll(
  require.context("../pages/blog/", true, /\.mdx$/)
);


