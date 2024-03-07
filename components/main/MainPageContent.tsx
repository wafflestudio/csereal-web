'use client';

import { useInView } from 'react-intersection-observer';

import { useNavbarContext } from '@/contexts/NavbarContext';

import { MainContents } from '@/types/main';

import ImportantPosts from './ImportantPosts';
import Notices from './Notices';
import SlideScreen from './SlideScreen';
import Header from '../layout/header/Header';

interface MainPageContentProps {
  data: MainContents;
}

export default function MainPageContent({ data }: MainPageContentProps) {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <>
      <div ref={ref}>
        <Header />
        <SlideScreen slides={data.slides} />
        <div className="mt-[60px] flex justify-between">
          <ImportantPosts posts={data.importants} />
          <Notices notices={data.notices} />
        </div>
      </div>
      <ScrollSign hide={inView} />
    </>
  );
}

function ScrollSign({ hide }: { hide: boolean }) {
  const { navbarState } = useNavbarContext();

  return (
    <div
      className={`${
        navbarState.type === 'closed'
          ? 'left-[calc(50vw+50px-25px)]'
          : 'left-[calc(50vw+86px-25px)]'
      }  fixed bottom-2.5 z-30 flex w-[50px] flex-col items-center ${
        hide && 'opacity-0'
      } pointer-events-none transition-opacity duration-200`}
    >
      <span className="font-yoon animate-pulse text-xs font-bold text-main-orange">SCROLL</span>
      <span className="material-symbols-outlined text-[48px] font-extralight text-main-orange">
        keyboard_double_arrow_down
      </span>
    </div>
  );
}
