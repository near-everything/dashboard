import request, { gql } from "graphql-request";
import { useMutation, useQuery } from "react-query";
import { API_URL, queryClient } from "../../app/api";

export function useInvites() {
  return useQuery("invites", async () => {
    const {
      allInvites: { edges },
    } = await request(
      API_URL,
      gql`
        query getInvites {
          allInvites {
            edges {
              node {
                phoneNumber
                isApproved
              }
            }
          }
        }
      `
    );
    return edges;
  });
}

export function useInviteByPhoneNumber(phoneNumber) {
  return useQuery("inviteByPhoneNumber", async () => {
    if (phoneNumber) {
      const { inviteByPhoneNumber } = await request(
        API_URL,
        gql`
          query inviteByPhoneNumber($phoneNumber: String!) {
            inviteByPhoneNumber(phoneNumber: $phoneNumber) {
              isApproved
            }
          }
        `,
        { phoneNumber }
      );
      return inviteByPhoneNumber;
    }
  });
}

export function useRequestInvite() {
  return useMutation(
    "requestInvite",
    async (phoneNumber) => {
      return await request(
        API_URL,
        gql`
          mutation requestInvite($phoneNumber: String!) {
            createInvite(input: { invite: { phoneNumber: $phoneNumber } }) {
              invite {
                phoneNumber
              }
            }
          }
        `,
        { phoneNumber }
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("inviteByPhoneNumber");
        // TODO : send message that sucessfully submitted
      },
      onError: () => {
        // TODO : do something
      }
    }
  );
}

export function useApproveInvite() {
  return useMutation(
    "approveInvite",
    async (phoneNumber) => {
      return await request(
        API_URL,
        gql`
          mutation approveInvite($phoneNumber: String!) {
            approveInvite(input: { phoneNumber: $phoneNumber }) {
              invite {
                phoneNumber
              }
            }
          }
        `,
        { phoneNumber }
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("invites");
      },
    }
  );
}
