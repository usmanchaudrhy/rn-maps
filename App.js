import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"

export default function App() {
  function onRegionChange(region, moveObj) {
    console.log(region)
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onRegionChangeComplete={(region, moveObj) =>
          onRegionChange(region, moveObj)
        }
      />
      <View style={styles.bottomView}>
        <View style={styles.card}>
          <Text>Animated markers will go here</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },

  bottomView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  card: {
    backgroundColor: "pink",
    marginHorizontal: 30,
    padding: 15,
  },
})
