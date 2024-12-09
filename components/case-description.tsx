import React from 'react'

export interface ICaseDescription {
  title: string
  coverImage: string
  problemStatement: string
  requirements: string[]
}



const CaseDescription = ({title, coverImage, problemStatement, requirements}: ICaseDescription) => {
  return (
    <div className="">

      <h2 className="text-[#9D2292] bg-[#FFF0FE]  p-2 text-lg mb-4">
        {title}
      </h2>
      <div className="space-y-10">
        <section>
          <h3 className=''>Background</h3>
          <p>
            {problemStatement}
          </p>
        </section>

        <section>
          <h3 className=''>Scope</h3>
          <ol className='list-disc'>
            You are required to:
            <span className="pl-4">
              {
                requirements.map((task, index)=>(
                  <li key={index}>{task}</li>
                ))
              }
            </span>
          </ol>
        </section>

        <section>
          <h3 className=''>Suggested Technology Stack</h3>
          <ul>
            <li>Frontend: React.js (with TailwindCSS for styling).</li>
            <li>Backend: Node.js with Express.js.</li>
            <li>Database: MongoDB for product and user data.</li>
            <li>Payment Gateway: Paystack or Stripe.</li>
            <li>
              Hosting: Vercel for frontend, AWS EC2 for backend, MongoDB Atlas
              for database.
            </li>
            <li>Version Control: GitHub.</li>
          </ul>
        </section>

        <section>
          <h3 className=''>Deliverables</h3>
          <ol>
            Students working on this case study must produce the following:
            <li>
              Systems Analysis Documents
              <ul>
                <li>Business Requirements Document (BRD).</li>
                <li>Use Case Diagram.</li>
                <li>Data Flow Diagram (DFD).</li>
                <li>Entity-Relationship Diagram (ERD).</li>
              </ul>
            </li>
            <li>
              Design Documents
              <ul>
                <li>
                  Wireframes or Mockups for key screens (e.g., homepage, product
                  listing, checkout).
                </li>
                <li>Database Schema Design.</li>
                <li>System Architecture Diagram.</li>
              </ul>
            </li>
          </ol>
        </section>
      </div>
      </div>
  )
}

export default CaseDescription