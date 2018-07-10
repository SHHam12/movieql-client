import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql-utrqizqimb.now.sh"
});

export default client;