const mockModel = require('../models/vaccinesModel');

function getVaccines(req, res){
    const id = req.query.id

    const vaccine  = mockModel.getVaccinesById(f => f.id == id);

    if (!id){
        res.status(404).json({mes: "id not found"});
    }else{
        if (vaccine){
            res.status(200).json(vaccine);
        }else{
            res.status(404).end();
        }
    }
}

function addVaccines(req, res){
    const {code, name, ef} = req.body;
    
    const newID = mockModel.addVaccines(code, name, ef)

    if (newID){
        const result = mockModel.getVaccinesById(newID)

        if (result){
            return res.status(200).json(result);
        }else{
            return res.status(404).json({mes: "No data found"});
        }
    }else{
        return res.status(404).json({mes: "The vaccines code exist. No add data found"});
    }
}

function updateVaccines(req, res){
    const id = req.query.id;
    const {code, name, ef} = req.body;

    const update = mockModel.updateVaccines(id, code, name, ef)

    if (update){
        const result = mockModel.getVaccinesById(id)

        if (result){
            return res.status(200).json(result);
        }else{
            return res.status(404).json({mes: "No data found"});
        }
    }else{
        return res.status(404).json({mes: "The update data found."});
    }
}

function deleteVaccines(req, res){
    const id = req.query.id;

    if(!id){
        return res.status(400).json({mes: "ID is required"});
    }

    const deleted = mockModel.deleteVaccines(id)

    if (deleted){
        return res.status(200).end();
    }else{
        return res.status(404).json({mes: "The update data found."});
    }
}

module.exports = {
    getVaccines,
    addVaccines,
    updateVaccines,
    deleteVaccines
}