## BLOG-CHAIN PLATFORM

## This React application is a Platform system that interacts with the Solana blockchain using the Anchor framework.

## Installation
1. To install the required dependencies, run the following command:

Copy code
npm install

or

Copy code
yarn install

## Components
The main components of this application are:

Dashboard: A component that handles the main functionality of the lib, such as connecting to the Phantom Wallet and creating posts.
BlogProvider and uselib: A context and custom hook for managing the libraries's context, such as user, relases, and various functions like initUser, createPost, and more.


## Usage
2. Start the development server by running:

Copy code
npm start
or

Copy code
yarn start

## Functionality
The Dashboard component utilizes the Solana Wallet Adapter for connecting to the Phantom Wallet. When a user connects their wallet, the libraies's context is initialized with the user's data, which includes their address, name, and avatar.

The LibProvider and uselib context and custom hook are used for managing the libraries's context, such as user, posts, and various functions like initUser, createPost, and more.

The initUser function initializes a new user account on the blockchain with a random name and avatar. The createPost function creates a new post on the blockchain with the provided title and content.

Anchor
This application uses the Anchor framework for interacting with the Solana blockchain. The Anchor program and its IDL (Interface Definition Language) are imported from the src/idl.json file.

Pubkey
The findProgramAddressSync and utf8 functions from the Anchor framework are used for generating program addresses and encoding/decoding data.
