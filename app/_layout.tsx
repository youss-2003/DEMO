import { Stack } from "expo-router";
import "../global.css"
import AppFooter from "./Components/Footer";
export default function RootLayout() {
  return <>
  
  <Stack>
  <Stack.Screen name="Home" options={{
      headerShown:false,
    }}/>
    <Stack.Screen name="(tabs)" options={{
      headerShown:false,
    }}/>
    <Stack.Screen name="+not-found" options={{
      headerShown:false,
    }}/>
  </Stack>
  <AppFooter/>
  </>;
}
