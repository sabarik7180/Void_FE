import BlogDetails from "../components/DetailBlog";
import { useBlogOnId } from "../hooks";
import { useParams} from 'react-router-dom';

function BlogDescription() {
    const{id} =  useParams<{ id: string }>();
    const {loading, blogs} = useBlogOnId({
        id : id || "",
    })
    
    
    if (loading) {
        <div>
            loading....
        </div>
    }
    return ( 
        <div className="">
            <div>
                {blogs?<BlogDetails blog= {blogs}/>:"....."}
            </div>
        </div> 
    );
}

export default BlogDescription;