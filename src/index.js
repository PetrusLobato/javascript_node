const { select } = require('@inquirer/prompts')
const { cadastrarMeta } = require('./metas/cadastar')
const { listarMetas } = require('./metas/listar')

const iniciar = async () =>{

    while(true){

        const meta = await select ({
            message: "Menu ->",
            choices: [
                {
                    name: "Cadastrar nova meta",
                    value: "Cadastrar"
                },
                {
                    name: "Listar minhas metas",
                    value: "Listar"
                },
                {
                    name: "Marcar meta(s) como concluida",
                    value: "Concluida"
                },
                {
                    name: "Fechar",
                    value: "Sair"
                }
            ]
        })

        switch(meta){
            case "Cadastrar":
                await cadastrarMeta()
            break
            case "Listar":
                await listarMetas()
            break
            case "Concluida":
                await ConcluidaVerdadeiro()
            break
            case "Sair":
                return
        }


    }


}
iniciar()