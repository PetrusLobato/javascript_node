
const { select } = require("@inquirer/prompts")
const { metas } = require("../data")
const { mostarMensagem } = require("./mensagem")

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
   
}
module.exports = {metasConcluidas}