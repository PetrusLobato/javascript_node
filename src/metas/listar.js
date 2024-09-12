const { select } = require("@inquirer/prompts")
const { metas } = require("../data")

const listarMetas = async () =>{

    if(metas.length == 0 ){
        console.log("Não existe meta(s) cadastradas")
        return
    }
    
    await select({
        message: "Sua(s) Meta(s)",
        choices: [...metas]
    })

    

}
module.exports = {listarMetas}