import { gql } from 'apollo-boost';

export const SET_TERMS = gql`
query Terms($id: ID!) {
    terms(id: $id) {
        id
        value
        translations {
            id
            value
            transcription
            details
        }
    }
}
`;

export const ATTACH_TERM = gql`
mutation AttachTerm($id: ID!, $value: String!) {
    attachTerm(id: $id, value: $value) {
        id
        value
        translations {
            id
            value
            transcription
            details
        }
    }
}
`;

export const ATTACH_TRANSLATION = gql`
  mutation AttachTranslation($input: AttachTranslationInput!) {
    attachTranslation(input: $input) {
      id
      value
      transcription
      details
    }
  }
`;

export const DELETE_SET = gql`
mutation DeleteSet($id: ID!) {
    deleteSet(id: $id)
}
`;
