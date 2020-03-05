import { GET_CAMPAIGNS } from "./actionTypes";

export const getCampaigns = content => ({
  type: GET_CAMPAIGNS,
  payload: {
    content
  }
});