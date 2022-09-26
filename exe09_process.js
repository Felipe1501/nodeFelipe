process.stdout.write('TA BAO FI?');
process.stdin.on('data', function(data){
    process.stdout.write(`Sua resposta foi ${data.toString()}Obrigado!\n`);
    process.exit();
});
