import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#0e162dff',
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#7f8ab0ff',
            }}
        >
            <Tabs.Screen name="index" options={{ title: "Home", headerShown: false }} />
            <Tabs.Screen name="goals" options={{ title: "Goals", headerShown: false }} />
            <Tabs.Screen name="vis" options={{ title: "Visualizations", headerShown: false }} />
            <Tabs.Screen name="table" options={{ title: "Table", headerShown: false }} />
        </Tabs>
    )
}