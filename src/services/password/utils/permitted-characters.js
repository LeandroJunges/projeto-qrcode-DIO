//extract method

async function permittedCharacters() {
    let permittedChars = []
    if(process.env.UPPERCASE_LETTERS){
        permittedChars.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }
    if(process.env.LOWERCASE_LETTERS){
        permittedChars.push(..."abcdefghijklmnopqrstuvwxyz") 
    }
    if(process.env.NUMBERS){
        permittedChars.push(..."0123456789") 
    }
    if(process.env.SPECIAL_CHARACTERS){
        permittedChars.push(..."!@#$%^&*()-_") 
    }
    return permittedChars
}

export default permittedCharacters