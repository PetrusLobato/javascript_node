const { select } = require("@inquirer/prompts")
const { metas, saveMetas } = require("../data")

const listarMetas = async () =>{

    if(metas.length == 0 ){
        console.log("Não existe meta(s) cadastradas")
        return
    }
    
    await select({
        message: "Sua(s) Meta(s)",
        choices: [...metas]
    })

    saveMetas()

}
module.exports = {listarMetas}