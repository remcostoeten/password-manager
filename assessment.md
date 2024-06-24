## Informatie, gedachtengang en motivatie

Ik heb gekozen voor NextJS aangezien ik hier prive eigenlijk alles mee bouw. Aangezien het een demo app is leek mij dit het uitstekende moment om het eens te proberen met de nieuwe compiler van React 19. Idem voor next15. TypeScript voor obvious reasons.

Ik weet dat UI geen vereiste is, maar ik vind UI werk leuk, en dit is een feature die ik wellicht in de toekomst wil uitbreiden voor mijn eigen prive dashboard. De basis UI heb ik gescaffold via v0.dev, dus daar zit vrijwel geen tijd in. UI components zijn van Shadcn.

Ik gebruik eigenlijk altijd dezelfde architectuur voor mijn projecten die er als volgt uit ziet:

```bash
tree
├── a.sh
└── src
    ├── app
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── somepage
    │       ├── components
    │       │   └── nested-colocated-component.tsx
    │       └── page.tsx
    ├── components
    │   └── somecomp.tsx
    ├── core
    │   ├── config
    │   │   └── siteConfig.ts
    │   ├── server
    │   │   └── db.ts
    │   └── utils
    ├── next-config.ts
    └── readme.md
```

De app maakt gebruik van local storage als opslag plek. Voor form validatie heb ik Zod gebruikt, ook omdat dit goed met typescript werkt doordat het types genereerd.

De api call heb ik via een server action gedaan. Makkelijke manier om gewoo een functie te schrijven en geen zware useEffects te hebben. Api is opgenomen in de form en verder vewerkt middels een lagenda op de front-end. Ik had wat problemen met het fetchen van jullie pastebin data (cors?) dus heb de api zelf gehost in deze repo, maar gewoon de zelfde api call gedaan als ik naar pastebin zou doen.

Ik heb niet bijzonder veel ervaring met testen. Daarnaast (heb ik het idee) dat veel tests overbodig zijn door de aard van de business logic. TypeScript vangt de meeste errors al op, daarnaast wordt de data gevalideerd door Zod wat vrijwel alle business logica dekt. Testen is een ander verhaal waneer je met complexe calculatie (medicatie doseringen, transacties, etc) te maken hebt. Ik heb een test geschreven die hier bekeken kan worden `src/components/password-manager/NewEntryForm.test.tsx` en geraaid kan worden door `ppnm jest`

Als ik iets meer tijd had dan had ik wat UI dingen willen oplossen zoals layout shift wanneer een password wordt getoggled. Idem voor layout shift terwijl alles aan het laden is, in de vorm van een skeleton of iets dergelijks. De componenten hadden wellicht iets kleiner gekund, types wat cleaner d.m.v. generics. Maar volgens mij dekt de huidige codebase de lading prima.

Live demo valt hier te bekijken [https://password-manager.remcostoeten.com/](https://password-manager.remcostoeten.com/).

Al met al een klein werkdagje aan gespendeerd qua duratie gok ik zo. (Ben op meerdere momenten verspreid over een aantal dagen bezig geweest).