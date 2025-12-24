import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./container/Login";
import Registration from "./container/Registration";
import SimpleForm from "./container/SimpleForm";
import MultipleInputForm from "./container/MultipleInputFrom";
import AdvancedForm from "./container/AdvancedForm";
import UncontrolledForm from "./container/UncontrolledForm";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/simpleform" element={<SimpleForm />} />
        <Route path="/multipleinputform" element={<MultipleInputForm />} />
        <Route path="/advancedform" element={<AdvancedForm />} />
        <Route path="/uncontrolledform" element={<UncontrolledForm />} />
        <Route
          path="*"
          element={<h2 className="text-center mt-5">404 Page Not Found</h2>}
        />
      </Routes>
    </div>
  );
};

export default App;
