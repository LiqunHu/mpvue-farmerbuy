import { getBoardData } from '@/utils/api'
import { BOARD_MOVIE_LIST } from '@/store/mutations-type'

const state = {
  loginState: 0,
  userInfo: {}
}

const mutations = {
  [BOARD_MOVIE_LIST] (state, { boards }) {
    let data
    state.boards = state.boards.map((board, i) => {
      data = boards[i]
      board.title = data.title
      board.movies = data.subjects
      return board
    })
    state.movies = state.boards[0].movies
  }
}

const actions = {
  async getBoards ({state, commit}) {
    const tasks = state.boards.map(board => {
      return getBoardData({ board: board.key, page: 1, count: 8 })
    })
    let boards = await Promise.all(tasks)
    commit(BOARD_MOVIE_LIST, { boards })
  }
}

export default {
  state,
  mutations,
  actions
}
