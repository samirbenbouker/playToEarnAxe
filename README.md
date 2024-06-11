# Play to Earn Gem Mining Game

Welcome to the Play to Earn Gem Mining Game! This project leverages Solidity and Thirdweb to create a decentralized game where players can stake NFTs and earn rewards.

## Introduction

This game allows players to stake NFT pickaxes and earn ERC-20 tokens as rewards. The more powerful the pickaxe, the greater the rewards. This project is built using Solidity and Thirdweb's contracts to manage NFT staking and token distribution.

## Features

- Stake NFT pickaxes to earn rewards
- Withdraw pickaxes and claim accumulated rewards
- Reward calculations based on the staked pickaxe's power and time staked

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed
- A Thirdweb account and API key
- A blockchain wallet (e.g., MetaMask)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/samirbenbouker/playToEarnAxe.git
    cd playToEarnAxe
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
    Create a `.env` file in the root directory and add your Thirdweb API key:
    ```env
    THIRDWEB_API_KEY=your_thirdweb_api_key
    ```

## Usage

1. Deploy the smart contracts:
    Use Thirdweb's dashboard or CLI to deploy the `DropERC1155` and `TokenERC20` contracts. Note the contract addresses for use in the `Mining` contract.

2. Configure the `Mining` contract:
    Update the contract addresses in the `Mining.sol` contract and deploy it using Thirdweb or a compatible tool.

3. Interact with the deployed contracts:
    Use the provided frontend (if available) or a blockchain interaction tool (e.g., Remix, Etherscan) to stake pickaxes, withdraw them, and claim rewards.
