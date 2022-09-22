const localMails = window.localStorage.getItem('mails')

export const DataModule = {
	state: () => ({
		showPopUp: false,
		mails: localMails ? JSON.parse(localMails) : [],
		showHint: false,
		errorHint: false
	}),

	getters: {
		getShowPopUp(state) {
			return state.showPopUp
		},

		getShowHint(state) {
			return state.showHint
		},

		getErrorHint(state) {
			return state.errorHint
		}
	},

	mutations: {
		setShowPopUp(state) {
			state.showPopUp = !state.showPopUp
		},

		setMails(state, mail) {
			if (!state.mails.find(item => item == mail)) {
				state.mails.push(mail)
				localStorage.setItem('mails', JSON.stringify(state.mails))

				state.errorHint = false
			} else {
				state.errorHint = true
			}

			state.showHint = true

			setTimeout(() => {
				state.showHint = false
			}, 4000)
		}
	},

	actions: {
		toggleShowPopUp({ commit }) {
			commit('setShowPopUp')
		},

		submitForm({ commit }, mail) {
			commit('setMails', mail)
		}
	},

	namespaced: true
}