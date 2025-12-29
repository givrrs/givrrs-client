import { useStore } from '@/stores';
import { AppModals } from '@/stores/Appconfig/appModalTypes';
import { observer } from 'mobx-react-lite';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const ModalsMap = {
  [AppModals.FORGOT_PWD_MODAL]: dynamic(() => import('@/app/auth/modal/ForgotPasswordModal'))
};

const ModalsBank = () => {
  const {
    AppConfigStore: { isOpen, nonce }
  } = useStore();

  const OpenedModalsComponent = useMemo(() => {
    return Object.entries(ModalsMap).reduce(
      (acc: { Render: React.ReactNode; name: string }[], [keyName, Component]) => {
        if (isOpen[keyName as keyof typeof AppModals]) {
          acc.push({ Render: <Component key={keyName} />, name: keyName });
        }
        return acc;
      },
      []
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, nonce]);

  return <>{OpenedModalsComponent.map((Modal) => Modal.Render)}</>;
};

export default observer(ModalsBank);
