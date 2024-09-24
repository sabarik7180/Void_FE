import { Avatar } from "./AvatarGenerator";
import { Link } from "react-router-dom";

function AppBar({ username = 'Sabari Krishnan', newBlogBtn = true }: { username?: string; newBlogBtn?: boolean })  {
    return ( 
    <div className="border-b flex justify-between px-10 py-4">
        <Link to = {'/blogs'}>
            <div className="flex flex-col text-3xl justify-center cursor-pointer">
                Void
            </div>
        </Link>
        <div className="flex">
            {newBlogBtn?<div className="px-4">
                <Link to='/publish'>
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create New Blog</button>
                </Link>
            </div>:<div className="px-4">
                <Link to='/blogs'>
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Go Back</button>
                </Link>
            </div>}
            <Avatar size ="big" name={`${username}`}/>
        </div>
    </div> );
}

export default AppBar;