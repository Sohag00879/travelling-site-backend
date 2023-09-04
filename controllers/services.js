const { response } = require("../app");
const services = require("../models/services")

const addServices = (req,res) =>{

    const data = req.body;
        services.create(data)
        .then(data=>{
            res.status(200).json({status:'success',data:data})
        })
        .catch(err=>{
            res.status(400).json({status:'fail',data:err})
        })
    }

    // find({name:/s/})

const getServices = (req,res) =>{
    let keyword = req.query.keyword;
    if (keyword) {
        const response = services.aggregate([
            {$match:{name: new RegExp(keyword,"i")}},
        ])
        res.status(200).json({status:'success',data:response})
      }else{
        services.find({})
        .then((data)=>{
            res.status(200).json({status:'success',data:data})
        })
        .catch(err=>{
            res.status(400).json({status:'fail',data:err})
        })
      }
   
    }


    const getById = (req,res) =>{
        let id = req.params.id;
        services.find({_id:id})
        .then((data)=>{
            res.status(200).json({status:'success',data:data})
        })
        .catch(err=>{
            res.status(400).json({status:'fail',data:err})
        })
    }

const updateServices = (req,res) =>{
    const {id} = req.params;
    services.updateOne({_id:id},req.body)
    .then(data=>{
        res.status(200).json({status:'success',data:data})
    }).
    catch(err=>{
        res.status(400).json({status:'fail',data:err})
    })

    }


const deleteServices = (req,res) =>{
    services.deleteOne({_id:req.params.id})
    .then(data=>{
        res.status(200).json({status:'success',data:data})
    })
    .catch(err=>{
        res.status(400).json({status:'fail',data:err})
    })
    }

    const searchLocation = (req,res) =>{
        const location = req.body.location;
        services.find({location:location})
        .then(data=>{
            res.status(200).json({status:'success',data:data})
        })
        .catch(err=>{
            res.status(400).json({status:'fail',data:err})
        })
    }
    
    module.exports = {
        addServices,
        getServices,
        getById,
        updateServices,
        deleteServices,
        searchLocation
    }