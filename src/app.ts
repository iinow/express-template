import express from 'express'
import * as Routers from '~/routes'
import './test'
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  Thunk,
  GraphQLFieldConfigMap,
  GraphQLScalarType
} from 'graphql'
import expressGraphQL, { graphqlHTTP } from 'express-graphql'
import chance from 'chance'
import { Author, Book, Books } from './mock'

let app = express()

const BookType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Book',
  description: 'This represents a book written by an author',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLInt) },
    author: {
      type: AuthorType,
      resolve: (book: Book) => {
        return Books.authors.find(author => author.id === book.authorId)
      }
    }
  })
})

const AuthorType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents a author of a book',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: (author: Author) => {
        return Books.books.filter(book => book.authorId === author.id)
      }
    }
  })
})

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    book: {
      type: BookType,
      description: 'A Single Book',
      args: {
        id: {
          type: GraphQLInt,
          description: 'Book id'
        },
      },
      resolve: (parent, args) => Books.books.find(book => book.id === args.id)
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'List of All Books',
      resolve: () => Books.books
    },
    author: {
      type: AuthorType,
      description: 'A Single Author',
      args: {
        id: {
          type: GraphQLInt,
          description: 'Author id 값'
        }
      },
      resolve: (parent, args) => Books.authors.find(author => author.id === args.id)
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of ALl Authors',
      resolve: () => Books.authors
    }
  })
})

const RootMutationType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addBook: {
      type: BookType,
      description: 'Add a book',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) }
      },
      resolve: (parent, args) => {
        const book: Book = {
          id: Books.books.length + 1,
          name: args.name,
          authorId: args.authorId
        }
        Books.books.push(book)
        return book
      }
    },
    addAuthor: {
      type: AuthorType,
      description: 'Add an author',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        const author: Author = {
          id: Books.authors.length + 1,
          name: args.name
        }
        Books.authors.push(author)
        return author
      }
    }
  })
})

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.use('/users', Routers.User)

app.listen(process.env.serverPort, () => {
  console.log(`server listen!!, port: ${process.env.serverPort}`)
})
