// 'use client';

// import { revalidatePath } from 'next/cache';
// import { useRouter } from 'next/navigation';

// import { deleteMultipleNotices, patchMultipleNotices } from '@/apis/notice';

// export const batchDelete = async (ids: Set<number>) => {
//   try {
//     await deleteMultipleNotices(Array.from(ids));
//     router.refresh();
//   } catch (error) {
//     return { error };
//   }
// };

// export const useBatchUnpin = async (ids: Set<number>) => {
//   const router = useRouter();
//   try {
//     await patchMultipleNotices(Array.from(ids));
//     router.refresh();
//   } catch (error) {
//     return { error };
//   }
// };
