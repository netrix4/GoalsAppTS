import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack >
      <Stack.Screen name="(tabs)" options={{title: 'CRUD con TS'}}/>
    </Stack>
    
  );
}