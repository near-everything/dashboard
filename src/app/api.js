import request, { gql } from "graphql-request";
import { useMutation, useQuery } from "react-query";

export const API_URL = process.env.REACT_APP_EVERYTHING_API_URL;

export function useItems() {
  return useQuery("items", async () => {
    const {
      allItems: { edges },
    } = await request(
      API_URL,
      gql`
        query allItems {
          allItems {
            edges {
              node {
                id
                categoryByCategoryId {
                  name
                }
                media
                subcategoryBySubcategoryId {
                  name
                }
              }
            }
          }
        }
      `
    );
    return edges;
  });
}

export function useItemById(item_id) {
  return useQuery("itemById", async () => {
    const { itemById } = await request(
      API_URL,
      gql`
        query itemById($item_id: Int!) {
          itemById(id: $item_id) {
            id
            categoryByCategoryId {
              name
            }
            characteristicsByItemId {
              edges {
                node {
                  initialValue
                  attributeByAttributeId {
                    name
                  }
                }
              }
            }
            media
            subcategoryBySubcategoryId {
              name
            }
          }
        }
      `,
      { item_id }
    );
    return itemById;
  });
}

export function useDeleteItem() {
  return useMutation(async (id) => {
    await request(
      API_URL,
      gql`
        mutation deleteItem($id: Int!) {
          deleteItemById(input: { id: $id }) {
            item {
              id
            }
          }
        }
      `,
      { id }
    );
  });
}