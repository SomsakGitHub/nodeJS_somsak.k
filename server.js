const {vaccineList, getNextID} = require('./mockData/global');
const express = require('express');
const app = express();

app.use(express.json());

// app.get('/', function (req, res) {
//   res.send('Hello World somsak')
// });

// app.get('/vaccines', (req, res) => {
//     res.json({
//         msg: "GET vaccines somsak"
//     })
// });

//path => vaccines/1
// app.get('/vaccines/:id', (req, res) => {

//     const id = req.params.id

//     // res.json({
//     //     msg: "GET vaccines somsak " + id
//     // })

//     res.json({
//         msg: `GET vaccines by ${id}`
//     })
// });

//query => vaccines?id=1
// app.get('/vaccines', (req, res) => {

//     const id = req.query.id

//     res.json({
//         msg: `GET vaccines by ${id}`
//     })
// });

app.get('/vaccines', (req, res) => {

    const id = req.query.id

    const vaccine  = vaccineList.find(f => f.id == id);

    if (vaccine){
        res.status(200).json(vaccine);
    }else{
        res.status(404).end();
    }
    
});

// app.post('/vaccines', (req, res) => {

//     // const data = {
//     //     code: "sv",
//     //     name: "somsak vaccines",
//     //     ef: 99.99
//     // }

//     const {code, name, ef} = req.body;

//     res.json({
//        code,
//        name,
//        ef
//     })
// });

app.post('/vaccines', (req, res) => {

    const {code, name, ef} = req.body;
    const newID = getNextID();

    vaccineList.push({
        id: newID,
       code,
       name,
       ef
    })

    res.redirect(`/vaccines?id=${newID}`)

    // res.json({
    //    code,
    //    name,
    //    ef
    // })
});

// app.put('/vaccines', (req, res) => {

//     const id = req.query.id;

//     res.json({
//        code,
//        name,
//        ef
//     })
// });

app.put('/vaccines', (req, res) => {

    const id = req.query.id;
    const {code, name, ef} = req.body;

    const index = vaccineList.findIndex(f => f.id == id);

    if (index > 0){
        vaccineList[index].code = code
        vaccineList[index].name = name
        vaccineList[index].ef = ef

        res.status(200).json(vaccineList);
    }else{
        res.status(404).end();
    }
});

app.listen(3000);