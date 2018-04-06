const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 =require('web3');
const {interface,bytecode} =require('./compile');

const provider =new HDWalletProvider(
    // 12345678
    'gun senior axis moon sock quality normal despair differ reunion convince arctic',
    'https://rinkeby.infura.io/0352DUiZkbdp0i21tIKL'
);
const web3 =new Web3(provider);

const deploy= async () => {
    const accounts= await web3.eth.getAccounts();
    console.log('Attemting to deploy from account',accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode,arguments:['Hi there']})
        .send({gas:'1000000',from:accounts[0]});
    console.log('Contract deployed to',result.options.address);
};
deploy();

