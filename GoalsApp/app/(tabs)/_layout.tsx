import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs >
      <Tabs.Screen name="index" options={{title: 'Inicio', headerShown: false}} />
      <Tabs.Screen name="about" options={{title: 'Acerca de', headerShown: false}} />
      <Tabs.Screen name="login" options={{title: 'Credenciales', headerShown: false}} />
    </Tabs>
    
  );
}
