import Head from 'next/head'
import React from 'react'

export default function FontLoader() {
    return (
        <Head>
            <link rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin />
            <link
                rel="preload"
                as="style"
                href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins&display=swap" />
            <link
                rel="stylesheet"
                media="print"
                onLoad="this.media='all'"
                href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins&display=swap" />
            <noscript>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins&display=swap" />
            </noscript>
        </Head>
    )
}
