import CaseDescription from "@/components/case-description";
import MainContent from "../main-content";
import SideSection from "../side-section";
import CaseResources from "@/components/case-resources";

const case_content = {
  title: 'Centralized E-commerce Platform For Students',
  problemStatement: `University campuses are bustling with student entrepreneurs selling
    various products such as books, stationery, tech gadgets, clothes,
    and even food items. However, most students lack a centralized
    platform to advertise and sell their products. Instead, they rely on
    fragmented solutions like social media groups and word of mouth,
    which limit their reach and efficiency. To address this gap, you
    have been approached to design and develop a Centralized E-Commerce
    Platform for Students. This platform should streamline buying and
    selling while catering to the specific needs of students on campus.`,
  coverImage: '/images/ad-bg.jpg',
  requirements: [
    "Register users as either buyers or sellers",
    "Allow sellers to create product listings",
    "Enable buyers to browse, search, and purchase products",
    "Include a payment gateway for secure transactions.",
    "Provide a dashboard for sellers to track orders and inventory.",
    "Offer features like delivery options and order tracking",
    "Have a moderation system to ensure compliance with campus policies."
  ]
}

const page = () => {
  return (
    <>
      <MainContent>
        <CaseDescription {...case_content}/>
      </MainContent>
      <SideSection>
        <CaseResources/>
      </SideSection>

    </>
  );
};

export default page;
