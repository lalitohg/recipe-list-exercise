module.exports = `
    type Recipe {
        id: ID!
        title: String!
        ingredients: [String!]!
    }

    type Query {
        Recipes(title: String, ingredients: [String], limit: Int): [Recipe]
        Recipe: Recipe
    }
`;