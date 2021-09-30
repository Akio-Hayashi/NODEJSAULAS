const express = require('express');
const router = express.Router();

// Services
const {getFornecedores, getFornecedorById, 
    insertFornecedor, updateFornecedorById,
    deleteFornecedorById} = 
    require('../../services/FornecedorsService')

router.get("/", (req, res)=>{
    res.status(200).json(getFornecedores())
})

router.get("/:id", (req, res)=>{
    res.status(200).json(getFornecedorById(req.params.id))
})

router.post("/", (req, res)=>{
    insertFornecedor(req.body)
    res.status(201).json({success: true})
})

router.put("/:id", (req, res)=>{
    updateFornecedorById(req.params.id, req.body)
    res.send({success: true})
})

router.delete("/:id", (req, res)=>{
    deleteFornecedorById(req.params.id)
    res.send({success: true})
})

module.exports = router;