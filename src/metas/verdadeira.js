
const { select } = require("@inquirer/prompts")
const { metas } = require("../data")

const metasConcluidas = async () =>{
    
    const resultado = metas.filter((c)=> {return c.checked == true})

    if(resultado.length == 0){
        console.log("Não existe meta(s) realizadas! :(")
        return
    }

    await select({
        message: "Meta(s) realizadas",
        choices: [...resultado]
    })
   
}
module.exports = {metasConcluidas}