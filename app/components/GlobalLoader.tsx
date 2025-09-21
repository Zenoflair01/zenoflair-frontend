'use client';

import { useAppStore } from '@/lib/store';
import { HashLoader } from 'react-spinners';

export default function GlobalLoader() {
  const loading = useAppStore((state) => state.loading);

  return (
   <>
   {loading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        >
            <HashLoader color='#BF40BF'/>
        </div>
      )}
   </>
      
 
  );
}
