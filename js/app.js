let usarnames = [`Gabriel_winner`, `Alex_champion`, `Colleen_best`, `James_smart`, `Josh_clever`];

let counter = 0;
while(counter < usarnames.length) {
    let usarnames_winner = usarnames[counter].includes(`winner`);
    if(usarnames_winner === true) {
        console.log(`We have a winner. -> ${usarnames[counter]}`);
    }
    counter++;
}