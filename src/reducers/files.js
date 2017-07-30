/*
 * Opted for a infinite scroll for simplicity because i don't know how many
 * items exist.
 * Could have implemented in a different way so there aren't a million items
 * in memory after scrolling a lot, could limit the number of items in the
 * store to a sensible number to prevent a phone running out of memory.
 */

const initialState = {
  data: [],
  completed: false,
  page: 0,
};

const files = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FILES':
      return Object.assign({}, state, {
        completed: false,
      });
    case 'LOAD_FILES':
      return Object.assign({}, state, {
        data: state.data.concat(action.payload.data),
        completed: true,
        page: state.page + 1,
      });
    default:
      return {
        ...state
      };
  }
}

export default files;
