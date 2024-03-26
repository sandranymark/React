# Kom igång med din första React App!

## Node
1. Gå till [nodejs.org](https://nodejs.org/en/download) för att ladda ner node.js.
2. Kör igång den nedladdade installationsfilen och följ instruktionerna.
3. Kontrollera att installationen gick bra genom att öppna upp valfri terminal och kör följande kommandon. Det spelar ingen roll vilken mapp du befinner dig i. Vid lyckad installtion bör versionsnumret dyka upp i terminalen.
    - ```node -version```
    - ```npm -version```

## Create React App
1. Öppna upp valfri terminal, i valfri mapp på datorn, och kör kommandot ```npm i -g create-react-app``` (Detta skall egentligen inte behövas, men ibland krånglar det om man inte har detta installerat). Stäng sedan ner din terminal. 
2. Gå till den mapp på din dator där du vill skapa din React App och öppna en ny terminal i den mappen.
3. Kör kommandot ```npx create-react-app <namnet på din app>``` exempelvis ```npx create-react-app cra-demo```. Detta kommmer att starta en installation av ditt projekt som kan ta en liten stund.
4. När installationen är färdig är det viktigt att vi hoppar in i vår projektmapp med kommandot ````cd <namnet på din app>```.
5. Städa upp lite i projektet genom att ta bort delar du inte vill använda dig av.
6. Starta din utvecklingsserver genom att i terminalen (viktigt att du nu står i rätt mapp!!!) köra kommandot ```npm start```.

## Create React med Vite
1. Öppna upp valfri terminal, i valfri mapp på datorn, och kör kommandot ```npm i -g vite```. Stäng sedan ner din terminal. 
2. Gå till den mapp på din dator där du vill skapa din React App och öppna en ny terminal i den mappen.
3. Kör kommandot ````npm create vite@latest``` för att skapa din app. Följ anvisningarna i terminalen för att välja namn på appen, vilket ramverk du vill köra i, samt vilket programmeringsspråk du vill använda (ange först namn, Välj React, och sedan JavaScript).
4. När installationen är färdig är det viktigt att vi hoppar in i vår projektmapp med kommandot ````cd <namnet på din app>```.
5. Kör kommandor ```npm i``` för att uppdatera ditt project med *node_modules*-mappen.
6. Städa upp lite i projektet genom att ta bort delar du inte vill använda dig av.
7. Starta din utvecklingsserver genom att i terminalen (viktigt att du nu står i rätt mapp!!!) köra kommandot ```npm run dev```.
