import { useEffect } from "react"
import { useState } from "react"
import Blog from "./components/blog/blog"

const Blogs = () =>{
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))

    }, [])

    return(
        <div>
            <h1 className="text-xl">TotalBlogs: <b>{blogs.length}</b></h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            
        </div>
    )
}

export default Blogs;