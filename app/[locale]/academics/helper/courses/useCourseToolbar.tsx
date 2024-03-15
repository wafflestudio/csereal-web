import { useState } from 'react';

import { SortOption, ViewOption } from '@/types/academics';

export default function useCourseToolbar() {
  const [selectedOption, setSelectedOption] = useState<{ view: ViewOption; sort: SortOption }>({
    view: '카드형',
    sort: '학년',
  });

  const changeOptions = (
    options: { type: 'view'; option: ViewOption } | { type: 'sort'; option: SortOption },
  ) => {
    setSelectedOption((prev) => ({ ...prev, [options.type]: options.option }));
  };

  return { selectedOption, changeOptions };
}
