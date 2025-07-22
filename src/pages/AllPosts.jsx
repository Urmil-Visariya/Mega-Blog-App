import React,{useState,useEffect} from 'react'
import databaseService from '../appwrite/database'
import { Container,PostCard } from '../components'

function AllPosts() {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        databaseService.getPosts().then((posts) => {
            if(posts) {
                setPosts(posts.documents)
            }
        })
    },[])
  return (
    <div className='w-full py-8'>
        <div className="w-11/12">
        <Container>
            <div className='flex flex-wrap justify-center'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/3'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
        </div>
    </div>
  )
}

export default AllPosts