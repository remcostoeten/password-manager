## Version two

Like stated in the README, this was built for a code assessment as a medior React position. In the end, they were sadly enough actually searching for someone more senior, so they did not proceed with me after this assignment.

I initially thought my code was quite good; fellow community members of the tech space confirmed this. Tests were missing, but that can't be all. So I took a few days off and came to the conclusion that, indeed, I was missing way too many best practices and had inconsistencies. Here goes my attempt to make it better.

Not for the job, as they already said no, although I'll be having a call with their lead to walk me through what they thought of it. So if my upcoming v2 solution is near (or I hope better than) their feedback/solution, then that means I am capable and can get better.

### Took a couple of days off and came back with fresh eyes and noticed quite some inconsistencies.

Although styling was not required, the modal isn't accessible and can't close with the ESC key.
The Tooltip from Shadcn could have just been a html dialog, idem for the modal. Althrough convenience is also worth something.

Types can be more consistent. Types or interfaces should not be mixed up. Also, Zod could be used as a type. I like co-locating types, not having a types folder, except for huge interfaces.

The shells directory are not all true shells. They should ideally only be UI components which accept props.
ZSS
<Vault /> is the only component loaded on the page, which means the entire app is client-side. This eliminates one of the reasons you (I) chose Next.

 Split up the app into multiple components
 Suspense the vault components in home
 This is current vault

```tsx
<>
    <AddNewDialog
    isOpen={isOpen}
    onClose={toggleDialog}
    onSave={handleNewEntry}
    clients={clients}
    />
    </div>
    {clients.length > 0 && (
    <LegendBar
        items={clients.map((client) => ({
        color: client.color,
        label: client.name,
        description: `Client: ${client.name}`,
        }))}
    />
    )}
    <DataTable vaultItems={vault} onDelete={handleDelete} clients={clients} />
</>
```

which should be this. Shells for rendering the vault manager, logic goes inside those props which allows for server-side rendering

```tsx
<PageWrapper>
    <AddNewDialog
        isOpen={isOpen}
        onClose={isOpen}
        onSave={onSave}
        clients={clients}
    />
    <LegendBar items={items} />
    <DataTable vaultItems={vaultItems} onDelete={onDelete} clients={clients} />
</PageWrapper>
```

5) The fetching in useEffect is not needed and can be done in so many better (and more performant) ways. The API data is on the server, so why not stay on the server and fetch the data there instead of making a request on every render?
The function with 'use server' aka a server action with a fetchData is not how actions in NextJS are supposed to be used. Actions prefixed with 'use server' are always a POST request, thus should be used for mutations. Fetching works, but not preffered.

6) Local storage works fine. But I could've opted for a more robust solution like a a state tool, I very much like the DX of Zustand. Or a cache tool like SWR.