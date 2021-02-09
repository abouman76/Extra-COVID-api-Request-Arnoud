// [x] HTML en JS files maken.
// [x] JavaScript file linken.
// [x] NPM init.
// [x] git init (zorg wel voor een git repository)
// [x] .gitignore maken.
// [x] AXIOS installeren. -> npm install axios _(library)_
// [x] AXIOS script linken.
// [x] Een async function maken en **aanroepen**!
// [x] Request maken met AXIOS.
// [x] Afwachten tot de data er is.
// [ ] Data weergeven in de DOM.
//     - [x] Lijst maken met een id.
//     - [x] Lijst selecteren.
//     - [ ] Voor elke element in de array.
//          - [] Een li aanmaken.
//          - [ ] textContent toevoegen.
//          - [ ] li appenden.

async function covidInformation() {
    const responseCovid = await axios.get(
        "https://covid-api.mmediagroup.fr/v1/cases?country=Netherlands"
    );
    // console.log("CovidAPI?", responseCovid);

    const dataCovidApi = Object.entries(responseCovid.data);
    // console.log("OBJECT Key?", dataCovidApi);

    const covidByProvence = document.getElementById("covid-by-province");
    // console.log(covidByProvence);

    // for (const entries of dataCovidApi) {
    //     console.log("FOR-Loop 1 voor 1?", dataCovidApi); // logt alles!
    // }

    for (const [dataCovidProvince, data] of dataCovidApi) {
        // console.log("1 voor 1?", dataCovid, data);
        const confirmdCovid = `${dataCovidProvince} - ${data.confirmed} gevallen`;
        // console.log("Bevestigd", confirmdCovid);
        const recoveredCovid = `${data.recovered} mensen zijn hersteld.`;
        // console.log("Herstelde mensen:", recoveredCovid);

        const covidConfirmed = document.createElement("li");
        covidConfirmed.textContent = `${dataCovidProvince} - ${data.confirmed} Covid gevallen`;

        covidByProvence.appendChild(covidConfirmed);

        const covidRecovered = document.createElement("p");
        // console.log("Extra li-element?", covidRecovered);
        covidRecovered.textContent = `${data.recovered} mensen zijn hersteld van Covid.`;

        covidByProvence.appendChild(covidRecovered);
    }


}

covidInformation();