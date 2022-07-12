import { Configurator } from "modules/configurator";
import React from "react";
import { Routes, Route } from "react-router-dom";

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Configurator />} />
    </Routes>
  );
};
