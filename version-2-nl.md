## Versie twee

Aanvankelijk dacht ik dat mijn code best goed was; mede-communityleden in de tech-space vonden dit ook. Tests ontbraken, dat wist ik, maar dat kan niet alles zijn. Toen ik het slechte nieuws kreeg ben ik eens goed gaan kijken na er een paar dagen niet meebezig te zijn geweest. Plus de tijdsdruk van assesment was weg. Kwam toch vrij veel inconsistenties tegen en dingen die niet volgens best practices waren.

Deze week (4 jul, new Date() === 2 jul) een gesprek met hun lead en het idee is om mijn puntjes/oplossing te delen alvorens ik hun feedback/oplossing  krijg omte zien of ik in de lijn der verwachting ben en dus wel op de goede koers ben. Deze week

### Bevindingen

1 - Hoewel styling niet vereist was, is de modal niet toegankelijk en kan deze niet met de ESC-toets worden gesloten.
1,5 - De Tooltip van Shadcn had gewoon een HTML-dialog kunnen zijn, idem voor de modal. Alhoewel gemak ook iets waard is.

2 - Types kunnen consistenter zijn. Types of interfaces moeten niet worden gemengd. Ook zou Zod als type kunnen worden gebruikt. Ik hou ervan om types te co-locaten, niet om een types-map te hebben, behalve voor grote interfaces.

3 - De shells-directory zijn niet allemaal echte shells. Idealiter zouden ze alleen UI-componenten moeten zijn die props accepteren.

### Logica

4 -
`<Vault />` is het enige component die op de pagina wordt geladen, wat betekent dat de hele app client-side is. Dit elimineert een van de redenen waarom je (ik) voor Next hebt gekozen. Had net zo goed een vite app kunnen maken dan.

- Splits de app op in meerdere componenten
- Suspense de vault-componenten in home


<h5>Dit is de huidige vault</h5>

```tsx
<>
  <AddNewDialog
    isOpen={isOpen}
    onClose={toggleDialog}
    onSave={handleNewEntry}
    clients={clients}
  />
  {clients.length > 0 && (
    <LegendBar
      items={clients.map((client) => ({
        color: client.color,
        label: client.name,
        description: `Client: ${client.name}`,
      }))}
    />
  )}
  <DataTable
    vaultItems={vault}
    onDelete={handleDelete}
    clients={clients}
  />
</>
```

wat zou moeten zijn dit. Shells voor het renderen van de vault manager, logica gaat binnen die props wat server-side rendering mogelijk maakt.

```tsx
<PageWrapper>
  <AddNewDialog
    isOpen={isOpen}
    onClose={isOpen}
    onSave={onSave}
    clients={clients}
  />
  <LegendBar items={items} />
  <DataTable
    vaultItems={vaultItems}
    onDelete={onDelete}
    clients={clients}
  />
</PageWrapper>

```

5- Het fetchen in useEffect is niet nodig en kan op zoveel betere (en voor meer perfromance) manieren worden gedaan. De API-data staat op de server, dus waarom niet op de server blijven en de data daar fetchen in plaats van bij elke render een verzoek te doen?

5.5 - De functie met 'use server', oftewel een server action met een fetchData, is niet hoe actions in NextJS bedoeld zijn. Actions met de prefix 'use server' zijn altijd een POST-request, dus moeten worden gebruikt voor mutaties. Fetchen werkt, maar is niet de officiele voorkeur.

6- Local storage werkt prima. Maar ik had kunnen kiezen voor een robuustere oplossing zoals een state tool, ik ben erg fan van de DX van Zustand. Of een Cache tool zoals SWR. Al werkt dit prima, zou ik onderzoek naar moeten doen en Poc's draaien

To be continued..... maybe  