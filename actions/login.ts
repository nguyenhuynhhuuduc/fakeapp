'use server';

import { db } from "@/db";
import { LoginSchema } from "@/shcemas";
import { z } from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const { email, password } = values;

    console.log(values)
    try {
        const user = await db.user.create({
            data: {
                email: email,
                password: password
            },
        })
        return { error: "Your account is not found in our system!! Please login again!!!" }
    } catch (error) {
        return { error: "Something went wrong!" }
    }
}