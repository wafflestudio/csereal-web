'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const LATITUDE = 37.449996;
const LONGITUDE = 126.952509;

export default function LocationMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  const initializeMap = () => {
    if (containerRef.current) {
      const options = {
        center: new window.kakao.maps.LatLng(LATITUDE, LONGITUDE),
        level: 3,
      };
      const map = new window.kakao.maps.Map(containerRef.current, options);
      const markerPosition = new window.kakao.maps.LatLng(LATITUDE, LONGITUDE);
      const marker = new window.kakao.maps.Marker({ position: markerPosition });
      marker.setMap(map);
    }
  };

  useEffect(() => {
    if (window.kakao) {
      initializeMap();
    }
  }, []);

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`}
        onLoad={() => window.kakao.maps.load(initializeMap)}
      />
      <div id="map" className="h-80" ref={containerRef}></div>
    </>
  );
}
