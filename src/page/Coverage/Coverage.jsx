import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useLoaderData } from 'react-router';

export default function Coverage() {
  const position = [23.6850, 90.3563];
  const serviceCenters = useLoaderData();
  console.log(serviceCenters)
  return (
    <div className='card  p-5 '>
      <h1 className='text-5xl my-10 font-bold'>We are available in 64 districts</h1>

      <div className="flex items-center p-4">
        <div className="relative flex items-center w-[50%] max-w-2xl group">
          {/* Search Icon */}
          <div className="absolute left-6 text-gray-400 group-focus-within:text-[#00302d] transition-colors">
            <FiSearch size={22} strokeWidth={3} />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search here"
            className="w-full bg-[#f0f3f7] py-4 pl-16 pr-32 rounded-full text-[#00302d] placeholder-gray-400 outline-none border-2 border-transparent focus:border-[#d4e9a9] transition-all"
          />

          {/* Search Button */}
          <button className="absolute right-0 h-full bg-[#d4e9a9] text-[#00302d] font-bold px-10 rounded-full hover:bg-[#c5e1a5] transition-colors text-lg">
            Search
          </button>
        </div>
      </div>
      <div className='border h-[800px]'>


        {/* render( */}
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          position={position}
          className='h-full'
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
