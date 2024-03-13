const event_service = require('../../../services/event')

const home_controller = {
	index: async (req, res) => {
		res.render('home')
	},
	add: async (req, res) => {
		res.render('home/add_update', { mode: 'Add' })
	},
	update: async (req, res) => {
		const eventData = await event_service.getById(req.params.id)
		res.render('home/add_update', { mode: 'Update', eventData: eventData })
	},
}

module.exports = home_controller
