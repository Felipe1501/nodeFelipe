//console.log(process.argv);

function Paramstem(param) {
    return process.argv.indexOf(param) !== -1
}

if(Paramstem('--producao')) {
    console.log('Warning!!!');
}else {
    console.log('Relax!!!');
}