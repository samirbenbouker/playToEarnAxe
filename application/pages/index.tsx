import type { NextPage } from "next";
import styles from "../styles/Home.module.css"
import { ConnectWallet, useAddress, useEditionDrop, useOwnedNFTs } from "@thirdweb-dev/react";
import { CHARACTER_EDITION_ADDRESS } from "../const/contractAddresses"
import { useRouter } from "next/router";
import MintContainer from "../components/MintContainer";

const Home: NextPage = () => {
    const editionDrop = useEditionDrop(CHARACTER_EDITION_ADDRESS)

    const address = useAddress()
    const router = useRouter()

    const {
        data: ownedNfts,
        isLoading,
        isError
    } = useOwnedNFTs(editionDrop, address)

    // 0. Wallet connect - required to check if they own an NFT
    if (!address) {
        return (
            <div className={styles.container}>
                <ConnectWallet />
            </div>
        )
    }

    // 1. Loading
    if (isLoading) {
        return <div>
            Loading...
        </div>
    }

    // Something went wrong
    if (!ownedNfts || isError) {
        return <div>Error</div>;
    }

    // 2. No NFTs - mint page
    if (ownedNfts.length === 0) {
        return (
            <div className={styles.container}>
                <MintContainer />
            </div>
        )
    }

    // 3. Has NFT already - show button to take to game
    return (
        <div className={styles.container}>
            <button
                className={`${styles.mainButton} ${styles.spacerBottom}`}
                onClick={() => router.push("/play")}
            >
                Play game
            </button>
        </div>
    )

}

export default Home