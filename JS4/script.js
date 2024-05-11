function createNewUser(){
    let newUser = {
        getLogin: function(){
            return console.log(this.Name[0].toLowerCase() + this.SName.toLowerCase());
        }
    };
    newUser.prototype = {
        get username(){
            return this.Name;
        },
        set username(UserNames){
            this.Name = Name;
        },
        get usersecondname(){
            return this.SName;
        },
        set usersecondname(UserSecondNames){
            this.SName = SName;
        }
    };
    newUser.Name = prompt("Введіть ім`я",'Ваше ім`я');
    while(newUser.Name === ''){
        newUser.Name = prompt('Введіть ім`я ще раз! :','Ваше ім`я');
    }
    newUser.SName = prompt("Введіть прізвище", 'Ваше прізвище');
    while(newUser.SName === ''){
        newUser.SName = prompt('Введіть прізвище ще раз! :','Ваше прізвище')
    }
    console.log(`Ваше ім'я: ${newUser.Name}`);
    console.log(`Ваше прізвище: ${newUser.SName}`);
    newUser.getLogin();
    newUser.Name = "Playboy";
    newUser.SName = "Filantrop";
    console.log(`Ваше нове ім'я: ${newUser.Name}`);
    console.log(`Ваше нове прізвище: ${newUser.SName}`);
    console.log('Ваш новий логін нижче ↓ ')
    newUser.getLogin();
    return newUser;
}
createNewUser();