import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';

export default function HomeTabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Jobs"
        options={{
          title: 'Jobs',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="work" color={color} />,
        }}
      />
       <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="person" color={color} />,
        }}
      />
      {/* Add more tabs here */}
    </Tabs>
  );
}