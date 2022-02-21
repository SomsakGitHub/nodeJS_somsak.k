var vaccineList = [{
    id: 1,
    code: "SV",
    name: "Sinovac",
    ef: 50
},
{
    id: 2,
    code: "AZ",
    name: "AstraZeneca",
    ef: 90
},
{
    id: 3,
    code: "SP",
    name: "Sinopham",
    ef: 80
}
]

function getNextID(){
    const ids = vaccineList.map(m => m.id)
    return Math.max(...ids) + 1
}

module.exports = {
    vaccineList,
    getNextID
}