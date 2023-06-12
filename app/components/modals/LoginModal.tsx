'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { FcGoogle } from 'react-icons/fc';
import Modal from './Modal';
import FormInput from '../inputs/FormInput';
import Button from '../Button';
import useLoginModal from '@/app/hooks/useLoginModal';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
  const router = useRouter();
  const registerModalState = useRegisterModal();
  const loginModalState = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setIsLoading(true);

    signIn('credentials', { ...data, redirect: false }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        toast('Welcome again');
        router.refresh();
        loginModalState.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const openRegister = () => {
    loginModalState.onClose();
    registerModalState.onOpen();
  };

  const modalBody = (
    <div className="flex flex-col gap-4">
      <FormInput
        required
        label="Email"
        type="email"
        id="email"
        register={register}
        errors={errors}
        disabled={isLoading}
      />
      <FormInput
        required
        label="Password"
        type="password"
        id="password"
        register={register}
        errors={errors}
        disabled={isLoading}
      />
    </div>
  );

  const modalFooter = (
    <>
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <div className="flex flex-row justify-center items-center gap-2">
        <div>Do not have an account?</div>
        <div
          className="text-neutral-800 cursor-pointer hover:underline"
          onClick={openRegister}
        >
          Register
        </div>
      </div>
    </>
  );

  return (
    <div>
      <Modal
        body={modalBody}
        isOpen={loginModalState.isOpen}
        onClose={loginModalState.onClose}
        title="Login"
        actionLabel="Continue"
        footer={modalFooter}
        onSubmit={handleSubmit(onSubmit)}
        disabled={isLoading}
      />
    </div>
  );
};

export default LoginModal;
