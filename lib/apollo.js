import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CMS_URL } from "./variables";

export const client = new ApolloClient({
    uri: CMS_URL,
    cache: new InMemoryCache(),
});
