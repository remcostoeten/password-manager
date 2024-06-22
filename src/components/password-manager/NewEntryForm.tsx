import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  passwordSchema,
  PasswordFormData,
} from '../../core/models/validationSchema';
import { Button } from '@/components/ui';
import { toast } from 'sonner';

type PasswordFormProps = {
  onSave: (data: PasswordFormData) => void;
};

export function PasswordForm({ onSave }: PasswordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmit = (data: PasswordFormData) => {
    onSave(data);
    toast('Entry saved successfully to the vault!');
  };

  const onError = (errors: any) => {
    console.log('Form errors:', errors);
    toast(errors.password.message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div>
        <label htmlFor="website">Website</label>
        <input id="website" {...register('website')} />
        {errors.website && <span>{errors.website.message}</span>}
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" {...register('username')} />
        {errors.username && <span>{errors.username.message}</span>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register('password')} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <Button type="submit">Save Password</Button>
    </form>
  );
}
