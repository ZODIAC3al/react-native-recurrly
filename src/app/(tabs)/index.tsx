import "../../../global.css";

import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-7xl font-sans-extrabold ">Home</Text>
      <Link
        href="/onboarding"
        className="m-4 font-sans-bold rounded bg-primary text-white p-4"
      >
        Go to Onboarding{" "}
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="m-4 font-sans-bold rounded bg-primary text-white p-4"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="m-4 font-sans-bold rounded bg-primary text-white p-4"
      >
        Go to Sign Up
      </Link>
      <Link
        href="/subscriptions/spotify"
        className="m-4 rounded bg-primary text-white p-4"
      >
        Spotify subscriptions
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="m-4 rounded bg-primary text-white p-4"
      >
        Claude Max Subscriptions
      </Link>
    </SafeAreaView>
  );
}
