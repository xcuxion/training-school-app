"use server"

import { revalidatePath } from "next/cache"
import { newApplication } from "../application"

export async function cohort_application(state: unknown, formData: FormData) {
    try {
        const data = Object.fromEntries(formData.entries())
        const name = data.name as string
        const school = data.school as string
        const email = data.email as string
        const gender = data.gender as string
        const contact = data.contact as string

        await newApplication({
            name,
            school,
            email,
            gender,
            contact,        
        })
        revalidatePath('/admin')
    } catch (error) {
        console.log(error)
    }
}

export async function portal_login() {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export async function reset_password() {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export async function update_details() {
    try {
        
    } catch (error) {
        console.log(error)
    }
}