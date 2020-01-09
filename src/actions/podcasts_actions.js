import { LOAD_PODCASTS } from "./action_types";

export const loadPodcasts = () => {
  return async dispatch => {
    // DO ASYNC STUFF HERE
    const response = await fetch(
      "https://public-api.pod.co/podcasts/create-reach-inspire/episodes"
    );
    let { data } = await response.json();
    console.log({ data });
    dispatch({
      type: LOAD_PODCASTS,
      payload: data
    });
    // return {
    //     type: LOAD_PODCASTS,
    // }
  };
};
