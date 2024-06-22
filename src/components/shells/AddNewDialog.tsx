'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  passwordSchema,
  PasswordFormData,
} from '../../core/models/validationSchema';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@/components/ui';
import { toast } from 'sonner';
import { useLocalStorage } from '@/core/hooks/useLocalStorage';

export default function AddNewDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  const [vaultEntries, setVaultEntries] = useLocalStorage<PasswordFormData[]>(
    'vault-entries',
    [],
  );

  const onSubmit = (data: PasswordFormData) => {
    setVaultEntries((prevEntries) => [...prevEntries, data]);
    toast('Entry saved successfully to the vault!');
  };

  const onError = (errors: any) => {
    console.log('Form errors:', errors);
    toast('Error saving entry to the vault!');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create New Password</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:bg-background dark:text-foreground">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <DialogHeader>
            <DialogTitle>Create New Password</DialogTitle>
            <DialogDescription>
              Enter the details for your new password.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="website" className="text-right">
                Website
              </Label>
              <Input
                id="website"
                {...register('website')}
                className="col-span-3"
              />
              {errors.website && <span>{errors.website.message}</span>}
            </div>
            <div>
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                {...register('username')}
                className="col-span-3"
              />
              {errors.username && <span>{errors.username.message}</span>}
            </div>
            <div>
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
                className="col-span-3"
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="dark:bg-primary dark:text-primary-foreground"
            >
              Save Password
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
