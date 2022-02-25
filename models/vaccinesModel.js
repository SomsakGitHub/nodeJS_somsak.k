const {vaccineList, getNextID} = require('../mockData/global');

function getVaccines(){
    return true
}

function getVaccinesById(id){
    return vaccineList.find(f => f.id == id);
}

function addVaccines(code, name, ef){

    let newID = null;

    try {
        const exist = vaccineList.find(id = id.code == code);

        if (!exist){
            const newID = getNextID();

            vaccineList.push({
                id: newID,
                code,
                name,
                ef
            })
        }
    }catch (error){
        throw error;
    }

    return newID;
}

function updateVaccines(id, code, name, ef){
    let updated = false;

    try {
        const index = vaccineList.findIndex(f => f.id == id);

        if (index > 0){
            vaccineList[index].code = code;
            vaccineList[index].name = name;
            vaccineList[index].ef = ef;

            updated = true;
        }
    } catch (error) {
        throw error;
    }

    return updated;
}

function deleteVaccines(id){
    let deleted = false;

    try {
        const index = vaccineList.findIndex(f => f.id == id);

        if (index > 0){
            vaccineList.splice(index, 1);
            deleted = true;
        }
    } catch (error) {
        throw error;
    }
    return deleted;
}

module.exports = {
    getVaccines,
    getVaccinesById,
    addVaccines,
    updateVaccines,
    deleteVaccines
}