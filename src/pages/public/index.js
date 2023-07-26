import { Helmet } from "react-helmet-async";
import { FooterSection } from "../../layout/footer";
import { NavBar } from "../../layout/navbar";
import { AvailableData } from "./components/available-data";
import { DataCollections } from "./components/collections-section";
import { StayConnected } from "./components/connected-section";
import { ContactInformation } from "./components/contact-info";
import { ContactUs } from "./components/contact-us";
import { Jumbotron } from "./components/jumbotron";
import { NewsSection } from "./components/news-section";
import data from "../../data/config.json";

export const PublicPage = () => {
  return (
    <>
      <Helmet>
        <title>{data.general.project_title}</title>
        <link rel="icon" type="image/png" href={data.general.project_icon} />
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <NavBar />
      <Jumbotron />
      <AvailableData />
      <DataCollections />
      <NewsSection />
      <ContactInformation />
      <ContactUs />
      <StayConnected />
      <FooterSection />
    </>
  );
};
