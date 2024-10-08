import { useEffect, useState } from "react";
import axios from "axios";
import { CLOUD_BACKEND_URL } from "../config";

export interface Blog{
    
        "id": string,
        "title": string,
        "content": string,
        "author": {
            "name": string
        }
}

export const  useBlogOnId = ({id}:{id:string}) =>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog>();
    const token = localStorage.getItem('token');
        useEffect(() =>{
            axios.get(`${CLOUD_BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: `${token}` 
                }
            })  
            .then((response) =>{
                setBlogs(response.data);
                console.log("loading"+loading);
                setLoading(false);
            })
        },[id]);
        return {
            loading, 
            blogs
        };
    
    
}

export const UseBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const token = localStorage.getItem('token');
    useEffect(() =>{
        axios.get(`${CLOUD_BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `${token}` 
            }
        })  
        .then((response) =>{
            setBlogs(response.data);
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        })
    },[]);

    return {
        loading, blogs
    };
}

