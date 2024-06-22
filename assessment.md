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

De app maakt gebruik van local storage.

.... to be continued