'use client';

import { useAppStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLoader } from 'react-spinners';

export default function GlobalLoader() {
  const loading = useAppStore((state) => state.loading);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        >
            <HashLoader color='#BF40BF'/>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
