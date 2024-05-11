function createNewUser(){
    let newUser = {
        getLogin: function() {
            return console.log(this.Name[0].toLowerCase() + this.SName.toLowerCase());
        },
        getAge: function(){
            let now = new Date();
            let currentYear = now.getFullYear();

            let inputDate = +this.birthday.substring(0,2);
            let inputMonth = +this.birthday.substring(3,5);
            let inputYear = +this.birthday.substring(6,10);

            let birthDate = new Date(inputYear, inputMonth-1, inputDate);
            let birthYear = birthDate.getFullYear();
            let age = currentYear - birthYear;
            if(now < new Date(birthDate.setFullYear(currentYear))){
                age = age-1;
            }
            return console.log(age);
        },
        getPassword: function(){
            return console.log(this.Name[0].toLowerCase() + this.SName.toLowerCase() + this.birthday.substring(6,10));
        }
    };
    newUser.prototype = {                           
        get username() {                            
                return this.Name;},                 

        set username(UserNames) {                   
            this.Name = Name;},                     

        get usersecondname() {                      
                return this.SName;},                
        
        set usersecondname(UserSecondNames) {       
            this.SName = SName;}                    
        
    };
    newUser.Name = prompt("Введіть ім`я", 'ім`я');
    while (newUser.Name === ''){
        newUser.Name = prompt('Введіть ім`я ще раз!: ', 'ім`я');

    }
    newUser.SName = prompt("Введіть прізвище", 'прізвище');
    while (newUser.SName === ''){
        newUser.SName = prompt('Введіть прізвище ще раз!: ', 'прізвище');
    }
    newUser.birthday = prompt("Напишіть вашу дату народження дд.мм.рр: ", 'дд.мм.рр');
    
    console.log(`Ваше ім'я: ${newUser.Name}`);
    console.log(`Ваше прізвище: ${newUser.SName}`);
    console.log(`Ваша дата народження: ${newUser.birthday}`);
    newUser.getLogin();
    newUser.getAge();
    newUser.getPassword();
    return newUser;
}       
createNewUser();
