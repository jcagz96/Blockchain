const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'SHADHAHSDHA';
const currentBlockData = [
    {
        amount: 10,
        sender: 'ASDSADSAD',
        recipient: '34235TRGFGTE'
    },
    {
        amount: 30,
        sender: 'ASDSADSAD',
        recipient: '34235TRDSGTGGT2'
    },
    {
        amount: 200,
        sender: 'ASDSADASDSASDA',
        recipient: '3423EWEQTGTGGTE'
    },
];

const nonce = 100;






console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 40312));