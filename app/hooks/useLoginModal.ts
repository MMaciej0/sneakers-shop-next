import { create } from 'zustand';

interface LoginProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLoginModal = create<LoginProps>((set) => ({
  isOpen: false,

  onOpen: () => set({ isOpen: true }),

  onClose: () => set({ isOpen: false }),
}));

export default useLoginModal;
