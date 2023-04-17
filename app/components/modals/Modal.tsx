'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  disabled?: boolean;
  actionLabel: string;
  secondaryActionLabel?: string;
  secondaryAction?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  disabled,
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-secondaryBg/80 z-10 flex justify-center items-center overflow-x-hidden overscroll-y-auto">
        <div className="w-full md:w-4/6 lg:w-3/6 xl:w-2/6 h-full lg:h-auto md:h-auto my-6">
          <div
            className={`h-full transition duration-300 ${
              showModal ? 'translate-y-0' : 'translate-y-full'
            } ${showModal ? 'opacity-100' : 'opacity-0'} `}
          >
            <div className="relative flex flex-col items-center w-full h-full md:h-auto bg-primaryBg md:rounded-lg shadow-md">
              {/* header */}
              <div className="w-full flex justify-center items-center p-4 border-b-[1px] tracking-wider font-semibold">
                <button
                  onClick={handleClose}
                  className="absolute left-5 hover:text-highlight transition"
                >
                  <IoMdClose size={20} />
                </button>
                {title}
              </div>
              {/* body */}
              <div className="flex flex-col space-y-6 w-full p-6">
                {body}
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    label={secondaryActionLabel}
                    onClick={secondaryAction}
                    disabled={disabled}
                  />
                )}
                <Button
                  label={actionLabel}
                  onClick={handleSubmit}
                  disabled={disabled}
                />
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
