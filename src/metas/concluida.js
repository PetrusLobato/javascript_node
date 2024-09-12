const { checkbox } = require("@inquirer/prompts")
const { mostarMensagem } = require("./mensagem")
const { metas, saveMetas } = require("../data")


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

    saveMetas()
    mostarMensagem("Meta(s) marcadas como  concluídas") 

}
module.exports = {ConcluidaVerdadeiroOufalse}