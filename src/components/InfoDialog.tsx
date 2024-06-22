import { InfoIcon } from './icons';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

const InfoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <InfoIcon />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>DIJ Assessment-FE-Developer</DialogTitle>
        <DialogDescription>
          Bij DIJ werken we met JS of TS, React en implementeren we vaak REST
          API's. We zijn best nieuwsgierig hoe jij dat precies aanpakt.
          <br />
          <br />
          Afgezien van de opdracht zelf zijn er aantal dingen die we graag
          willen zien:
          <ul>
            <li>Maak gebruik van versiebeheer. Bij voorkeur git.</li>
            <li>
              Automatische Tests. Bijv feature tests, end-to-end tests of unit
              tests. Als je iets beters weet mag dat natuurlijk ook!
            </li>
            <li>
              Gebruik als basis React met JS of TS, je mag zelf kiezen welke je
              het fijnste vind. We zijn benieuwd waarom je voorkeur naar één van
              de twee uit gaat ;)
            </li>
          </ul>
          <br />
          Opdracht
          <br />
          Maak een simpele 'password manager'. De data hoeft niet door een
          backend verwerkt te worden, je mag alles gewoon lokaal opslaan. Wat we
          ongeveer verwachten:
          <ul>
            <li>Een pagina om een nieuw wachtwoord op te slaan</li>
            <li>
              Geef je wachtwoord een titel zodat je hem makkelijk terug kan
              vinden
            </li>
            <li>Wachtwoord invoeren</li>
            <li>
              Het zou handig zijn om wachtwoorden te kunnen koppelen aan
              klanten. Zo is het makkelijker om later wachtwoorden terug te
              vinden. Je kan hier onze 'api' aanroepen om de klanten op te
              halen: https://pastebin.com/raw/zSFTiVWr
            </li>
            <li>Een overzicht met alle opgeslagen wachtwoorden</li>
            <li>
              Eventueel zou het leuk zijn als items die gekoppeld zijn aan een
              klant de kleur van de klant krijgen, de kleur kan je uit de API
              ophalen
            </li>
            <li>Een opgeslagen wachtwoord kan weer bekeken worden</li>
          </ul>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default InfoDialog;
