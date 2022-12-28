import { Teko } from "@next/font/google";
import { NextPage } from "next";
import Head from "next/head";
import Dropdown from "../../components/Dropdown";
import StyledCard from "../../components/StyledCard";
import { useState } from "react";
import Button from "../../components/StyledButton";
import axios from "axios";

type apiResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<any> | null;
};

const types = [
    "aberration",
    "beast",
    "celestial",
    "construct",
    "dragon",
    "elemental",
    "fey",
    "fiend",
    "giant",
    "humanoid",
    "monstrosity",
    "ooze",
    "plant",
    "undead",
];

const font = Teko({ subsets: ["latin"], weight: "300" });

const Index: NextPage = () => {
    const [c_rating, setC_Rating] = useState(0);
    const [dropChoice, setDropChoice] = useState("");
    const [fetchResults, setFetchResults] = useState<apiResponse>();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        testFetch();
        console.log(c_rating, dropChoice);
    };

    const testFetch = () => {
        axios
            .get(
                `https://api.open5e.com/monsters/?challenge_rating=${c_rating}&type=${dropChoice}`
            )
            .then((response) => {
                console.log(response.data);
                setFetchResults(response.data);
            });
    };

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
                    <h1 className="text-6xl">Generate an Encounter!</h1>
                    <form
                        className="flex flex-col gap-3"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="c_rating" className="text-4xl">
                            Challenge Rating {c_rating}
                        </label>
                        <input
                            type="range"
                            id="c_rating"
                            min={1}
                            max={30}
                            value={c_rating}
                            onChange={(e) =>
                                setC_Rating(e.currentTarget.valueAsNumber)
                            }
                        />

                        <label className="text-4xl">Monster Type</label>
                        <Dropdown
                            content="Type"
                            options={types}
                            update={setDropChoice}
                        />

                        <Button>Submit</Button>
                    </form>
                </StyledCard>
                {/* Card for results... temporary.  */}
                {fetchResults?.results && fetchResults.results.length > 0 && (
                    <StyledCard>
                        {fetchResults.results.map((result, index) => (
                            <div key={index}>{result.name}</div>
                        ))}
                    </StyledCard>
                )}
            </main>
        </>
    );
};

export default Index;
