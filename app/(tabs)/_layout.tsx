import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/src/themes/theme';

interface TabBarIconProps {
    color: string;
    size: number;
    focused: boolean;
}

const createScreenOptions = (
  iconName: keyof typeof Ionicons.glyphMap,
  title?: string,
  customColor?: string
) => {
  return {
    headerShown: false,
    tabBarActiveTintColor: theme.colors.vibrantBlue,
    tabBarInactiveTintColor: theme.colors.gray,
    tabBarStyle: {
        backgroundColor: theme.colors.black,
        borderTopWidth: 0,
        position: 'absolute',
        elevation: 0,
        height: theme.sizes.xxxxl,
    },
    title: title || iconName,
    tabBarIcon: ({ size, color }: TabBarIconProps) => {
      const iconColor = customColor ?? color;
      return <Ionicons name={iconName} size={size} color={iconColor} />;
    },
  };
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={createScreenOptions('home', 'Home')}
      />
      <Tabs.Screen
        name="bookmarks"
        options={createScreenOptions('bookmark', 'Bookmark')}
      />
      <Tabs.Screen
        name="create"
        options={createScreenOptions('add-circle', 'Create')}
      />
      <Tabs.Screen
        name="notifications"
        options={createScreenOptions('heart', 'Notifications', theme.colors.red)}
      />
      <Tabs.Screen
        name="profile"
        options={createScreenOptions('person-circle', 'Profile', theme.colors.accent)}
      />
    </Tabs>
  );
}
