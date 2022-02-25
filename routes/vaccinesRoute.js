const router = require('express').Router();
const controller = require('../controllers/vaccinesController')

router.get('', controller.getVaccines)
router.post('', controller.addVaccines)
router.put('', controller.updateVaccines)
router.delete('', controller.deleteVaccines)

// router.get((req, res) => {

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
// })
// router.post((req, res) => {

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
// })
// router.put((req, res) => {

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
// })
// router.delete((req, res) => {

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

module.exports = router;