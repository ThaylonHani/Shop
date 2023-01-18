import Head from "next/head"
export function HeadTitle({children}) {
    return (
        <Head >
            <title>{children}</title>
        </Head>
    )
}