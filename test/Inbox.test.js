const assert= require('assert');
const ganache= require('ganache-cli');
const Web3= require('web3');

const web3= new  Web3(ganache.provider()) ;

beforeEach(()=>{
    var coinbase = web3.eth.coinbase;
    //console.log(coinbase);

    //var balance = web3.eth.getBalance(coinbase).then(fetchedAccounts=>{
        web3.eth.getBalance(coinbase).then(fetchedAccounts=>{
        console.log(fetchedAccounts);
    });


    // get a list of all accounts
    /*web3.eth.getAccounts().then(fetchedAccounts=>{
        console.log(fetchedAccounts);

    });*/
})


describe('inbox test', ()=>{
    it('it deploy a contract', ()=>{ })
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






