const Post = ({title, body}) => {
    return (
        <li className='posts_post'>
           <div className="wrapper">
               <h3 className='title'>{title}</h3>
               <p className='preview'>{body}</p>
           </div>
        </li>
    )
}

export default Post