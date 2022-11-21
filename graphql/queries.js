import { gql } from "graphql-request";

import { useMutation, useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../app/api";

export function useThingsByOwner(ownerId, options) {
  return useQuery(
    ["thingsByOwner", ownerId],
    async () => {
      const {
        things: { edges },
      } = await graphqlClient.request(
        gql`
          query thingsByOwner($ownerId: String!) {
            things(condition: { ownerId: $ownerId }) {
              edges {
                node {
                  id
                  characteristics {
                    edges {
                      node {
                        attribute {
                          id
                          name
                        }
                        option {
                          id
                          value
                        }
                      }
                    }
                  }
                  medias {
                    edges {
                      node {
                        mediaUrl
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        { ownerId }
      );
      return edges;
    },
    options
  );
}

export function useCreateThing() {
  return useMutation((newThing) => {
    return graphqlClient.request(
      gql`
        mutation createThing($input: CreateThingInput!) {
          createThing(input: $input) {
            thing {
              id
            }
          }
        }
      `,
      { input: newThing }
    );
  });
}

export function useCreateThingBulkUpload() {
  return useMutation((newThing) => {
    return graphqlClient.request(
      gql`
        mutation createThingBulkUpload($input: CreateThingBulkInput!) {
          createThingBulkUpload(input: $input) {
            thing {
              id
            }
          }
        }
      `,
      { input: newThing }
    );
  });
}

export function useDeleteThing() {
  return useMutation((thingId) => {
    return graphqlClient.request(
      gql`
        mutation deleteThing($id: Int!) {
          deleteThing(input: { id: $id }) {
            clientMutationId
          }
        }
      `,
      { id: thingId }
    );
  });
}


export function useCreateMedia() {
  return useMutation((newMedia) => {
    return graphqlClient.request(
      gql`
        mutation createMedia($input: MediaInput!) {
          createMedia(input: { media: $input }) {
            media {
              id
            }
          }
        }
      `,
      { input: newMedia }
    );
  });
}