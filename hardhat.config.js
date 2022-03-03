require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/8MktGBJcuxqCmA7WdIIDh0p0XE5OQIem',
      accounts: ['49055e6e46bdcbf14bd10447c7f608969f959a1e267a21f1d060c3941f1534fb'],
    },
  },
};