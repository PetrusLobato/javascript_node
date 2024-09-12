const { select } = require("@inquirer/prompts")
const { mostarMensagem } = require("./mensagem")
const { metas, saveMetas } = require("../data")



const metasConcluidas = async () =>{
    
    const resultado = metas.filter((c)=> {return c.checked})

    if(resultado.length == 0){
        mostarMensagem("Não existe meta(s) realizadas! :(")
        return
    }

    await select({
        message: "Meta(s) realizadas",
        choices: [...resultado]
    })
    saveMetas()
}
module.exports = {metasConcluidas}