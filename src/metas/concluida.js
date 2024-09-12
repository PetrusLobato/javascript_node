const { checkbox } = require("@inquirer/prompts")
const { metas } = require("../data")
const { mostarMensagem } = require("./mensagem")

const ConcluidaVerdadeiroOufalse = async () =>{

    if( metas.length == 0 ){
        mostarMensagem("Não existe meta(s)!") 
        return
    }
    
    const resposta = await checkbox({
        message:"Marque ou desmarque as metas no espaço e finalize essa etapa no ENTER",
        choices:[...metas ],
        instructions:false
    })
    
    metas.forEach((m)=>{m.checked = false})
    
    
    resposta.forEach((r)=>{
        const meta = metas.find((m)=>{
            return m.value == r
        })

        meta.checked = true
    })

    mostarMensagem("Meta(s) marcadas como  concluídas") 

}
module.exports = {ConcluidaVerdadeiroOufalse}