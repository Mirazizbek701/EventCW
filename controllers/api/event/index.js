const event_service = require('../../../services/event')

const event_controller = {
	getAll(req, res) {
		res.json(event_service.getAll())
	},
	create(req, res) {
		res.status(201).json(event_service.create(req, res))
	},
	update(req, res) {
		const event = event_service.update(req.params.id, req.body)

		if (event) {
			res.json(event)
		} else {
			res.status(404).send('Event was not found')
		}
	},
	delete(req, res) {
		const event = event_service.getById(req.params.id)

		if (event) {
			event_service.delete(req.params.id)
			res.status(204).send('Event was deleted successfully')
		} else {
			res.status(404).send('Event was not found')
		}
	},
}

module.exports = event_controller
