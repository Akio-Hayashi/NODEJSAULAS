module.exports = {
    getFornecedores: function() {
        return global.fornecedores
    },
    getFornecedorById: function(id) {
        let fornecedor;
        global.fornecedores.forEach(f => {
            if(focus.id == id){
                fornecedor = f
            }
        });
        return fornecedor
    },
    insertFornecedor: function(fornecedor){
        global.fornecedores.push(fornecedor);
    },
    updateFornecdorById: function(id, fornecedor){
        global.fornecedores.forEach(f => {
            if(f.id == id){
                f.nome = fornecedor.nome
            }
        }); 
    },
    deleteFornecedorById: function(id){
        let i = global.fornecedores.length -1 ;
        for(;i>=0;i--){
            if(global.fornecedores[i].id == id){
                global.fornecedores.splice(i,1);
            }
        }
    }
};