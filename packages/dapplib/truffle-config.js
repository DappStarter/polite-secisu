require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan rifle night honey inflict praise army gate'; 
let testAccounts = [
"0x7238c8ef38da952792527eee7a509fd23c17f94769c3d7e0f79bb947fec8c762",
"0x76790d0d878db2562dad15ceb20a3373f460707f7ae7681498c94af9ffd22f40",
"0x7c3fab639210a4adf38ef12aad13109ad790179c300f556bae3ff8bb1d8d72bc",
"0xba3072baa2dfb257d53c65c0d5662222e4d1520ab24a4b03260c3796119b8202",
"0x1b39c297ae64d549a25a04531f0111aeaf668a6446f9a66dda5e46c6fda86340",
"0x40b4f2ed74bf88a2f9c9cbfaf79ba839c78fa50c6eb0ab57b171588d84494acb",
"0xbc26320c4b18eb7a5b812dd195f65468613112dda464c384fe7639389877491a",
"0x7542ec3462fb9d23c870ea353f758e93cfb8fc8e6d47ba4616f78a46e7cee653",
"0x384959f1a53cc8094baca2a6d38fb08942606c2657967a9ef2f60e720569f819",
"0x8885b2f31e0df664832da3e2d35d2d0cde704ec7fee87f7c0d41236d37bfff22"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

