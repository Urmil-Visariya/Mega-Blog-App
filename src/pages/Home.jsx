import React, {useEffect, useState} from 'react'
import databaseService from '../appwrite/database'
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        databaseService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold text-white hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
         <div className="w-11/12 mx-auto flex justify-center">
                     <Container>
                <div className='flex flex-wrap justify-center'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/3 '>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
         </div>
        </div>
    )
}

export default Home