import React from 'react'

const CaseDescription = () => {
  return (
    <div className="">
      <h2 className="text-[#9D2292] bg-[#FFF0FE]  p-2 text-lg mb-4">
        Centralized E-commerce Platform For Students
      </h2>
      <div className="space-y-10">
        <section>
          <h1>Background</h1>
          <p>
            University campuses are bustling with student entrepreneurs selling
            various products such as books, stationery, tech gadgets, clothes,
            and even food items. However, most students lack a centralized
            platform to advertise and sell their products. Instead, they rely on
            fragmented solutions like social media groups and word of mouth,
            which limit their reach and efficiency. To address this gap, you
            have been approached to design and develop a Centralized E-Commerce
            Platform for Students. This platform should streamline buying and
            selling while catering to the specific needs of students on campus.
          </p>
        </section>

        <section>
          <h1>Scope</h1>
          <ol>
            The platform must:
            <li>Register users as either buyers or sellers.</li>
            <li>Allow sellers to create product listings.</li>
            <li>Enable buyers to browse, search, and purchase products.</li>
            <li>Include a payment gateway for secure transactions.</li>
            <li>
              Provide a dashboard for sellers to track orders and inventory.
            </li>
            <li>Offer features like delivery options and order tracking.</li>
            <li>
              Have a moderation system to ensure compliance with campus
              policies.
            </li>
          </ol>
        </section>

        <section>
          <h1>Suggested Technology Stack</h1>
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
          <h1>Deliverables</h1>
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