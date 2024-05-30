'use client';

import { Control, FieldPath } from 'react-hook-form';
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { authFormSchema } from '@/lib/utils';
import { z } from 'zod';
import { useState } from 'react';
import { Eye } from 'lucide-react';

// we need to know all the possible keys in the schema so we use sign-up
const formSchema = authFormSchema('sign-up');

interface CustomFormFieldProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomFormItem = ({
  control,
  name,
  label,
  placeholder,
}: CustomFormFieldProps) => {
  // const [showPassword, setShowPassword] = useState(true);

  return (
    <div className='w-full'>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div>
            <FormLabel>{label}</FormLabel>
            <FormControl className='border-[#c0e761]'>
              <div className='relative'>
                <Input
                  className='border-[#cccccc] focus-visible:ring-0'
                  placeholder={placeholder}
                  type={
                    name === 'password' || name === 'confirmPassword'
                      ? 'password'
                      : 'text'
                  }
                  {...field}
                />
                {/* {(name === 'password' || name === 'confirmPassword') && (
                  <span
                    className='absolute right-4 top-2'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Eye className='' />
                  </span>
                )} */}
              </div>
            </FormControl>
            <FormMessage className='mt-2' />
          </div>
        )}
      />
    </div>
  );
};

export default CustomFormItem;
