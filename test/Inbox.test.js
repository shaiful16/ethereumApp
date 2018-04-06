const assert= require('assert');
const ganache= require('ganache-cli');
const Web3= require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const {interface,bytecode}= require('../compile');

let accounts;
let inbox;

const INITIAL_STRING= 'Hi there';

beforeEach( async ()=>{
    // get a list of all accounts
    accounts = await web3.eth.getAccounts();

    //use one of those accounts to deploy the contract
    inbox= await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode, arguments:[INITIAL_STRING] })
        .send(   { from :accounts[0] , gas : '1000000'} )

    inbox.setProvider(provider);


})

describe('inbox test', ()=>{
    it('it deploy a contract', ()=>{
        console.log(inbox);
        assert.ok(inbox.options.address);
    })

    it('it has a default message', async ()=>{
        const message = await inbox.methods.message().call();
    })

    it('it can change message', async ()=>{
        await inbox.methods.setMessage('bye').send({  from:accounts[0]  })
    })


} )




/* web3.eth.getAccounts().then(fetchedAccounts=>{
     console.log(fetchedAccounts);
 });*/












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






