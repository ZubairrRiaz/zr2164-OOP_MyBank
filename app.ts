
import inquirer from "inquirer";

let allCustomers:Customer[] = [];

abstract class Person {
    public name:string;
    protected age:number;
    protected nationality:string;
    protected gender:string;

    constructor(name:string, age:number, nationality:string, gender:string){
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.gender = gender;
    }
}

class Customer extends Person {
   
    public password:number;
    public accountNumber:number;
    public yourAmount:number;

    
    constructor(name:string, age:number, nationality:string, gender:string, password:number, accountNumber:number,yourAmount:number){
        super(name,age,nationality,gender)
        this.password = password;
        this.accountNumber = accountNumber;
        this.yourAmount = yourAmount;
    }

}

let condition = true;
while(condition){

    let answer = await inquirer.prompt([
    {
        name: 'bank',
        type: "list",
        message: `\nWelcome to our bank.
  How we can help you?\n`,
        choices: ['1: Create account','2: My account Details','3: Cash credit','4: Cash deposit','5: Check balance','6: Exit from bank']
    }
])

if(answer.bank === '1: Create account'){
    console.log(`\nYou Need to Fill This Form!`);
    let ans = await inquirer.prompt([
        {
            name: 'q1',
            type: 'input',
            message: `\nPlease Enter Your Name?`,
            
            
            
        },
        {
            name: 'q2',
            type: 'number',
            message: `\nPlease Enter Your Age?`,
        },
        {
            name: 'q3',
            type: 'input',
            message: `\nWhat Is Your Nationality?`,
        },
        {
            name: 'q4',
            type: 'list',
            message: `\nSelect Your gender.`,
            choices: ['Male','Female'],
        },
        {
            name: 'q5',
            type: 'number',
            message: `\nEnter Your Account Password?`,
        },
        {
            name: 'q6',
            type: 'number',
            message: `\nEnter Your Account Number?`,
        },
        {
            name: 'q7',
            type: 'number',
            message: `\nHow Much Amount You Want To Store In Your Account?`,
        },
        
    ]) 
    

    const Customers = new Customer(ans.q1,ans.q2,ans.q3,ans.q4,ans.q5,ans.q6,ans.q7,)
    allCustomers.push(Customers);
    // console.log(allCustomers);
    
    console.log('You Account Has Been Created');
    
    
}//if statement create account;

else if(answer.bank === '2: My account Details'){//else if my account details
    let ans = await inquirer.prompt([
    {
        name: 'checkname',
        type: 'input',
        message: `Enter Your Account Name!`,
    },
    {
        name: 'checkpass',
        type: 'number',
        message: `Enter Your Account Password!`
    }    
    ]);
    
    let findacc = allCustomers.find(allcustomers => (allcustomers.name === ans.checkname && allcustomers.password === ans.checkpass))
    if(allCustomers.length !== 0){
    if(findacc == undefined){
        console.log(`Wrong Password or Account Number.\n`);
        
    }else{
        console.log(`\nHere is Your Details:`);
        
    console.log(findacc);
    }
}else{
    console.log(`Customers Accout No Found!`);
    
}

}//else if my account details

else if(answer.bank === '6: Exit from bank'){
    condition = false;
    console.log(`Thanks For Using Our Service, See You Again!`);
    
}

else if (answer.bank === '5: Check balance'){
        let anss = await inquirer.prompt([{
        name: 'ca',
        type: 'number',
        message: `\nEnter Your Account Account Number?\n`,
    },
    {
        name: 'cp',
        type: 'number',
        message: 'Enter Your Password!',
    }
]);
if(Number.isNaN(anss.ca)){
    console.log(`Please Enter a Number.`);
    
}else if(Number.isNaN(anss.cp)){
    console.log(`Please Enter a Number.`);

}
else{
    let credit = allCustomers.find(ac => (ac.password === anss.cp && ac.accountNumber === anss.ca))
    if(credit == undefined){
        console.log(`Wrong Account Number or Password!`);
        
    }else {console.log(`Your Current Bank Balance Is "${credit?.yourAmount}"`);}
}
}
else if(answer.bank === '3: Cash credit'){
    let anss = await inquirer.prompt({
        name: 'cc',
        type: 'number',
        message: `Enter Your Account Password?`,
    });
    
    let credit = allCustomers.find(ac => (ac.password == anss.cc))

    if(credit?.yourAmount != undefined){

        let cashCredit = await inquirer.prompt({
            name: 'cc',
            type: 'number',
            message: `How Much Amount You Wanted To ADD.`
        })
          
        credit.yourAmount = credit.yourAmount + cashCredit.cc
        console.log(`Now Your Balance is "${credit?.yourAmount}"`);
            
        }
        else {console.log('Your Account Not Found.')};

        
}else if(answer.bank == '4: Cash deposit'){
    let anss = await inquirer.prompt({
        name: 'cd',
        type: 'number',
        message: `Enter Your Account Password?`,
    });
    let credit = allCustomers.find(ac => (ac.password == anss.cd))
    if(credit !== undefined){

    let cashdeposit = await inquirer.prompt({
        name: 'cd',
        type: 'number',
        message: `How Much Amount You Wanted To ADD.`
    })
        if(cashdeposit.cd > credit.yourAmount){
            console.log(`insufficent ammount`);
            
        }else{
            credit.yourAmount =   credit.yourAmount - cashdeposit.cd;
            console.log(`Now your Current Balance is "${credit.yourAmount}"`);
            
        }
    }else{
        console.log(`Account Not Found!`);
        
    }

}
}




// if(ans.q1 === ''){
//     console.log(`Enter Something`);
    
// }else if(ans.q2 === ''){
//     console.log(`Enter Something`);

// }else if(ans.q3 === ''){
//     console.log(`Enter Something`);

// }else if(ans.q5 === ''){
//     console.log(`Enter Something`);

// }else if(ans.q6 === ''){
//     console.log(`Enter Something`);

// }else if(ans.q7 === ''){
//     console.log(`Enter Something`);

// }

