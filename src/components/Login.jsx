import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router'
import { login as storeLogin } from '../store/authSlice'
import {Button,Input,Logo} from './index'
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {register,handleSubmit} = useForm();
    const [error,setError] = useState("");

    const login = async(data) =>{
        setError("");
        try {
           const session = await authService.login(data) 
           if(session) {
            const userData = await authService.getCurrentUser();
            console.log("User Data: ",userData);

            if(userData){
                dispatch(storeLogin({userData}))
                navigate('/')
            }
           }
        } catch (error) {
            console.error("Appwrite login error:", error); 
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full text-start mt-3 mb-3'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                    <Input
                    label="Email: "
                    placeholder = "Enter your email"
                    type = "email"
                    {...register('email',{
                        required:true,
                        validate:{
                            matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                        }
                    })}
                    >
                    </Input>
                    <Input
                    label="Password"
                    type='password'
                    placeholder='Enter your password'
                    {...register('password',{required:true,})}
                    >    
                    </Input>
                    
                    <Button
                    type='submit'
                    className='w-full'
                    >Sign in</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login