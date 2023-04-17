'use client';

import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const FormInput: React.FC<InputProps> = ({
  id,
  type,
  register,
  required,
  label,
  disabled,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <input
        type={type}
        id={id}
        disabled={disabled}
        placeholder=" "
        {...register(id, { required })}
        maxLength={20}
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
          errors[id] ? 'border-rose-500' : 'border-neutral-300'
        } ${
          errors[id] ? 'focus:border-rose-500' : 'focus:border-highlight/80'
        }`}
      />
      <label
        htmlFor={id}
        className={`cursor-pointer absolute text-md duration-150 transform top-5 left-4 z-10 origin-[0] scale-75 -translate-y-4 peer-blank:scale-100 peer-blank:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 ${
          errors[id] ? 'text-rose-500' : 'text-zinc-400'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
