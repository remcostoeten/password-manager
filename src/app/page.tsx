import DataTable from '@/components/shells/DataTable';
import { pageData } from '@/core/data/password-data';
import AddNewDialog from '@/components/shells/AddNewDialog';

const columns = ['Website', 'Username', 'Password', 'Actions'];

export default function Page() {
  return (
    <>
      <main className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Saved Passwords</h2>
          <AddNewDialog />         </div>
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <DataTable columns={columns} data={pageData} />
        </div>
      </main>
    </>
  );
}