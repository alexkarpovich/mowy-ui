import { gql } from 'apollo-boost';

export default gql`
  input Term {
    id: ID!
    value: String!
    transcription: String
    translations: [Translation!]
  }

  input Set {
    id: ID!
    name: String!
    count: Int!
  }

  input Profile {
    id: ID!
    name: String!
    active: Boolean
    learnLang: Language
  }

  input Translation {
    id: ID!
    value: String!
    transcription: String
    details: String
  }

  extend type Mutation {
    unshiftTerm(setId: ID!, term: Term!) : Boolean
    unshiftProfile(profile: Profile!) : Boolean
    activateProfile(id: ID!) : Boolean
    unshiftSet(set: Set!) : Boolean
    addTranslation(termId: ID!, translation: Translation!) : Boolean
    detachTranslation(termId: ID!, translationId: ID!) : Boolean
  }
`;
