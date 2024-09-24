import AppBar from "../components/AppBar";
import BlogCard from "../components/blogComponent";
import {UseBlogs} from "../hooks";
function Blog() {
    const {loading,blogs} =UseBlogs();

    if (loading) {
        return <div>
            loading ......
        </div>
    }

    return ( 
        <div>
            <AppBar />
                <div className="flex justify-center">
                    <div className="w-4/6"> 
                    {blogs.map(blog => <BlogCard 
                    id={blog.id}
                    authorName={blog.author.name || 'anonymous'} 
                    title= {blog.title}
                    content = {blog.content}
                    publishedDate = {'23rd jan 2024'}
                    />)}
                </div>
            </div>
        </div>
     );
}

export default Blog;