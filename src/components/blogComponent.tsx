import { Link } from "react-router-dom";
import { Avatar } from "./AvatarGenerator"


interface BlogCardPropsWithLoadingStatus{
    authorName: string,
        title: string,
        content: string,
        publishedDate: string, 
        id:string,
        loading:boolean,
}

function BlogCard({id, authorName, title, content, publishedDate , loading}: BlogCardPropsWithLoadingStatus) {
    
    return (
<>
            {loading ? 
             <div className="flex justify-center w-full border-b-4">
             <div role="status" className="flex flex-col w-full animate-pulse mt-4">
                 <div className="flex flex-row mt-2 w-full mb-3">
                   <div className="w-7 h-7 bg-gray-200 rounded-full dark:bg-gray-700 mr-2"></div>
                  <div className=" h-3 w-60 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                 </div>
                 <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-3 max-w-96"></div>
                 <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                 <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[180px] mb-2.5"></div>
                 <span className="sr-only">Loading...</span>
             </div>
       </div> :
       <>
       <Link to={`/blogs/${id}`}>
           <div className="p-4 border-b-2 w-full border-slate-300 pb-4 max-screen-lg cursor-pointer">
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
            {content.length>100 ? content.slice(0,100)+ "....." : content.slice(0,content.length)}
        </div>
        <div className="text-slate-400 text-xs font-thin pt-4">
            {`${Math.ceil(content.length/100)} minute Read`}
        </div>
    </div>
    </Link>
       </>
        }
       </>
    );
}

function Circle (){
    return (
        <div className="w-1 h-1 rounded-full bg-slate-500">

        </div>
    )
}

export default BlogCard