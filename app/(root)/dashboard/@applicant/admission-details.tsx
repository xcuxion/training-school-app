import { IApplicant } from "@/store/applicant-store";

const AdmissionDetails = ({ applicant }: { applicant: IApplicant }) => {
  const feeStructure = {
    full: {
      label: "Tuition-free",
      enrollment: 100,
      souvenir: 147,
      getTogether: 48,
      tuition: 0,
    },
    student: {
      label: "Student-offer",
      enrollment: 100,
      souvenir: 147,
      getTogether: 48,
      tuition: 400,
    },
    nonStudent: {
      label: "Standard enrollment",
      enrollment: 100,
      souvenir: 147,
      getTogether: 0,
      tuition: 1248,
    },
  };

  const admissionType = applicant?.admissionType as
    | "full"
    | "student"
    | "nonStudent";
  const fees = feeStructure[admissionType] || {};

  return (
    <div className="p-6 bg-secondary rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-wite">
        Congratulations {applicant?.fname}, You have been admitted! 🎉
      </h1>
      <p className="text-gray-300 mt-2">
        We are honored to receive you into XCUXION School of Techpreneurship and
        Engineering Batch'25 training program. With you joining our{" "}
        {applicant?.track === "web"
          ? "Web Development"
          : applicant?.track === "mobile"
            ? "Mobile App Development"
            : applicant?.track === "dataanalysis"
              ? "Data Analysis"
              : applicant?.track === "backend"
                ? "Backend Engineering"
                : ""}{" "}
        track, you will gain immersive knowledge in the field to create your own
        innovative solutions.
      </p>
      <p className="text-gray-200 mt-4">
        You were admitted on a{" "}
        <span className="font-semibold">{fees.label}</span> basis.
      </p>

      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-black">
            <th className="border text-start p-2">Item</th>
            <th className="border p-2">Cost (GHS)</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td className="border p-2">Enrollment Fees</td>
            <td className="border p-2 text-center">{fees.enrollment}</td>
          </tr>
          <tr>
            <td className="border p-2">Souvenir Cost</td>
            <td className="border p-2 text-center">{fees.souvenir}</td>
          </tr>
          <tr>
            <td className="border p-2">Get-together Cost</td>
            <td className="border p-2 text-center">{fees.getTogether}</td>
          </tr>
          <tr>
            <td className="border p-2">Tuition Cost</td>
            <td className="border p-2 text-center">{fees.tuition}</td>
          </tr>
          <tr className="bg-gray-950">
            <td className="border p-2">Total</td>
            <td className="border p-2 text-center font-bold text-gray-300">
              {fees.tuition +
                fees.enrollment +
                fees.getTogether +
                fees.souvenir}
            </td>
          </tr>
        </tbody>
      </table>
      <section className="mt-4">
        <h1>Next Steps</h1>
        <ul className=" list-disc list-inside">
          <li>Pay your enrollment fees to accept this offer</li>
          <li>Confirm your details and make changes if need be</li>
          <li>FIll your commitment form</li>
          <li>You are now fully enrolled in the program!</li>
        </ul>
      </section>
    </div>
  );
};

export default AdmissionDetails;
