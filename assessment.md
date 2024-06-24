## Informatie, gedachtengang en motivatie

Ik heb gekozen voor Next.js, aangezien ik hier privé eigenlijk alles mee bouw. Aangezien het een demo-app is, leek mij dit het uitstekende moment om het eens te proberen met de nieuwe compiler van React 19. Idem voor Next 15. TypeScript heb ik gekozen om voor de hand liggende redenen.

Ik weet dat UI geen vereiste is, maar ik vind UI-werk leuk en dit is een feature die ik wellicht in de toekomst wil uitbreiden voor mijn eigen privé-dashboard. De basis-UI heb ik gescaffold via v0.dev, dus daar zit vrijwel geen tijd in. De UI-componenten zijn van Shadcn.

Ik gebruik eigenlijk altijd dezelfde architectuur voor mijn projecten die er als volgt uitziet:

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

De app maakt gebruik van local storage als opslagplek. Voor form validatie heb ik Zod gebruikt, ook omdat dit goed met TypeScript werkt doordat het types genereert.

De API-call heb ik via een server action gedaan. Dit is een makkelijke manier om gewoon een functie te schrijven en geen zware useEffects te hebben. De API is opgenomen in de form en verder verwerkt middels een legenda op de front-end. Ik had wat problemen met het fetchen van jullie pastebin data (cors?), dus heb de API zelf gehost in deze repo, maar gewoon dezelfde API-call gedaan als ik naar pastebin zou doen.

Ik heb niet bijzonder veel ervaring met testen. Daarnaast heb ik het idee dat veel tests overbodig zijn door de aard van de business logic. TypeScript vangt de meeste errors al op, daarnaast wordt de data gevalideerd door Zod wat vrijwel alle businesslogica dekt. Testen is een ander verhaal wanneer je met complexe calculaties (medicatie doseringen, transacties, etc.) te maken hebt. Ik heb een test geschreven die hier bekeken kan worden src/core/server/actions.test.js, die niet succesvol draait. Het lijkt erop dat er iets in de configuratie/omgeving niet helemaal lekker zit. Ik heb het niet verder uitgezocht.

Als ik iets meer tijd had, dan had ik wat UI-dingen willen oplossen zoals layout shift wanneer een password wordt getoggled. Idem voor layout shift terwijl alles aan het laden is, in de vorm van een skeleton of iets dergelijks. De componenten hadden wellicht iets kleiner gekund, types wat cleaner d.m.v. generics. Maar volgens mij dekt de huidige codebase de lading prima.

De live demo valt hier te bekijken: https://password-manager.remcostoeten.com/.

Al met al heb ik er een klein werkdagje aan gespendeerd qua duur, gok ik zo. (Ben op meerdere momenten verspreid over een aantal dagen bezig geweest).