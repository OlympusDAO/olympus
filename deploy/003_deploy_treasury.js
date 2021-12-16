const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const chainId = await getChainId();
  const { deploy, get } = deployments;
  const { deployer } = await getNamedAccounts();

  const brickArtifact = await get('OlympusERC20Token');

  let fraxAddress;
  // TODO: move it to config
  switch(chainId) {
    case '250':
      fraxAddress = '0xaf319E5789945197e365E7f7fbFc56B130523B33';
      break;
    default:
      const frax = await get('FRAX');
      fraxAddress = frax.address;
      break;
  }

  // NOTE: Average block time in Ethereum is ~13 seconds and
  // Olympus's treasury's blocksNeededForQueue is 6,000.
  // Fantom's average block time is ~0.9 seconds so I make it
  // 6,000 / 0.9 which is approximately 6,600 blocks.
  const blocksNeededForQueue = 6600;

  // TODO: Should I remove the constructor arguments so that it goes through first?
  // TODO: need BRICK-FRAX address
  // TODO: Or should I set it later through the queue?
  const deployment = await deploy('OlympusTreasury', {
    from: deployer,
    args: [
      brickArtifact.address,
      // address _DAI, (using FRAX address for now so it passes)
      fraxAddress,
      fraxAddress,
      // address _OHMDAI, (using FRAX address for now so it passes)
      fraxAddress,
      blocksNeededForQueue
    ],
    log: true,
  });

  const brick = (
    await ethers.getContractFactory('OlympusERC20Token')
  ).attach(brickArtifact.address);
  await brick.setVault(deployment.address);
};
module.exports.tags = ['Treasury', 'AllEnvironments'];