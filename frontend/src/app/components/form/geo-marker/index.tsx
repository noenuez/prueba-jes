/* eslint-disable @typescript-eslint/no-empty-interface */
import Leaflet, * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Controller, useFormContext } from 'react-hook-form';
import { MapContainer, Marker, TileLayer, useMapEvent } from 'react-leaflet';
//import image from '../../../../../public/images/marker-icon.png';
Leaflet.Icon.Default.imagePath = '../node_modules/leaflet';
const icon = L.icon({
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [25, 41]
});
interface Props {
  label: string;
  name: string;
  defaultValue?: any;
  whenChange?: Function;
  readOnly?: boolean;
}

function GeoMarker(props: Props) {
  const [markers, setmarkers] = useState<L.LatLng[]>([new L.LatLng(9.0148503, -79.538128)]);
  const { register, errors, setValue, control } = useFormContext();
  const { label, name, defaultValue, whenChange, readOnly } = props;
  const error = errors[name];
  const addMarker = (e: any) => {
    setmarkers([e.latlng]);
    setValue(name, e.latlng);
    if (whenChange) {
      whenChange(e.latlng);
    }
  };
  const setDefauls = () => {
    const value = defaultValue ? [new L.LatLng(defaultValue.lat, defaultValue.lng)] : [];
    setmarkers(value);
    setValue(name, value.length > 0 ? value[0] : null);
  };

  const MyComponent = () => {
    const map = useMapEvent('click', (e: any) => {
      if (!readOnly) {
        addMarker(e);
      }
    });
    return null;
  };

  useEffect(() => {
    setDefauls();
  }, [defaultValue]);
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Controller
        defaultValue={markers}
        name={name}
        render={({ onChange, onBlur, value }) => {
          return (
            <MapContainer center={[14.638077, -90.513715]} zoom={13}>
              <MyComponent />
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              />
              {markers.map((position: any, idx: any) => {
                return (
                  <Marker icon={icon} key={`marker-${idx}`} position={position}>
                    {/*<Popup>
                      <span>Digital economy</span>
                    </Popup>*/}
                  </Marker>
                );
              })}
            </MapContainer>
          );
        }}
        control={control}
      />
      <div className="invalid-feedback d-block">{error ? error.message : ''}</div>
    </>
  );
}
export default GeoMarker;
