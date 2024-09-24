import { Blog } from "../hooks";
import AppBar from "./AppBar";
import { Avatar } from "./AvatarGenerator";


function BlogDetails({blog} :{blog:Blog}) {
    return ( 
    <div>
        <AppBar />
        <div className="">
            {/* blog written by author */}
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl"> 
                <div className="col-span-8 border-r-4 p-4 flex justify-center flex-col">
                    {/* title component */}
                    <div className="text-5xl font-extrabold	"> 
                        {`${blog.title}`}
                    </div>
                    <div className="text-base font-light pt-2">
                        posted on 2nd Dec 2023
                    </div>
                    <div className="text-xl font-light pt-4">
                        {`${blog.content}`}
                    </div>
                </div>
                {/* about author component */}
                <div className="col-span-4">
                    {/* username component */}
                    <div className="text-xl text-slate-600 p-4">
                        Author
                    </div>
                    <div className=" text-lg flex w-full">

                        <div className="pl-2 pr-2 flex flex-col justify-center">      
                            <Avatar name = {`${blog.author.name}`} size='big'/>
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {`${blog.author.name}`} 
                            </div>
                            <div className="pt-2 text-slate-500">
                                randomn catch phrase about authors journey in the Void
                            </div>
                        </div>
                            
                    </div>

                </div>
            </div>
        </div>
    </div>
     );
}

export default BlogDetails;