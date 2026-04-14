import React, { useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useLoaderData } from 'react-router';

export default function Coverage() {
  const position = [23.6850, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);


  const handleSearch = (e) => {
    e.preventDefault();
    const locatin = e.target.location.value;
    const district = serviceCenters.find(e => e.district.toLowerCase().includes(locatin.toLowerCase()));
    if (district) {
      const coord = [district.latitude, district.longitude]
      mapRef.current.flyTo(coord, 15)

    }

  }
  return (
    <div className='card  p-5 '>
      <h1 className='text-5xl my-10 font-bold'>We are available in 64 districts</h1>

      <form onSubmit={handleSearch}>
        <label className="input">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" name='location' placeholder="Search" />

        </label>
      </form>
      <div className='border h-[800px]'>


        {/* render( */}
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          position={position}
          className='h-full'
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            serviceCenters.map((center, index) => <Marker
              key={index}
              position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> {center.covered_area.join(" , ")}.
              </Popup>
            </Marker>)
          }
        </MapContainer>
        {/* ) */}
      </div>
    </div>
  )
}
