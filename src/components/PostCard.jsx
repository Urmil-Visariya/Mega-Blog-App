import React from 'react'
import storageService from '../appwrite/storage'
import { Link } from 'react-router'

function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full h-[333px] bg-gray-100 rounded-xl p-4'>
            <div className=' w-full h-[60%] justify-center mb-4'>
                <img src={storageService.getFilePreview(featuredImage).replace("preview", "view") + "&mode=admin"} 
                alt={title} 
                className='rounded-xl h-full w-full'/>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard