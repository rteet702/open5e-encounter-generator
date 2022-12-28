import Head from "next/head";
import Button from "../components/StyledButton";
import StyledCard from "../components/StyledCard";
import { Teko } from "@next/font/google";
import { NextPage } from "next";
import { useRouter } from "next/router";

const font = Teko({ subsets: ["latin"], weight: "300" });

const Index: NextPage = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Encounter Generator</title>
                <meta
                    name="description"
                    content="An Open5e based encounter generator for DnD 5th Edition!"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className={`${font.className} flex flex-col justify-center p-3 gap-3 max-w-[800px] mx-auto`}
            >
                <StyledCard>
                    <h1 className="text-5xl">Encounter Generator</h1>
                    <p className="text-xl">
                        DnD 5th Edition - Via{" "}
                        <a
                            href="https://open5e.com/api-docs"
                            className="text-green-600"
                        >
                            Open5e Api
                        </a>
                    </p>
                </StyledCard>
                <StyledCard>
                    <h2 className="text-4xl">A Little about Us</h2>
                    <p className="text-2xl">
                        The goal of this app is to take the headache off of
                        Dungeon Master's <span className="font-bold">(DM)</span>{" "}
                        shoulders when it comes to making encounters for their
                        players.
                    </p>
                    <p className="text-2xl">
                        With this app, you'll be able to enter your players
                        levels, add various modifiers, pick themes, and more to
                        completely customize your encounters.
                    </p>
                    <p className="text-2xl">
                        This will result in very customizable experiences for
                        your players, and you can save them for later, too!
                    </p>
                </StyledCard>
                <StyledCard>
                    <h2 className="text-4xl">Ready to get started?</h2>
                    <Button onClick={() => router.push("/test")}>
                        Log In!
                    </Button>
                </StyledCard>
            </main>
        </>
    );
};

export default Index;
