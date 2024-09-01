import "react-native-gesture-handler";
import { View, Text } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Backups from "./App/Components/Backups";
import Contact from "./App/Components/Contact";
import RateApp from "./App/Pages/RateApp";
import Settings from "./App/Components/Settings";
import Home from "./App/Pages/Home";
import LoginScreen from "./App/Pages/LoginScreen";
import Invoices from "./App/Pages/Invoices";
import CreateBill from "./App/Pages/CreatBill";
import CreateFeeReceipt from "./App/Pages/CreateFeeReceipt";
import LoginForm from "./App/Pages/LoginForm";
import Analytics from "./App/Pages/Analytics"; // Import the Analytics component
import VendorManagement from './App/Pages/VendorManagement';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <SafeAreaView>
          <View
            style={{
              height: 200,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomColor: "#f4f4f4",
              borderBottomWidth: 1,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                marginVertical: 6,
                fontWeight: "bold",
                color: "#111",
              }}
            >
              YourBiller
            </Text>
            <Text style={{ fontSize: 16, color: "#111" }}>Welcome!</Text>
          </View>
          <DrawerItemList {...props} />
        </SafeAreaView>
      )}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
          width: 250,
        },
        headerStyle: {
          backgroundColor: "#0C7DE4",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerLabelStyle: {
          color: "#111",
        },
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={Home}
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: () => (
            <SimpleLineIcons name="home" size={20} color="#808080" />
          ),
        }}
      />
      <Drawer.Screen
        name="Invoices"
        component={Invoices}
        options={{
          drawerLabel: "Invoice",
          title: "Invoice",
          drawerIcon: () => (
            <SimpleLineIcons name="book-open" size={20} color="#808080" />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          drawerIcon: () => (
            <SimpleLineIcons name="settings" size={20} color="#808080" />
          ),
        }}
      />
      <Drawer.Screen
        name="Analytics" // Add Analytics here
        component={Analytics}
        options={{
          drawerLabel: "Analytics",
          title: "Analytics",
          drawerIcon: () => (
            <MaterialIcons name="analytics" size={20} color="#808080" />
          ),
        }}
      />
      <Drawer.Screen
        name="Backups"
        component={Backups}
        options={{
          drawerLabel: "Backups",
          title: "Backups",
          drawerIcon: () => (
            <MaterialIcons name="backup" size={20} color="#808080" />
          ),
        }}
      />
      <Drawer.Screen
        name="Rate this App"
        component={RateApp}
        options={{
          drawerLabel: "Rate this App",
          title: "Rate this App",
          drawerIcon: () => (
            <FontAwesome name="star" size={20} color="#808080" />
          ),
        }}
      />
               <Drawer.Screen
  name="Vendor Management"
  options={{
    drawerLabel: "Vendor Management",
    title: "Vendor Management",
    drawerIcon: () => (
      <MaterialCommunityIcons name="account-group" size={20} color="#808080" />
    ),
  }}
  component={VendorManagement}
/>
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerLabel: "Contact",
          title: "Contact",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="message-alert-outline"
              size={20}
              color="#808080"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CreateBill" component={CreateBill} />
      <Stack.Screen name="CreateFeeReceipt" component={CreateFeeReceipt} />
      <Stack.Screen name="LoginForm" component={LoginForm} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
