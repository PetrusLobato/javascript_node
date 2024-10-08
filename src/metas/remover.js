const { checkbox } = require("@inquirer/prompts")
const { mostarMensagem } = require("./mensagem")
const { metas, saveMetas } = require("../data")



const removerMetas = async () =>{


    if(metas.length == 0 ){
        mostarMensagem("Não existe meta(s) cadastradas") 
        return
    }

    const metasDesmarcadas = metas.map((m)=>{
        return {
            value: m.value,
            checked: false
        }
    })
    
    const resposta = await checkbox({
        message:"Marque a meta(s) que deseja remover",
        choices:[...metasDesmarcadas ],
        instructions:false
    })
    

    if( resposta.length == 0 ){
        mostarMensagem("Nenhuma meta foi selecionada para remoção.") 
        return
    }

    
    resposta.forEach((item)=>{
        
        const index = metas.findIndex((m) => m.value === item)

        if (index !== -1) {
            metas.splice(index, 1); 
        }
    })

    saveMetas()
    mostarMensagem("Meta(s) removida(s) com sucesso!") 
}
module.exports = {removerMetas}