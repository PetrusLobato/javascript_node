const { input } = require("@inquirer/prompts")
const { metas, saveMetas } = require("../data")
const { mostarMensagem } = require("./mensagem")

const cadastrarMeta = async () =>{
    
    const meta =  await input({message: "Escreva a sua meta"})

    if(meta.length == 0){

        mostarMensagem("Meta não definida")
        return 
    }

    metas.push({
        value: meta,
        checked: false
    })
    saveMetas()
    
    mostarMensagem("Meta cadastrada com sucesso")
}
module.exports = {cadastrarMeta}