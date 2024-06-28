import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  passwordSchema,
  PasswordFormData,
} from "../../core/models/validationSchema";
import { Button, Input, Label } from "@/components/ui";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

type PasswordFormProps = {
  onSave?: (data: PasswordFormData) => void;
  clients: { name: string; color: string }[];
};

type VaultEntry = {
  website: string;
  username: string;
  password: string;
  client: string;
  color: string;
};

export function PasswordForm({ onSave, clients }: PasswordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmit = async (data: PasswordFormData) => {
    const currentVault = JSON.parse(
      localStorage.getItem("vaultEntries") || "[]",
    );

    const existingSiteIndex = currentVault.findIndex(
      (entry: VaultEntry) => entry.website === data.website,
    );

    if (existingSiteIndex >= 0) {
      console.error("A site with this name already exists.");
      toast("A site with this name already exists.");
      return;
    }

    if (onSave) {
      onSave(data);
    }

    toast("Entry saved successfully to the vault!");
  };

  const onError = (errors: FieldErrors<PasswordFormData>) => {
    console.log("Form errors:", errors);
    if (errors.password?.message) {
      toast(errors.password.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
      <div className="flex flex-col">
        <Label htmlFor="website" className="mb-2 font-semibold">
          Website
        </Label>
        <Input
          id="website"
          {...register("website")}
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
          {...register("username")}
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
          {...register("password")}
          className="border p-2 rounded-md"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <Label htmlFor="client" className="mb-2 font-semibold">
          Client
        </Label>
        <Select
          onValueChange={(value) => {
            const client = clients.find((client) => client.name === value);
            setValue("client", value);
            setValue("color", client?.color || "");
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a client" />
          </SelectTrigger>
          <SelectContent>
            {clients.map((client) => (
              <SelectItem key={client.name} value={client.name}>
                {client.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.client && (
          <span className="text-red-500">{errors.client.message}</span>
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
