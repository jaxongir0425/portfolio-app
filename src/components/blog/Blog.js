import React from 'react';
import "./BlogStyle.css";
import allBlogs from "./items/allBlogs";
import Title from "../Title";

function Blog() {
    return (
        <>
            <div className="b-title">
                <Title title={"Recent Blogs"} span={"Recent Blogs"}/>
            </div>
            <div className="BlogPage">
                {
                    allBlogs.map((blog) => {
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt="Image"/>
                                <a href={blog.link} target={"_blank"} className="blog-link">{blog.title}</a>
                            </div>
                        </div>
                    })
                }
            </div>

        </>
    );
}

export default Blog;