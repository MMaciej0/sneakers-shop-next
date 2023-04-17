'use client';

import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { FcGoogle } from 'react-icons/fc';
import Modal from './Modal';
import FormInput from '../inputs/FormInput';
import Button from '../Button';

const RegisterModal = () => {
  const registerModalState = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post('/api/register', data)
      .then(() => registerModalState.onClose)
      .catch((error) => {
        return toast.error('Something went wrong.');
      });
    setIsLoading(false);
  };

  const modalBody = (
    <div className="flex flex-col gap-4">
      <FormInput
        required
        label="Name"
        type="text"
        id="name"
        register={register}
        errors={errors}
        disabled={isLoading}
      />
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
        onClick={() => {}}
      />
      <div className="flex flex-row justify-center items-center gap-2">
        <div>Already have an account</div>
        <div
          className="text-neutral-800 cursor-pointer hover:underline"
          onClick={registerModalState.onClose}
        >
          Log In
        </div>
      </div>
    </>
  );

  return (
    <div>
      <Modal
        body={modalBody}
        isOpen={registerModalState.isOpen}
        onClose={registerModalState.onClose}
        title="Register"
        actionLabel="Continue"
        footer={modalFooter}
        onSubmit={handleSubmit(onSubmit)}
        disabled={isLoading}
      />
    </div>
  );
};

export default RegisterModal;
