import React, { useEffect, useState } from "react";
import "./Blog.css";
import BlogCard from "../../components/BlogCard/BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err.message("Có lỗi")));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="blogs" className="blogs">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Our Blog</h4>
        </div>
        <div className="row mt-5">
          {blogs &&
            blogs.length > 0 &&
            blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
        </div>
      </div>
    </section>
  );
};

export default Blog;
