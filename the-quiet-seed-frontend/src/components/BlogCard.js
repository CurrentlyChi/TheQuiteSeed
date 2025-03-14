const BlogCard = ({ post }) => (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p>{post.content}</p>
      <span className="text-sm text-purple-500">{post.category}</span>
    </div>
  );
  
  export default BlogCard;
  