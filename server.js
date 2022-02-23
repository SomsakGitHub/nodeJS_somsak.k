const {vaccineList, getNextID} = require('./mockData/global');
const express = require('express');
const app = express();
const config = require('./core/config');

app.use(express.json());

app.route('/vaccines')
.get((req, res) => {

    const id = req.query.id

    const vaccine  = vaccineList.find(f => f.id == id);

    if (!id){
        res.status(200).json(vaccineList);
    }else{
        if (vaccine){
            res.status(200).json(vaccine);
        }else{
            res.status(404).end();
        }
    }
})
.post((req, res) => {

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
})
.put((req, res) => {

    const id = req.query.id;
    const {code, name, ef} = req.body;

    const index = vaccineList.findIndex(f => f.id == id);

    if (index > 0){
        vaccineList[index].code = code
        vaccineList[index].name = name
        vaccineList[index].ef = ef

        res.status(200).json({
            vaccineList: vaccineList,
            des: "Update data successfully."
        });
    }else{
        res.status(404).json({
            des: "No update data found."
        });
    }
})
.delete((req, res) => {

    const id = req.query.id;
    const index = vaccineList.findIndex(f => f.id == id);

    if (index > 0){
        vaccineList.splice(index, 1)
        res.status(200).json(vaccineList);
    }else{
        res.status(404).json({
            des: "No delete data found."
        });
    }
});

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

// app.get('/vaccines', (req, res) => {

//     const id = req.query.id

//     const vaccine  = vaccineList.find(f => f.id == id);

//     if (!id){
//         res.status(200).json(vaccineList);
//     }else{
//         if (vaccine){
//             res.status(200).json(vaccine);
//         }else{
//             res.status(404).end();
//         }
//     }
// });

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

// app.post('/vaccines', (req, res) => {

//     const {code, name, ef} = req.body;
//     const newID = getNextID();

//     vaccineList.push({
//         id: newID,
//        code,
//        name,
//        ef
//     })

//     res.redirect(`/vaccines?id=${newID}`)

//     // res.json({
//     //    code,
//     //    name,
//     //    ef
//     // })
// });

// app.put('/vaccines', (req, res) => {

//     const id = req.query.id;

//     res.json({
//        code,
//        name,
//        ef
//     })
// });

// app.put('/vaccines', (req, res) => {

//     const id = req.query.id;
//     const {code, name, ef} = req.body;

//     const index = vaccineList.findIndex(f => f.id == id);

//     if (index > 0){
//         vaccineList[index].code = code
//         vaccineList[index].name = name
//         vaccineList[index].ef = ef

//         res.status(200).json({
//             vaccineList: vaccineList,
//             des: "Update data successfully."
//         });
//     }else{
//         res.status(404).json({
//             des: "No update data found."
//         });
//     }
// });

// app.delete('/vaccines', (req, res) => {

//     const id = req.query.id;
//     const index = vaccineList.findIndex(f => f.id == id);

//     if (index > 0){
//         vaccineList.splice(index, 1)
//         res.status(200).json(vaccineList);
//     }else{
//         res.status(404).json({
//             des: "No delete data found."
//         });
//     }
// });

app.get('/getAppName', (req, res) => {
    const result = {
        appName: config.appName
    }
    res.json(result)
    
});

app.listen(3000);