import { ACTIONS, MUTATIONS } from '../../constants/performance.vuex';
import { getTeamPerformance } from '../../core/performance/performance.services';

export default {
  [ACTIONS.FETCH_PERFORMANCE_DATA]: ({ commit }) => {
    getTeamPerformance().then(({ data }) => {
      commit(MUTATIONS.SET_PERFORMANCE_DATASET, data);
    });
  },
  [ACTIONS.FILTER_PERFORMANCE_DATA]: ({ commit }, dataset) => {
    commit(MUTATIONS.SET_FILTERED_PERFORMANCE_DATASET, dataset);
  },
};
