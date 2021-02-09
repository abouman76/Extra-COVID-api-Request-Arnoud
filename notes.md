https://covid-api.mmediagroup.fr/v1/cases?country=Netherlands
```js
<script src="node_modules/axios/dist/axios.min.js"></script>
```

Als je een project met axios request als github page wilt dan moet je axios.min.js verplaatsen.

**axios.min.js** verplaats je vanuit de node-modules naar een nieuwe map, bijvoorbeeld **assets**
Daarna moet je dit script toevoegen aan je HTML:
```js
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

of dit script:
```js
<script src="./assets/axios.min.js></script>"
```