import React from "react";
import AppNavbar from "../components/AppNavbar";
import StudentList from "../components/StudentList";
import Footer from "../components/Footer";

const ListPage = () => {
  return (
    <div>
      <AppNavbar />
      <StudentList />
      <Footer />
    </div>
  );
};

export default ListPage;
