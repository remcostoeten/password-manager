import { Suspense } from 'react'
import AddNewEntryButton from './AddNewEntryButton.tsx'
import ClientList from './ClientList'
import VaultEntries from './VaultEntries'

export default function VaultManager() {
  return (
    <>
      <div className="flex my-8 justify-end w-full">
        <AddNewEntryButton />
      </div>
      <Suspense fallback={<div>Loading clients...</div>}>
        <ClientList />
      </Suspense>
      <Suspense fallback={<div>Loading vault entries...</div>}>
        <VaultEntries />
      </Suspense>
    </>
  )
}