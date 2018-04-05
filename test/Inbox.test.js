const assert= require('assert');
const ganache= require('ganache-cli');
const Web3= require('web3');

const web3= new  Web3(ganache.provider()) ;

const {interface,bytecode}= require('../compile');

let accounts;
let inbox;

beforeEach(  ()=>{
    // get a list of all accounts
    accounts = await web3.eth.getAccounts();

    //use one of those accounts to deploy the contract
    inbox= await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode, arguments:['Hi there'] })
        .send(   { from :accounts[0] , gas : '1000000'} )

    


   /* web3.eth.getAccounts().then(fetchedAccounts=>{
        console.log(fetchedAccounts);
    });*/
})

describe('inbox test', ()=>{
    it('it deploy a contract', ()=>{
        console.log(inbox);

    })
} )











/*
class Car{
    park(){
        return 'stopped';
    }
    drive(){
        return 'vroom';
    }
}



describe('Car class test', ()=>{
    it('can park', ()=>{
        const car=new Car();
        assert.equal(car.park(),'stopped');
    })
} )


*/






