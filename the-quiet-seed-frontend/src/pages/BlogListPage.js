import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import axios from 'axios';

const BlogListPage = () => {
  const [posts, setPosts] = useState([]);

  // APIから記事を取得
  useEffect(() => {
    axios.get('http://localhost:8080/api/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-8 bg-purple-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">🌿 Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
