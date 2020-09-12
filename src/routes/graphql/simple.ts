import {
  GraphQLFieldConfigMap,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

const hello = new GraphQLObjectType({
  name: 'HelloWorld',
  fields: (): GraphQLFieldConfigMap<any, any> => ({
    message: {
      type: GraphQLString,
      resolve: () => 'Hello world',
    },
  }),
})

export default hello
