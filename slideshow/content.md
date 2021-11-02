class: center, middle
.header[![iroco-logo](images/iroco.svg)]

# Les tests de charge
une boussole pour l'architecte ?

<img height="200" src="images/aaron-burden-NXt5PrOb_7U-unsplash.jpg"/>
---
class: center, middle
.header[![iroco-logo](images/iroco.svg)]

<h3>D'où je parle ?</h3>
<img src="images/zx81.jpg" width="750px"/>
---
class: center, middle
.header[![iroco-logo](images/iroco.svg)]

# "*Sans mesure, aucune amélioration n'est possible*"
      -- Lord Kelvin

---
name: content
.header[![iroco-logo](images/iroco.svg)]
.spacer[]

# Des questions
--
count: false
* lequel de tel ou tel framework Javascript est plus performant ? 
--
count: false
* quel langage utiliser pour être le plus efficace côté serveur ?
--
count: false
* est-ce qu'il faut faire du rendu serveur, du rendu client du cache, du pré-rendu ?
--
count: false
* pour mon service de calendrier/contact vaut-il mieux un stockage en BDD ou en fichier sur disque ?
--
count: false
* cache serveur ou cache client ?
--
count: false
* vaut-il mieux une application native ou une app web ?
--
count: false
* quelles différences entre la programmation asynchrone et synchrone ?
* etc.
---
class: center, middle
.header[![iroco-logo](images/iroco.svg)]

# Benchmark Client Web

---
class: middle
.header[![iroco-logo](images/iroco.svg)]

# Objectif

* quelles sont les différences de performance entre vuejs/react/svelte ?
  * ajouter un outil à notre boite à outils
  * faire un choix de frameworks web JS

---
class: middle
.header[![iroco-logo](images/iroco.svg)]

# Architecture

<img src="images/jmeter-selenium.png" height="400px"/>
---
class: middle
.header[![iroco-logo](images/iroco.svg)]
<img src="https://jmeter.apache.org/images/logo.svg"/>

