const { select } = require('@inquirer/prompts')
const { cadastrarMeta } = require('./metas/cadastar')

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
            name: "Fechar",
                    value: "Sair"
                }
            ]
        })

        switch(meta){
            case "Cadastrar":
                await cadastrarMeta()
            break
            case "Sair":
                return
        }


    }


}
iniciar()