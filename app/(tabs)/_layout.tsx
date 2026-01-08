/**
 * Tabs Layout - Bottom Tab Navigator for main app
 *
 * Tabs: Services, Inquiries, Notifications, Settings, Help
 */

import { Tabs } from 'expo-router';
import { Image, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { NavIcons } from '../../assets/images';

export default function TabsLayout() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#b8eeffff', '#c9fd91ff']}
      style={styles.gradient}
    >
      <View style={{ paddingTop: insets.top, flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: '#ddd',
            backgroundColor: '#ffffff',
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarActiveTintColor: '#22c55e',
          tabBarInactiveTintColor: '#666',
          sceneStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Tabs.Screen
          name="services"
          options={{
            title: t('navigation.services'),
            tabBarIcon: ({ color }) => (
              <Image
                source={NavIcons.services}
                style={{ width: 24, height: 24, tintColor: color }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="inquiries"
          options={{
            title: t('navigation.inquiries'),
            tabBarIcon: ({ color }) => (
              <Image
                source={NavIcons.inquiries}
                style={{ width: 24, height: 24, tintColor: color }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            title: t('navigation.notifications'),
            tabBarIcon: ({ color }) => (
              <Image
                source={NavIcons.notifications}
                style={{ width: 24, height: 24, tintColor: color }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: t('navigation.settings'),
            tabBarIcon: ({ color }) => (
              <Image
                source={NavIcons.settings}
                style={{ width: 24, height: 24, tintColor: color }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="help"
          options={{
            title: t('navigation.help'),
            tabBarIcon: ({ color }) => (
              <Image
                source={NavIcons.help}
                style={{ width: 24, height: 24, tintColor: color }}
              />
            ),
          }}
        />
      </Tabs>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
