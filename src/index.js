const { select } = require('@inquirer/prompts')
const { cadastrarMeta } = require('./metas/cadastar')
const { listarMetas } = require('./metas/listar')
const { ConcluidaVerdadeiroOufalse } = require('./metas/concluida')
const { metasConcluidas } = require('./metas/verdadeira')
const { removerMetas } = require('./metas/remover')
const { mostarMensagem } = require('./metas/mensagem')



const iniciar = async () =>{


    mostarMensagem("Bem vindo ao App de metas") 
    
   


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
                   name: "Meta(s) concluídas",
                   value: "Verdadeiro"
                },
                {
                   name: "Remover Meta(s)",
                   value: "Remover"
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
                await ConcluidaVerdadeiroOufalse()
            break

            case "Verdadeiro":
                await metasConcluidas()
            break

            case "Remover":
                await removerMetas()
            break

            case "Sair":
                mostarMensagem("Até a próxima :)") 

                return
        }



    }
   
    

}
iniciar()
