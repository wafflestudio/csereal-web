'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useRef } from 'react';

import { staff } from '@/types/page';

import { getPath } from '@/utils/page';

export default function LocationInformation() {
  return (
    <div className="mb-[3.25rem]">
      <LocationAddress />
      <LocationMap />
    </div>
  );
}

const staffPath = getPath(staff);

function LocationAddress() {
  return (
    <p className="font-noto text-sm leading-6 mb-8">
      컴퓨터공학부는 서울대학교 관악 301동(신공학관1)에 있습니다.
      <br />
      주소: 08826 서울특별시 관악구 관악로 1 서울대학교 공과대학 컴퓨터공학부 행정실(301동 316호)
      <br />
      전화:{' '}
      <Link href={staffPath} className="underline text-link">
        학부 연락처
      </Link>
    </p>
  );
}

declare global {
  interface Window {
    kakao: any;
  }
}

const LATITUDE = 37.449996;
const LONGITUDE = 126.952509;

function LocationMap() {
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
