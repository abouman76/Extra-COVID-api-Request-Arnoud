// [x] HTML en JS files maken.
// [x] JavaScript file linken.
// [x] NPM init.
// [x] git init (zorg wel voor een git repository)
// [x] .gitignore maken.
// [x] AXIOS installeren. -> npm install axios _(library)_
// [x] AXIOS script linken.
// [x] Een async function maken en **aanroepen**!
// [] Request maken met AXIOS.
// [] Afwachten tot de data er is.
// [ ] Data weergeven in de DOM.
//     - [] Lijst maken met een id.
//     - [] Lijst selecteren.
//     - [ ] Voor elke element in de array.
//          - [] Een li aanmaken.
//          - [ ] textContent toevoegen.
//          - [ ] li appenden.

async function covidInformation() {
    const responseCovid = await axios.get(
        "https://covid-api.mmediagroup.fr/v1/cases?country=Netherlands"
    );
    console.log("CovidAPI?", responseCovid);


}

covidInformation();