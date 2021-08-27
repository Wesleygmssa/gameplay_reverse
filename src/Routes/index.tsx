import React from "react";
import { Background } from "../components/Background";

import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <Background>
        <AuthRoutes />
      </Background>
    </NavigationContainer>
  );
}
