const { input, prompts } = require("@inquirer/prompts")
const { metas } = require("../data")

const cadastrarMeta = async () =>{
    
    const meta =  await input({message: "Escreva a sua meta"})

    if(meta.length == 0){

        console.log ("Meta não definida")
        return 
    }

    metas.push({
        value: meta,
        checked: false
    })
}
module.exports = {cadastrarMeta}