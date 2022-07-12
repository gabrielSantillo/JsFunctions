let usarnames = [`Gabriel_winner`, `Alex_champion`, `Colleen_best`, `James_smart`, `Josh_clever`];

let counter = 0;
while( counter < usarnames.length) {
    let usarnames_to_lower_case = [];
    usarnames_to_lower_case.push(usarnames[counter].toLowerCase());
    let usarnames_winner = usarnames[counter].includes(`winner`);
    if(usarnames_winner === true){
        console.log(`We have a winner: ${usarnames_to_lower_case[counter]}`);
    }
    counter++;
}