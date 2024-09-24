import {z} from "zod"

export const signupInput = z.object({
    username1:z.string().email(),
    Password:z.string().min(6),
    name:z.string().optional()
})

export type SignupInput = z.infer<typeof signupInput>


export const signinInput = z.object({
    username:z.string().email(),
    Password:z.string().min(6),
    name:z.string().optional()
})

export type SigninInput = z.infer<typeof signinInput>

export const createBlogInput = z.object({
    title:  z.string(),
    content: z.string(),    
})

export type createBlogInput = z.infer<typeof createBlogInput>

export const updateBlogInput = z.object({
    title:  z.string(),
    content: z.string(),   
    id : z.string()
})

export type updateBlogInput = z.infer<typeof updateBlogInput>