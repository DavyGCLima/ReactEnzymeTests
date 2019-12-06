export const Types = {
    GET_REQUEST: "REPOSITORIES_GET_REQUEST",
    GET_SUCCESS: "REPOSITORIES_GET_SUCCESS",
    GET_FAILURE: "REPOSITORIES_GET_FAILURE",
};

const INITIAL_STATE = {
    repositories: []
};

export default function Repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}

export const Creators = {
    getRequest: () => ({ type: Types.GET_REQUEST }),
    getSuccess: (repositories) => ({ type: Types.GET_SUCCESS, paylaod: { repositories } }),
    getFailure: (error) => ({ type: Types.GET_FAILURE, paylaod: { error } }),
};
