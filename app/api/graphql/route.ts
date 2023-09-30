import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
 import {gql} from 'graphql-tag'

const dummayProducts =[
    {
        "id": 1,
        "name": "The Russian",
        "type": "fiction",
        "available": true
    },
    {
        "id": 2,
        "name": "Just as I Am",
        "type": "non-fiction",
        "available": false
    },
    {
        "id": 3,
        "name": "The Vanishing Half",
        "type": "fiction",
        "available": true
    },
    {
        "id": 4,
        "name": "The Midnight Library",
        "type": "fiction",
        "available": true
    },
    {
        "id": 5,
        "name": "Untamed",
        "type": "non-fiction",
        "available": true
    },
    {
        "id": 6,
        "name": "Viscount Who Loved Me",
        "type": "fiction",
        "available": true
    }
]

//const gql = String.raw; Alternate of graphql-tag

//In typeDefs variable we define types of object keys and method of API invoking and assign type to API invokink method

const typeDefs = gql`
    type Query {
        getProducts: [product] 
    }
    type product {
     id: Int
     name : String
     type : String
     available : Boolean
     
    }

    
`
// In resolvers create Query object and in it create arrow function for invoking method and function return product object.
const resolvers ={
    Query : {
        getProducts:()=>{
            return dummayProducts
        }
    }

}

//Make server first with ApolloServer include 2 perameters (1 typeDefs) (2 resolvers)

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const handler = startServerAndCreateNextHandler(server)

export { handler as GET, handler as POST };