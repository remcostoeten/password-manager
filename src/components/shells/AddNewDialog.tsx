import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui";

export default function AddNewDialog() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Create New Password</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] darkbg-background dark:text-foreground">
        <DialogHeader>
          <DialogTitle>Create New Password</DialogTitle>
          <DialogDescription>Enter the details for your new password.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="website" className="text-right">
              Website
            </Label>
            <Input id="website" placeholder="Enter website name" className="col-span-3" />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input id="password" type="password" placeholder="Enter password" className="col-span-3" />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="company" className="text-right">
              Company
            </Label>
            <Select id="company">
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google">Google</SelectItem>
                <SelectItem value="amazon">Amazon</SelectItem>
                <SelectItem value="microsoft">Microsoft</SelectItem>
                <SelectItem value="apple">Apple</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="dark:bg-primary dark:text-primary-foreground">
            Save Password
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}