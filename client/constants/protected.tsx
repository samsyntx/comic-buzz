import React from "react";
import { View, Text } from "react-native";


const ProtectedRoute = (Component: React.ComponentType) => {
  return (props: any) => {
    const isAuthenticated = true; 

    if (!isAuthenticated) {
      return (
        <View>
          <Text>Access Denied</Text>
        </View>
      );
    }

    return <Component {...props} />;
  };
};

export default ProtectedRoute;
