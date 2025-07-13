import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: 'link',
        description: chalk.yellowBright('Digite o link para gerar o QR CODE'),        
    },
    {
        name: 'type',
        description: chalk.yellowBright(
            "Escolha entre o tipo de QRCode (1- NORMAL ou (2- TERMINAL "
        ),
        pattern: /^[1-2]+$/,
        message: chalk.redBright.italic('Escolha apenas entre 1 e 2'),
        required: true,
    }
]


export default promptSchemaQRCode