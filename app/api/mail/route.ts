import {render} from "@react-email/render"
import { Resend } from "resend";
import XcuxionWelcomeEmail from "@/emails/application-received";

const resend = new Resend(process.env.RESEND_KEY)
//@ts-ignore
export async function POST (request:Request, res: Response) {
    const {email, userFirstname} = await request.json()
    const {data, error} = await resend.emails.send({
        from: "admission@xcuxion.org",
        to: [email],
        subject: "XCuxion Application Received",
        html: await render(XcuxionWelcomeEmail({userFirstname})),
    })
    if (error) {
        return Response.json(error)
    }
    // console.log(data)
    return Response.json({message: "Email sent successfully"})
}