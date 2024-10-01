import {Link} from "react-router-dom"
import { ChangeEvent, useState } from 'react';
import { SigninInput } from "../zod1";
import axios from "axios"; 
import { CLOUD_BACKEND_URL} from "../config";  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Auth({type} : {type: 'signup'|'signin'}) {
    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState <SigninInput>({
        name:"",
        username:"",
        Password:""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${CLOUD_BACKEND_URL}/api/v1/user/${type === 'signup' ?'signup':'signin'}`, postInputs)
            const jwt  = response.data.data;
            console.log("test here",JSON.stringify(response));
            console.log("jwt"+jwt);
            localStorage.setItem('token', jwt)
            navigate('/blogs')
        }catch{
            toast.error('something went wrong with your request')
        }
        
    }
    return ( 
    <div className=  "h-screen flex justify-center flex-col">
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
        <div className="flex justify-center">
            <div >
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        {type === 'signin'?'Login to your account':'Create an account'}
                    </div>
                    <div className="text-xl text-slate-400">
                        {type === 'signin'?"Don't have an account?":'Already have an account?' }
                        <Link className = "pl-2 underline" to= {type === 'signin'?'/signup':'/signin'}>{type ==='signin'?'Signup':'Login'}</Link>
                    </div>
                </div>
                <div className="pt-4">
                    {type === 'signup' ? <LabelledInput label = "Name" placeholder="username"  onChange={(e) =>{
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value,
                    })
                    }}/> : null}
                    <LabelledInput label = "Username" placeholder="email"  onChange={(e) =>{
                    setPostInputs({
                        ...postInputs,
                        username: e.target.value,
                    })
                    }}/>
                    <LabelledInput label ="password"  type = {"Password"} placeholder="password"  onChange={(e) =>{
                        setPostInputs({
                            ...postInputs,
                            Password: e.target.value,
                        })
                    }}/>

                    <button onClick={sendRequest} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === 'signup'? 'Sign Up':'Sign in'}</button>
                </div>
            </div>    
        </div>
    </div> 
    );
}

interface LabelledInputType{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>) => void;
    type?:string
}

function LabelledInput({label ,type , placeholder, onChange}:LabelledInputType) {
    return ( 
    <div>
        <label  className="block mb-2 text-sm font-semibold text-black pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder = {placeholder} required />
    </div> 
    );
}


export default Auth;