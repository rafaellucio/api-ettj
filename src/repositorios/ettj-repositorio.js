'use strict';

const mongoose = require('mongoose');
const EttjModel = mongoose.model('Ettj');

exports.create = async(data) => {
    var novoEttj = new EttjModel(data);
    await novoEttj.save();
};

exports.get = async() => {
    var filter = {
        dataSet: {
            $elemMatch: {
                index: 'IPCA'
            }
        }
    };
    var ettj = await EttjModel.find(filter);
    return ettj;
};

exports.getById = async(id) => {
    var ettj = await EttjModel.findById(id, 'dataSet');
    return ettj;
};

exports.getByIndex = async(index) => {
    var ettj = await EttjModel.find({
        "dataSet.index": index
    });
    return ettj;
};