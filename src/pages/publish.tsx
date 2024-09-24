import AppBar from "../components/AppBar";
import axios from "axios";
import { CLOUD_BACKEND_URL } from "../config";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

function PublishBlog() {
    const [title, setTitle] = useState("");
    const [description, setDescription] =useState("");
    const navigate = useNavigate()
    return ( 
        <div >
            <AppBar newBlogBtn={false}/>
            <div className="flex flex-col items-center w-full h-full p-4" >
                {/* title of the blog */}
                <div className="max-w-screen-lg w-full p-3"> 
                    <textarea onChange={(e)=>{
                        setTitle(e.target.value);
                    }}  
                    id="editor" className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"  placeholder="Title of your blog"/>
                </div>
                <div className=" p-4 max-w-screen-lg w-full "> 
                    <BlogBody onChange= {(e) => {
                        setDescription(e.target.value);
                    }}/>
                    <button onClick ={async() =>{
                        const response = await axios.post(`${CLOUD_BACKEND_URL}/api/v1/blog`, {
                            title, 
                            description
                        })
                        navigate(`/blogs/${response.id}`)
                    }} 
                    type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Post comment
                    </button>
                </div>
            </div>
        </div>
     );
}

function BlogBody({onChange}:{onChange : (e:ChangeEvent<HTMLTextAreaElement>) =>void}){
    return (
        <div className="">
                <div className="w-full h-full mb-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="w-full h-4/6 px-4 py-2 bg-white rounded-lg">
                    <textarea onChange={onChange} 
                    id="comment" className="h-[400px] focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0" placeholder="Write a Blog ..." required></textarea>
                    </div>
                </div>
        </div>
    )
}

export default PublishBlog;