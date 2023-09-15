
import PropTypes from 'prop-types'; 
const Blog = ( {blog} ) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-96' src={cover}/>
            <div className='flex justify-between'>
                <div className='flex p-2'>
            <img className='w-14' src={author_img} alt="" />
            <div className='ml-4'>
                <h3 className='text-xl'>{author}</h3>
                <p>{posted_date}</p>
            </div>
                </div>
                <div>
            <span>{reading_time} min red</span>
                </div>
            </div>
            <h2 className='text-2xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}> <a href=''>{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;