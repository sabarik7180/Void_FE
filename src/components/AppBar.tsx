import { Link } from "react-router-dom";
import {jwtDecode,JwtPayload}  from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import AvatarWithDropDown from './DropDown'

// Extend the JwtPayload interface to include the 'name' property
interface CustomJwtPayload extends JwtPayload {
    id?: string;
    name?: string; 
  }

function AppBar({ newBlogBtn = true }: { newBlogBtn?: boolean })  {
    
    const token = localStorage.getItem('token');
    let userDetails : CustomJwtPayload | null = null;
    if(token) {
     try{
        userDetails =  jwtDecode<CustomJwtPayload>(token) as CustomJwtPayload;
        console.log(userDetails)
     } catch {
        toast.error('Invalid Token')
     }  
    
    }
    else{
        toast.info('Invalid Way to Login')
    }    
    return ( 
        <div>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
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
                    <AvatarWithDropDown  userName={`${userDetails?.name || 'Guest'}`}/>
                </div>
            </div>
        </div>
     );
}

export default AppBar;