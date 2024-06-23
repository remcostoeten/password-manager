import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  passwordSchema,
  PasswordFormData,
} from '../../core/models/validationSchema';
import { Button, Input, Label } from '@/components/ui';
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
    <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
      <div className="flex flex-col">
        <Label htmlFor="website" className="mb-2 font-semibold">
          Website
        </Label>
        <Input
          id="website"
          {...register('website')}
          className="border p-2 rounded-md"
        />
        {errors.website && (
          <span className="text-red-500">{errors.website.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <Label htmlFor="username" className="mb-2 font-semibold">
          Username
        </Label>
        <Input
          id="username"
          {...register('username')}
          className="border p-2 rounded-md"
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <Label htmlFor="password" className="mb-2 font-semibold">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          {...register('password')}
          className="border p-2 rounded-md"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <Button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save Password
      </Button>
    </form>
  );
}
