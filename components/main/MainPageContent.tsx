'use client';

import { useInView } from 'react-intersection-observer';

import { useNavbarContext } from '@/contexts/NavbarContext';

import { MainContents } from '@/types/main';

import ImportantPosts from './ImportantPosts';
import Notices from './Notices';
import SlideScreen from './SlideScreen';

interface MainPageContentProps {
  data: MainContents;
}

export default function MainPageContent({ data }: MainPageContentProps) {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <>
      <div ref={ref}>
        <SlideScreen slides={data.slides} />
        <div className="flex justify-between mt-[60px]">
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
      }  z-30 w-[50px] flex flex-col items-center fixed bottom-2.5 ${
        hide && 'opacity-0'
      } transition-opacity duration-200 pointer-events-none`}
    >
      <span className="text-xs text-main-orange font-yoon font-bold animate-pulse">SCROLL</span>
      <span className="material-symbols-outlined text-[48px] text-main-orange font-extralight">
        keyboard_double_arrow_down
      </span>
    </div>
  );
}
