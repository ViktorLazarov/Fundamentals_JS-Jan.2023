function tSeamAccount(arr) {
    let account = arr[0].split(' ');
    let command = '';
    let game = '';
    let output = [];
    for (let i = 1; i < arr.length - 1; i++) {
        command = arr[i].split(' ')[0];
        game = arr[i].split(' ')[1];

        if (command === 'Install' && !account.includes(game)) {
            account.push(game);
        }
        if (command === 'Uninstall' && account.includes(game)) {
            let index = account.indexOf(game);
            account.splice(index, 1);
        }
        if (command === 'Update' && account.includes(game)) {
            let index = account.indexOf(game);
            account.splice(index, 1);
            account.push(game);
        }
        if (command === 'Expansion' && account.includes(game.split('-')[0])) {
            let index = account.indexOf(game.split('-')[0]);
            account.splice(index + 1, 0,(`${game.split('-')[0]}:${game.split('-')[1]}` ));
            
            
        }

    }
    console.log(account.join(' '));
}

tSeamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])
tSeamAccount(['CS WoW Diablo','Uninstall XCOM','Update PeshoGame','Update WoW','Expansion Civ-V',
'Play!'])