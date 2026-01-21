# 🤖 JavaScript i praktiken - Introduktion till dependencies

I denna övning kommer du att testa på att installera och använda dependencies. Du får också en förhandstitt på hur ett modulärt JavaScript-projekt kan se ut. Projektet kommer med ett simpelt UI, ett fotogalleri/portfolio, som du kan ändra till precis vad du vill. Du får också prova på hur det är att jobba med Vite - En bundler som tar alla dina JavaScript-, CSS- och andra filer och packar ihop dem till en snabb, effektiv version som webbläsaren kan ladda enkelt. Det är standard att använda bundlers inom frontendutveckling.

Det huvudsakliga syftet med denna uppgift är att lära sig att installera och använda dependencies. Om detta är dependencies som enbart har med JavaScript att göra eller på något sätt påverkar UI:t är upp till dig.

## 👩‍💻 Steg

1. Gå igenom stegen i `npm init`
2. Öppna `package.json`
3. Ändra type till `"module"`
4. Installera [vite](https://www.npmjs.com/package/vite) som dev dependency
5. Ta bort eventuella skript och lägg till `dev`, `build`och `preview`. script-delen av `package.json` bör se upå följande sätt:

   ```json
   "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
   }
   ```

6. Kör `npm run dev` och följ länken i terminalen (Oftast `http://localhost:5174/`). Du har nu spunnit upp en lokal utvecklarmiljö för din Vite-app. Precis som Live Server använder Vite en HMR (Hot reload module) som laddar om varje gång du sparar en ändring.
7. Nu är det dags att installera och använda dependencies.

## 🖼️ Om du vill göra UI-ändringar

Det går att bygga vidare i `index.html` men det är start rekommenderat att bygga enskilda moduler som du sen appendar till `#app` i `main.js`(Så som redan har gjorts med existerande templates). Tänk på att hålla en städad och lättöverskådlig mapp- och filstruktur. Bygg med åtanken att en person som aldrig jobbat med det här projektet förut enkelt ska kunna sätta sig in i och jobba vidare på det.

## 📦 Dependencies (NPM-paket)

Sök exempelvis runt på [npmjs.com](https://npmjs.com) efter intressanta bibliotek eller använd några av förslagen nedan.

## Förslag på dependencies som har att göra med JavaScript-logik

### Lodash

Ett bibliotek fullt av nyttiga helper functions för olika logiska uträkningar och datahantering.

[Installation](https://www.npmjs.com/package/lodash)

[Dokumentation](http://lodash.com/docs/4.17.15)

### date-fns

date-fns tillhandahåller den mest omfattande, men ändå enkla och konsekventa uppsättningen av verktyg för att hantera datum i JavaScript.

[Installation](https://www.npmjs.com/package/date-fns)

[Dokumentation](https://date-fns.org/)

## Förslag på dependencies om man ändrar eller bygger vidare på UI:t

### GSAP

Ett av de kraftigaste och mest använda biblioteken för animationer. Går att använda till oändligt mycket.

[Installation](https://gsap.com/docs/v3/Installation/)

[Dokumentation](https://gsap.com/docs/v3/)

- [Saker man göra med GSAP](https://www.youtube.com/shorts/j2ds9beIs6I)
- [Installera och jobba med GSAP](https://youtu.be/6ZOWIEu9p_E?si=4Tm0iZFYknsWIXgn&t=101)
  - Titta igenom hela hans guide, inklusive "Create a Modern Preloader - Part 1 of 2" om du vill hämta mer inspiration från designen i klippet.

### Tailwind

Ett CSS-ramverk med en helt annan approach till styling där du slipper helt att skapa upp stylesheets, klasser och andra selektorer.

[Installation](https://tailwindcss.com/docs/installation/using-vite)

[Dokumentation](https://tailwindcss.com/docs/installation/using-vite)

_Tailwind nollställer webbläsarens egna styling. Detta kommer märkas tydligt på typografin. Du kan antingen skapa upp din egna styling template med `@layer base {}` eller använda mallen som följer med denna repo._

## 💡 Tips

- Du kan fortfarande konsollogga din kod men den kommer dyka upp i webbläsarens konsol då `node`-kommandot inte kan tolka projektets kod.
- Utnyttja Vites error handling och läs eventuella felmeddelanden som dyker upp i konsolen eller webbläsaren
