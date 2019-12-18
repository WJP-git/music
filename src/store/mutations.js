import {
  SET_FULL_SCREEN,
  SET_MINI_PLAYER
} from './mutations-type'

export default {
  /*
  changeFullScreen (state, flag) {
    state.isFullScreen = flag
  }
   */
  [SET_FULL_SCREEN] (state, flag) {
    state.isFullScreen = flag
  },
  [SET_MINI_PLAYER] (state, flag) {
    state.isShowMiniPlayer = flag
  }
}
