import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home"}} />
            <Tabs.Screen name="goals" options={{ title: "Goals" }} />
            <Tabs.Screen name="vis" options={{ title: "Visualizations" }} />
            <Tabs.Screen name="table" options={{ title: "Table" }} />
        </Tabs>
    )
}