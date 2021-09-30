require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remind assume hover local frame season'; 
let testAccounts = [
"0xe4b2dd518427be89aba7f29c5361858d9dcea6839b345ab34176c8edb598665d",
"0x9d54544c3db40b2e2c5db783edb8b3ec1fee5af04a0a41b9501bd6859ab45944",
"0x9ce735d840d96a8adbb61dc94f9d96447530496443aa030d2e026349490bfd91",
"0x9499420ee305a87cd99fd5b171e7e3674fd597396fc0b9ca2f9f04e36cb11237",
"0x5220774ca3152c9936c87de7b23419b0db07adecab44e0d97db6a1085686a1ad",
"0x1e3f5a2007f6256dca85002b333ea1aafd5dd3d6a7d620461d91775224e87d48",
"0x07c2cf4bef07919c44439c18222c4651a8d8e0877462c7fbf210f45e02da14ba",
"0xb57357901ae6cff3b09855ded0e42580ca2492a19d1ae1e2bb92b088e2f92375",
"0x8f847c4b5318991a31a0fa05f306db55ed41ae800fe7c79db0099d77f00b5db5",
"0x9aa0a5c974fcabbe921d17ddfa3e13310785a1847f4fd12df87eaf7d78a6ea58"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

