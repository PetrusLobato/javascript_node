const { select } = require("@inquirer/prompts")
const { metas } = require("../data")

const listarMetas = async () =>{
    
    await select({
        message: "Sua(s) Meta(s)",
        choices: [...metas]
    })

}
module.exports = {listarMetas}