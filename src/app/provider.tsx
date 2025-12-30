'use client';
import ModalsBank from '@/components/modals/ModalsBank';
import { StoreProvider } from '@/stores';
import { Toaster } from 'sonner';

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <Toaster position="top-center" />
      {children}
      <ModalsBank />
    </StoreProvider>
  );
}
