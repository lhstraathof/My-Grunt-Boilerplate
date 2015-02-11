#Front-end Development - Tools

##Default framework (boilerplate)

Om gebruik te kunnen maken van de default boilerplate heb je een aantal tools nodig:

###Software

 - MAC
	 - iTerm http://iterm2.com/
	 - xCode (appstore)
 - Windows
	 - 


 - Talen/Tools
	 - Ruby https://www.ruby-lang.org/en/documentation/installation/
	 - Rugy gem sass https://rubygems.org/gems/sass
 	 - Compass http://compass-style.org/install/
 	 - NodeJS - http://nodejs.org/ 
 	 - NPM
 	 - GruntJS http://gruntjs.com/getting-started

###Aanbevolen Plugins voor Sublime
 - Emmet
 - Hayaku

Voeg de volgende snippet toe aan je user_preferences om je search in sublime te versnellen:

    "folder_exclude_patterns": [
	  	".sass-cache"
  	]

###Starten

 1. Om te beginnen met de boilerplate moet je deze eerst downloaden:
    https://github.com/lhstraathof/My-Grunt-Boilerplate
 2. Pak deze op de gewenste locatie uit en hernoem de map "HTML"
 3. Via de terminal open je de map "HTML"
 4. Om de boilerplate te kunnen gebruiken moet je eerst de benodigde modules downloaden (dit doe je voor ieder project dat je voor het eerst op jouw computer opent)
 5. Dit doe je door deze via NPM te installeren. In de terminal waar je nog steeds de map "HTML" hebt geopent, type je het volgende: ***sudo npm install***. Vervolgens voer je het wachtwoord van de computer admin in. Het downloaden en installeren van de modules kan even duren.
 6. In de terminal nog steeds in de map "HTML" type je vervolgens ***grunt*** in. Als alles werkt krijg je geen error melding en zie je wat voor files aangemaakt zijn.
 7. Nu is het tijd om de server te starten en aan de slag te gaan. Dit doe je door het volgende in de terminal in te voeren: ***grunt dev***. Vervolgens kun je op de volgende url ontwikkelen: http://0.0.0.0:8000/

###Belangrijk!!
Zorg ervoor dat je svn client de mappen "node_modules" en ".sass-cache" negeert. Node modules hebben de gewoonte al svn files te bevatten (gaat dus errors geven). De sass cache is overbodig.

### Hoe nu verder?
Alles staat nu gereed en je wilt aan de slag, maar welke bestanden gebruik je?

**HTML**: Zoals je gewend bent bouw je je website volledig in ***index.html***. Alle links naar bestanden kun je beginnen met een "/" omdat we al een testserver draaien. Bekijk de eerste keer goed hoe de default links naar source ingesteld staan. Je zult vervolgens de structuur van css en js ook beter begrijpen.

**Werkbestanden**: Alle werkbestanden zoals: CSS, JS en Images staan in de map ***source***. Je werkt dan ook ***uitsluitend*** uit deze map. Grunt compiles/minified/concatinate deze files naar de root van je project in de mappen ***css***, ***js*** en ***img***.

**CSS**: Alle css wordt ingeladen in *"source/css/global.scss"* doormiddel van imports. Dit bestand wordt middels een modulaire structuur opgebouwd. Het is aan te raden jouw project verder in deze methode te bouwen. Hierdoor zijn de elementen die je bouwd makkelijk los aan te passen. Daarnaast kun je modules makkelijk kopiëren en gebruiken in andere projecten. -- De globale css instellingen kun je in "*_base/_config.scss*" vinden. -- Bekijk de losse onderdelen een keer goed, er zitten handige functies in (vooral in "*_base/_mixins.scss*").

De manier van css gebruik heet RSCSS, zie: https://github.com/rstacruz/rscss

**JS**: Alle js files worden minified in 1 bestand geplaatst. Behalve de files die conditioneel worden ingeladen (denk aan jQuery, Selectivizr en polyfills). Alle third-party plugins (zoals jquery.validation) plaats je in de map "*source/js/vendor/*". Ieder js bestand in deze map wordt automatisch toegevoegd aan het minimized productie bestand. Jouw maatwerk JS zet je in de file "*source/js/global.js*". Alle js bestanden die je in de map *source/js/* zet worden ook minimized naar het productie.min.js bestand.

**Images** 
Alle nieuwe afbeeldingen sla je op in de map *"source/img/*. Deze worden minified in de map *"img/"* geplaatst.

###JS validatie
Voor JS validatie gebruiken we Parsley, zie source/js/extra. (include ook validatie-js voor nl taal).

http://parsleyjs.org/

###JS Slider
Voor het gebruik van een slider, include: jquery glide, zie source/js/extra

http://glide.jedrzejchalubek.com/

###Aanpassen van 'test-omgeving server'
Mocht je bijvoorbeeld de test-server willen koppelen aan je localhost (php ontwikkel omgeving). Lees dan de documentatie op:

http://www.browsersync.io/docs/grunt/

###Bronnen voor het leren van Grunt.js
http://css-tricks.com/video-screencasts/130-first-moments-grunt/

http://24ways.org/2013/grunt-is-not-weird-and-hard/