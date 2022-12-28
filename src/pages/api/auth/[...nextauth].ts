import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "",
            clientSecret: "",
        }),
    ],
};

export default NextAuth(authOptions);
