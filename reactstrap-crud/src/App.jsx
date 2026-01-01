import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersList from "./containers/UsersList";
import UsersForm from "./containers/UsersForm";

function App(props) {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<UsersList />} />
        <Route path={"/users/add"} element={<UsersForm />} />
        <Route path={"/users/edit/:uid"} element={<UsersForm />} />
      </Routes>
    </>
  );
}

export default App;
