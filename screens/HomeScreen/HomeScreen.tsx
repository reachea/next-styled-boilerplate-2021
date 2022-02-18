import React from "react";
import dynamic from "next/dynamic";
import { HomeScreenContainer } from "./HomeScreen.styled";

const OrganizationalChart = dynamic(
  () => {
    return import("../../components/OrganizationalChart/OrganizationalChart")
  },
  {
    ssr: false
  }
)

const HomeScreen = () => {
  return <HomeScreenContainer className="d-flex flex-column">
    <h1>រចនាសម្ព័ន្ធអង្គភាព</h1>
    <OrganizationalChart />
  </HomeScreenContainer>
}

export default HomeScreen;