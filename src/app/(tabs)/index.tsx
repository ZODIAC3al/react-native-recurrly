import "../../../global.css";

import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="m-4 rounded bg-primary text-white p-4"
      >
        Go to Onboarding{" "}
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="m-4 rounded bg-primary text-white p-4"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="m-4 rounded bg-primary text-white p-4"
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
    </View>
  );
}
