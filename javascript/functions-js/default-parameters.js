// JavaScript is the default value
function writeCode(language = 'JavaScript'){
    console.log(`Write code in ${language}`);
}

writeCode('JavaScript');
writeCode('C#');
writeCode();

function codeDetails(language = 'JavaScript', tool = 'VS Code'){
    console.log(`Writing code in ${language} using ${tool}`);
}

codeDetails();
codeDetails('Python');
codeDetails('C#', 'Visual Studio');

function createUser(name, role = 'guest', status = 'active'){
    console.log(`User: ${name}, Role: ${role}, Status: ${status}`);
}

createUser('Steven');
createUser('Alice', 'admin', 'active');