import { useAddress, useClaimNFT, useEditionDrop, Web3Button } from "@thirdweb-dev/react"
import React from "react"
import { CHARACTER_EDITION_ADDRESS } from "../const/contractAddresses"
import styles from "../styles/Home.module.css"

export default function MintContainer() {
    const editionDrop = useEditionDrop(CHARACTER_EDITION_ADDRESS)
    const { mutate: claim } = useClaimNFT(editionDrop)
    const address = useAddress()

    return (
        <div className={styles.collectionContainer}>
            <h1>Edition Drop</h1>
            <p>Claim your character NFT to start playing!</p>
            <div className={`${styles.nftBox} ${styles.spacerBottom}`}>
                <img src="./mine.gif" style={{ height: 200 }} />
            </div>

            <Web3Button
                contractAddress={CHARACTER_EDITION_ADDRESS}
                action={() => {
                    claim({
                        quantity: 1,
                        to: address!,
                        tokenId: 0
                    })
                }}
            >
                Claim NFT
            </Web3Button>
        </div >
    )
}