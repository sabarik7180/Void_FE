import { Link } from "react-router-dom";
import { Avatar } from "./AvatarGenerator"
interface BlogCardProps{
        authorName: string,
        title: string,
        content: string,
        publishedDate: string, 
        id:string,
    }

 

function BlogCard({id, authorName, title, content, publishedDate}: BlogCardProps) {
    return (
    <Link to={`/blogs/${id}`}>
    <div className="p-4 border-b-2 w-full border-slate-300 pb-4 max-screen-lg cursor-pointer ">
        <div className="flex">
            <Avatar size ='small' name={authorName}/> 
            <div className="text-slate-700 pl-2 text-sm flex justify-center flex-col">{authorName} </div>
            <div className="flex justify-center flex-col pl-1"> 
                <Circle />    
             </div>
            <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col"> {publishedDate} </div>
        </div>
        <div className="text-2xl font-semibold pt-2">
            {title}
        </div>
        <div className="font-thin text-md">
            {content.length>100 ? content.slice(0,100)+ " ....." : content.slice(0,content.length)}
        </div>
        <div className="text-slate-400 text-xs font-thin pt-4">
            {`${Math.ceil(content.length/100)} minute Read`}
        </div>
    </div> 
    </Link>
    );
}

function Circle (){
    return (
        <div className="w-1 h-1 rounded-full bg-slate-500">

        </div>
    )
}

export default BlogCard