const { checkbox } = require("@inquirer/prompts")
const { metas } = require("../data")

const ConcluidaVerdadeiroOufalse = async () =>{
    
    const resposta = await checkbox({
        message:"Marque ou desmarque as metas no espaço e finalize essa etapa no ENTER",
        choices:[...metas ],
        instructions:false
    })

    if( metas.length == 0 ){
        console.log("Nenhuma meta(s) selecionada(s)!")
    }

    metas.forEach((m)=>{m.checked = false})
    
    resposta.forEach((r)=>{
        const meta = metas.find((m)=>{
            return m.value == r
        })

        meta.checked = true
    })

    console.log("Meta(s) marcadas como concluídas")
}
module.exports = {ConcluidaVerdadeiroOufalse}