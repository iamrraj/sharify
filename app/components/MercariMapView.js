import React, { Component } from "react";
import { StyleSheet, View, Platform } from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class MercariMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      accuracy: 0
    };
  }
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        this.setState({
          latitude,
          longitude,
          accuracy: position.coords.accuracy
        });
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 200, maximumAge: 100 }
    );
  }
  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });

  render() {
    return (
      <View style={styles.map}>
        <MapView
          style={styles.map}
          customMapStyle={mapStyle}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={this.getMapRegion()}
          provider={PROVIDER_GOOGLE}
        >
          <MapView.Marker
            image={require("../resources/currentLocationMarker.png")}
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }}
            anchor={{ x: 0.5, y: 0.5 }}
          />
          <MapView.Circle
            center={{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }}
            strokeColor={"rgba(0,0,0,0)"}
            fillColor={"rgba(0, 80, 150, 0.1)"}
            radius={this.state.accuracy}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    display: "flex",
    width: "100%",
    height: "110%",
    marginTop: "-5%"
  }
});

const mapStyle = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#7c93a3"
      },
      {
        lightness: "-10"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#a0a4a5"
      }
    ]
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#62838e"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#dde3e3"
      }
    ]
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#3f4a51"
      },
      {
        weight: "0.30"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "poi.attraction",
    elementType: "all",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "poi.business",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.government",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "all",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "poi.place_of_worship",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.school",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.sports_complex",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: "-100"
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#bbcacf"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        lightness: "0"
      },
      {
        color: "#bbcacf"
      },
      {
        weight: "0.50"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#a9b4b8"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        invert_lightness: true
      },
      {
        saturation: "-7"
      },
      {
        lightness: "3"
      },
      {
        gamma: "1.80"
      },
      {
        weight: "0.01"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#a3c7df"
      }
    ]
  }
];
