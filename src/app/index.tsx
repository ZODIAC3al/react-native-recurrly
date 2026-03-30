import { Redirect } from "expo-router";

export default function Index() {
  // Instantly redirect the user to the tabs group
  return <Redirect href="/(tabs)" />;
}
