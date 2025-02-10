import React, { useState, useEffect, useRef, useCallback, useMemo, Suspense } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/common/ui/carousel';
import { getWeekText, getFormattedDate } from '@/utils/dateUtils';
import useHomePageStore from '@/store/useHomePageStore';
import { type CarouselApi } from '@/components/common/ui/carousel';
import { getWeeklyIncomplete } from '@/services/housework/getWeeklyIncomplete';
import { useParams } from 'react-router-dom';

const DateItem = React.lazy(() => import('./DateItem/DateItem'));

const WeeklyDate = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const {
    setWeekText,
    activeDate,
    setActiveDate,
    currWeek,
    setCurrWeek,
    activeWeek,
    setActiveWeek,
  } = useHomePageStore();
  const { channelId } = useParams();
  const prevChannelIdRef = useRef(channelId);

  const fetchCurrWeek = useCallback(
    async (newDate: string) => {
      try {
        const newChannelId = Number(channelId);
        const currWeekResult = await getWeeklyIncomplete({
          channelId: newChannelId,
          targetDate: newDate,
        });
        const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
        const newWeekDates = currWeekResult.result.incompleteScoreResponses.map(data => {
          const date = new Date(data.date);
          const weekdayIndex = date.getDay();
          return {
            ...data,
            day: weekdays[weekdayIndex],
          };
        });

        setCurrWeek(newWeekDates);
      } catch (error) {
        console.error('주간 미완료율 조회 실패:', error);
      }
    },
    [channelId, setCurrWeek]
  );

  useEffect(() => {
    if (prevChannelIdRef.current !== channelId) {
      const today = new Date();
      setWeekText(getWeekText(today));
      fetchCurrWeek(getFormattedDate(today));
      setActiveWeek(today);
      setActiveDate(getFormattedDate(today));
      prevChannelIdRef.current = channelId;
    }
  }, [channelId, fetchCurrWeek, setActiveDate, setActiveWeek, setWeekText]);

  useEffect(() => {
    fetchCurrWeek(getFormattedDate(activeWeek));
  }, [activeWeek, fetchCurrWeek]);

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      const newCurrent = api.selectedScrollSnap();
      if (newCurrent !== current) {
        if (newCurrent === (current + 1) % 3) {
          changeWeek('next');
        } else if (newCurrent === (current + 2) % 3) {
          changeWeek('previous');
        }
      }
      setCurrent(newCurrent);
    });
  }, [api, current]);

  const handleActiveDate = async (date: string) => {
    setActiveDate(date);
  };

  const changeWeek = (direction: 'next' | 'previous') => {
    const newDate = new Date(activeWeek);
    newDate.setDate(activeWeek.getDate() + (direction === 'next' ? 7 : -7));

    setActiveWeek(newDate);
    setWeekText(getWeekText(newDate));
  };

  const memoizedCurrWeek = useMemo(() => currWeek, [currWeek]);
  const today = getFormattedDate(new Date());

  return (
    <Carousel opts={{ loop: true }} setApi={setApi}>
      <CarouselContent>
        {[...Array(3)].map((_, i) => (
          <CarouselItem key={i}>
            <div className='flex touch-none items-center justify-center gap-3 bg-white px-5 py-2'>
              <Suspense fallback={<div></div>}>
                {memoizedCurrWeek.map(week => (
                  <DateItem
                    key={week.date} // 고유한 키 사용
                    date={week.date.split('-')[2]}
                    day={week.day}
                    pendingCnt={week.houseworkIncompleteCount}
                    solvedMatters={week.solvedMatters}
                    isActive={activeDate === week.date && current === i}
                    isToday={today === week.date && current === i}
                    handleClick={() => handleActiveDate(week.date)}
                  />
                ))}
              </Suspense>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default WeeklyDate;
