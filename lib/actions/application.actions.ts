"use server"

import { revalidatePath } from "next/cache"
import { newApplication } from "../application"
import { handleError } from "../utils"

export async function cohort_application(state: any, formData: FormData) {
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
        revalidatePath('/tw/admin')
    } catch (error) {
        handleError(error)
    }
}

export async function portal_login() {
    try {
        
    } catch (error) {
        handleError(error)
    }
}

export async function reset_password() {
    try {
        
    } catch (error) {
        handleError(error)
    }
}

export async function update_details() {
    try {
        
    } catch (error) {
        handleError(error)
    }
}