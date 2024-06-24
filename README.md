# Password Manager

> **Note:** This is a demo and not for production. Passwords are not stored securely and/or hashed/encrypted.

An application made for a coding assignment. The goal is to have a client-side password manager showcasing my workflow and coding style.

As this is nothing for production, I opted to try out Next.js 15 with React 19 and its new compiler. While building and running, it does give some warnings, but it's still in beta; everything besides that seems to work fine.

Deployed version can be found [here](https://password-manager-remcostoeten.com/).

To run the application locally, you can follow the steps below.

```bash
git clone https://github.com/remco-stoeten/password-manager.git remcostoeten-password-manager
cd remcostoeten-password-manager
pnpm i # or npm i
pnpm dev # or npm run dev
```

When for some reason running locally gives you problems because of the --turbo flag, you can run pnpm dev-old instead to run without the turbo flag.

Built utilizing the following technologies:

- React 19 (beta, new compiler)
- TypeScript
- NextJS 15
- TailwindCSS
- Server actions
- Local storage

Using the following libraries:

- Shadcn for basic UI components
- Zod for validation
- Sonner (a clean toast API)
- Jest for testingr