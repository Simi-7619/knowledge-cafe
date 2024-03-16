
import PropTypes from 'prop-types'
const Blog = ({blog}) =>{
    const {title, author, author_img, cover_img, post_date, reading_time, hashtags } = blog;

    return(
        <div className='border-b-2 mt-12 pb-5'>
            <img src={cover_img} alt="" />
            <div className='flex justify-between'>
                {/* author img area */}
                <div  className='flex  gap-3 my-5'>
                  <img src={author_img} className='rounded-full w-[50px]' alt="" />  
                  <div>
                    <h4 className='xl font-bold '>{author}</h4>
                    <p className='text-gray-500 text-sm font-medium'>{post_date}</p>
                  </div>
                </div>

                {/* reading time area */}
                <div className='flex items-center'>
                  <p className='text-gray-500 font-medium'>{reading_time} min read</p>
                  <button><img src="../../../images/bookmark.svg" alt="" /></button>
                </div>
            </div>
            <h1 className='text-3xl font-bold text-black'>{title}</h1>

            <br />
            <p className='text-gray-500 font-medium'>{hashtags} min read</p>
            <button className='text-pink-500 font-medium underline'>Mark As Read</button>

        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object 
}

export default Blog