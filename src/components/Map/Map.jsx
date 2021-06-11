import GoogleMapReact from "google-map-react";
import Marker from "./img/marker.png";

const Map = () => {
  return (
    <div className="w-full h-[500px] -mt-13">
      <GoogleMapReact
        defaultCenter={{
          lat: 52.12897642456595,
          lng: -106.63475245731624,
        }}
        defaultZoom={13}
      >
        <img
          src={Marker}
          alt="Marker"
          lat={52.12916102178886}
          lng={-106.66332985735916}
          className="h-10 w-10"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
