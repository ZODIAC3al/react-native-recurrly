import { Redirect } from "expo-router";

/**
 * Redirects to the app's tabs group route.
 *
 * Renders a redirect that navigates the user to `/(tabs)` as the index entrypoint.
 *
 * @returns A React element that navigates the user to `/(tabs)`
 */
export default function Index() {
  // Instantly redirect the user to the tabs group
  return <Redirect href="/(tabs)" />;
}
