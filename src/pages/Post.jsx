import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router'
import databaseService from "../appwrite/database";
import storageService from "../appwrite/storage";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            databaseService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        databaseService.deletePost(post.$id).then((status) => {
            if (status) {
                storageService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="posting py-8  flex justify-center ">
            <div className="w-1/2  shadow-[0_0_19px_rgba(0,0,0,0.9)] bg-gray-950
 shadow-blue-600 p-4">
            <Container>
                <div className="w-full mb-4 relative border rounded-xl p-7">
                    <img
                        src={storageService.getFilePreview(post.featuredImage).replace("preview", "view") + "&mode=admin"}
                        alt={post.title}
                        className="rounded-xl w-full"
                    />

                </div>
                <div className="w-full mb-2 pl-3 text-white text-start">
                    <h1 className="text-2xl  font-bold">{post.title}</h1>
                </div>
                <div className="text-white pl-3 mb-6 text-start">
                    {parse(post.content)}
                    </div>
                  {isAuthor && (
                        <div className=" text-white w-full flex justify-end">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
            </Container>
            </div>
        </div>
    ) : null;
}