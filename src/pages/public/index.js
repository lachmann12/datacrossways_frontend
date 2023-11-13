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
import { UserMenu } from "../dashboard/components/user-menu";
import React, { useState, useEffect } from 'react';

export const PublicPage = () => {

  const [hasUserId, setHasUserId] = useState(false);
  const [open, setOpen] = useState(false); // Assuming you have a state for the sidebar
  
  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const checkUserId = async () => {
      try {
        const response = await fetch('/api/user/i');
        const data = await response.json();
        if (data && data.id) {
          setHasUserId(true);
        }
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };
    
    checkUserId();
  }, []);

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
      {hasUserId ? (
        <AppBar position="fixed" open={open}>
          <UserMenu sidebarOpen={open} toggleSidebar={toggle} />
        </AppBar>
      ) : (
        <NavBar />
      )}
      <Jumbotron />
      <AvailableData />
      <DataCollections />
      {/*<NewsSection /> */}
      <ContactInformation />
      <ContactUs />
      <StayConnected />
      <FooterSection />
    </>
  );
};
