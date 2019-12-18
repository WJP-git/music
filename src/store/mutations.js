import {
  SET_FULL_SCREEN,
  SET_MINI_PLAYER,
  SET_IS_PLAYING,
  SET_MODE_TYPE
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
  },
  [SET_IS_PLAYING] (state, flag) {
    state.isPlaying = flag
  },
  [SET_MODE_TYPE] (state, flag) {
    state.modeType = flag
  }
}
