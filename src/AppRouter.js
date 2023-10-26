import { Box, Typography } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import App from "./App";

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {"Copyright Ⓒ "}
      soieu, {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
}