* injecteur écrit en java (déployable sur plusieurs noeuds)
* UX un peu "brut"
* dernière version plus design mais des concepts à découvrir
* plein de plugins dont [WebDriver](https://jmeter-plugins.org/wiki/WebDriverTutorial/)

cf https://jmeter.apache.org/
---
class: middle
.header[![iroco-logo](images/iroco.svg)]

<a href="https://www.selenium.dev/">
  <svg alt="selenium-logo" data-name="Selenium Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 139.38 34"><defs><style>.cls-selenium_logo{fill:#fff}</style></defs><title>Selenium</title><path class="cls-selenium_logo" d="M46.2 26.37a18.85 18.85.0 01-2.57-.2 25 25 0 01-2.74-.53v-1.39a25.31 25.31.0 002.71.53 18 18 0 002.5.2 5.51 5.51.0 003.29-.84 2.79 2.79.0 001.14-2.39 2.85 2.85.0 00-1.24-2.49A6 6 0 0048 18.55q-.78-.29-1.67-.55A15.93 15.93.0 0144 17.13a5.92 5.92.0 01-1.58-1.05 3.6 3.6.0 01-.9-1.34A5 5 0 0141.23 13a4.46 4.46.0 01.41-1.93 4.31 4.31.0 011.17-1.5 5.26 5.26.0 011.82-1A8 8 0 0147 8.28a20.51 20.51.0 014.41.57v1.42a20 20 0 00-2.23-.44 15.2 15.2.0 00-2-.15 4.86 4.86.0 00-3.08.9A2.9 2.9.0 0042.88 13a3.25 3.25.0 00.21 1.21 2.61 2.61.0 00.7 1 4.83 4.83.0 001.27.79 14.31 14.31.0 002 .68q1.11.33 2.06.71a6.21 6.21.0 011.65.94 4.09 4.09.0 011.1 1.38 4.54 4.54.0 01.4 2 4.15 4.15.0 01-1.56 3.48A7.16 7.16.0 0146.2 26.37z"></path><path class="cls-selenium_logo" d="M60.62 26.32a5.46 5.46.0 01-4.28-1.62A6.9 6.9.0 0154.88 20a7.8 7.8.0 011.43-5 5 5 0 014.14-1.75 4.24 4.24.0 013.47 1.43A6.48 6.48.0 0165.1 18.8q0 .54.0.92a3.22 3.22.0 01-.09.64H56.44a5.39 5.39.0 001.17 3.5A4.18 4.18.0 0060.8 25a10.52 10.52.0 001.82-.17 11.77 11.77.0 001.93-.52l.12 1.27a10.68 10.68.0 01-2 .55A11.47 11.47.0 0160.62 26.32zM60.4 14.43q-3.68.0-3.94 4.74h7.15a6.49 6.49.0 00-.78-3.63A2.76 2.76.0 0060.4 14.43z"></path><path class="cls-selenium_logo" d="M68.64 7h1.58V26.11H68.64z"></path><path class="cls-selenium_logo" d="M79.56 26.32a5.46 5.46.0 01-4.28-1.62A6.9 6.9.0 0173.83 20a7.8 7.8.0 011.43-5 5 5 0 014.14-1.75 4.24 4.24.0 013.47 1.43A6.48 6.48.0 0184 18.8q0 .54.0.92a3.22 3.22.0 01-.09.64H75.38a5.4 5.4.0 001.17 3.5A4.18 4.18.0 0079.75 25a10.52 10.52.0 001.82-.17 11.8 11.8.0 001.93-.52l.12 1.27a10.68 10.68.0 01-2 .55A11.47 11.47.0 0179.56 26.32zm-.21-11.89q-3.68.0-3.94 4.74h7.15a6.49 6.49.0 00-.78-3.63A2.76 2.76.0 0079.35 14.43z"></path><path class="cls-selenium_logo" d="M87.51 13.37h1.32l.12 1.49h.12q.94-.45 1.72-.78t1.43-.54a8.42 8.42.0 011.2-.31 6.54 6.54.0 011.1-.09A3.3 3.3.0 0197 14a3.63 3.63.0 01.83 2.63v9.51H96.24v-9a3 3 0 00-.55-2 2.18 2.18.0 00-1.69-.6 7.25 7.25.0 00-2.24.41 20.1 20.1.0 00-2.67 1.12v10H87.51z"></path><path class="cls-selenium_logo" d="M102.75 10.52a.93.93.0 01-1.06-1 1.06 1.06.0 012.12.0.93.93.0 01-1.06 1zm-.8 2.85h1.58V26.11h-1.58z"></path><path class="cls-selenium_logo" d="M110.81 26.34q-3.14.0-3.14-3.47v-9.5h1.58v9a3.16 3.16.0 00.48 2 1.92 1.92.0 001.59.6 6.83 6.83.0 002.48-.48q1.25-.48 2.59-1.14V13.37H118V26.11h-1.32l-.12-1.58h-.09l-1.73.81q-.74.34-1.38.57a7.9 7.9.0 01-1.23.33A7.34 7.34.0 01110.81 26.34z"></path><path class="cls-selenium_logo" d="M122.18 13.37h1.3l.14 1.49h.09a19.53 19.53.0 012.58-1.31 5.51 5.51.0 012-.41 2.83 2.83.0 013 1.77h.12q.8-.5 1.45-.83a12.61 12.61.0 011.2-.54 6.17 6.17.0 011-.31 5.18 5.18.0 011-.09 3.3 3.3.0 012.45.84 3.63 3.63.0 01.83 2.63v9.51h-1.56v-9a2.9 2.9.0 00-.55-2 2.21 2.21.0 00-1.69-.59 5.14 5.14.0 00-1.78.38A14.45 14.45.0 00131.6 16v10.1H130v-9a2.9 2.9.0 00-.55-2 2.21 2.21.0 00-1.69-.59 5.24 5.24.0 00-1.86.4A14 14 0 00123.76 16V26.11h-1.58z"></path><path class="cls-selenium_logo" d="M21.45 21.51a2.49 2.49.0 00-2.55 2.21.08.08.0 00.08.1h4.95a.08.08.0 00.08-.09 2.41 2.41.0 00-2.56-2.22z"></path><path class="cls-selenium_logo" d="M32.06 4.91 21.56 16.7a.32.32.0 01-.47.0l-5.36-5.53a.32.32.0 010-.4L17.5 8.5a.32.32.0 01.52.0l3 3.32a.32.32.0 00.49.0L29.87.36A.23.23.0 0029.69.0H.25A.25.25.0 000 .25v33.5A.25.25.0 00.25 34h32a.25.25.0 00.25-.25V5.06A.23.23.0 0032.06 4.91zm-23 25.36a8.08 8.08.0 01-5.74-2 .31.31.0 010-.41l1.25-1.75A.31.31.0 015 26a6.15 6.15.0 004.2 1.64c1.64.0 2.44-.76 2.44-1.56.0-2.48-8.08-.78-8.08-6.06.0-2.33 2-4.27 5.32-4.27a7.88 7.88.0 015.25 1.76.31.31.0 010 .43L12.9 19.65a.31.31.0 01-.45.05 6.08 6.08.0 00-3.84-1.32c-1.28.0-2 .57-2 1.41.0 2.23 8.06.74 8.06 6C14.67 28.33 12.84 30.27 9.05 30.27zM26.68 25.4a.27.27.0 01-.28.28H19a.09.09.0 00-.08.1 2.81 2.81.0 003 2.32 4.62 4.62.0 002.56-.84.27.27.0 01.4.06l.9 1.31a.28.28.0 01-.06.37 6.67 6.67.0 01-4.1 1.28 5.28 5.28.0 01-5.57-5.48 5.31 5.31.0 015.4-5.46c3.11.0 5.22 2.33 5.22 5.74z"></path></svg>
</a>

* suite d'outils de test d'app Web
* usage principal : tests d'acceptance (boite noire à partir du navigateur)
* WebDriver permet de piloter un navigateur (FF, Chrome, ...)

cf https://www.selenium.dev/
---
class: middle
.header[![iroco-logo](images/iroco.svg)]

# Web Vitals

*mesure ce qui se passe dans le navigateur (rendu, délais avant interractions...)*

<img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZZU8Z7TMKXmzZT2mCjJU.svg" width="200px"/>
<img src="https://webdev.imgix.net/vitals/fid_ux.svg" width="200px"/>
<img src="https://webdev.imgix.net/vitals/cls_ux.svg" width="200px"/>

see https://web.dev/vitals/

---
class: middle, center
.header[![iroco-logo](images/iroco.svg)]

# Demo

---
class: middle
.header[![iroco-logo](images/iroco.svg)]

# Résultats (1)

<img src="../reports/03-run-2021-03-30/bench-03-graph.png" width="500px" />

---
class: middle
.header[![iroco-logo](images/iroco.svg)]

# Résultats (2)

<img src="../reports/05-run-2021-03-30/analytics-react.png" width="300px" />

<img src="../reports/05-run-2021-03-30/analytics-vuejs.png" width="300px" />


---
class: center, middle
.header[![iroco-logo](images/iroco.svg)]

# Benchmark Serveur
---
class: middle
.header[![iroco-logo](images/iroco.svg)]

# Objectif

* y a-t-il des différences entre Rust et Python en asynchrone ?
  * ajouter un outil à notre boite à outils
  * faire un choix de langage
---
class: middle
.header[![iroco-logo](images/iroco.svg)]

<img src="https://httpd.apache.org/docs/2.4/images/feather.png" width="200px"/>

```shell
$ ab -n 10000 -c 8 localhost:8000/contacts/1
```
---
class: middle, center
.header[![iroco-logo](images/iroco.svg)]

# Demo

---
class: middle
.header[![iroco-logo](images/iroco.svg)]
# Résultats (1)

<img src="images/CPU_xps_top.png" width="750px"/>
---
class: middle
.header[![iroco-logo](images/iroco.svg)]
# Résultats (2)
Puissance en microwatts pour Python | Rust

<img src="images/python_power.png" width="250px"/>
<img src="images/rust_power.png" width="250px"/>
---
class: middle
.header[![iroco-logo](images/iroco.svg)]
# Ce que nous avons appris

* tester le plus petit élément significatif
* la plupart du temps on est surpris
* coûte cher, ROI difficile à mesurer
* source d'apprentissage
---
class: middle
.header[![iroco-logo](images/iroco.svg)]

# Et ensuite ?

* faire un/des article(s) expliquant notre démarche/avoir des retours
* continuer sur les tests appli natives
* autres critères de comparaison:
    * compatibilité avec "vieux" navigateur/mobile
    * taille livrables
    * nombre lignes de code
* liens avec consommation/énergie ?
* "industrialiser" l'utilisation
---
class: middle
.header[![iroco-logo](images/iroco.svg)]

# Liens

* présentation réalisée avec [remark](https://remarkjs.com)
* https://jmeter.apache.org/
* https://www.selenium.dev/
* https://web.dev/vitals/
* benchmark frameworks js : https://www.stefankrause.net/js-frameworks-benchmark8/table.html
* https://blog.iroco.co/