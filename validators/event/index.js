const { body, param } = require('express-validator')
const event_service = require('../../services/event')

const addEventValidation = () => {
	return [
		body('eventName')
			.notEmpty()
			.withMessage('Event name must not be empty')
			.isLength({ min: 8, max: 255 })
			.withMessage('Event name must be between 8 and 255 characters long'),
		body('eventDateTime')
			.notEmpty()
			.withMessage('Event date time must not be empty')
			.matches(
				/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/,
				'g'
			)
			.withMessage(
				'Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'
			),
		body('eventLocation').notEmpty().withMessage('Location must not be empty'),
		body('eventDescription').notEmpty().withMessage('Description must not be empty'),
	]
}

const deleteEventValidation = () => {
	return [
		param('id').custom(async id => {
			const exists = await event_service.getById(id)
			if (!exists) {
				throw new Error('Event was not found')
			}
		}),
	]
}

const updateEventValidation = () => {
	return [
		param('id').custom(async id => {
			const exists = await event_service.getById(id)
			if (!exists) {
				throw new Error('Event was not found')
			}
		}),
		body('eventName')
			.notEmpty()
			.withMessage('Event name must not be empty')
			.isLength({ min: 8, max: 255 })
			.withMessage('Event name must be between 8 and 255 characters long'),
		body('eventDateTime')
			.notEmpty()
			.withMessage('Event date time must not be empty')
			.matches(
				/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/,
				'g'
			)
			.withMessage(
				'Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'
			),
		body('eventLocation').notEmpty().withMessage('Location must not be empty'),
		body('eventDescription').notEmpty().withMessage('Description must not be empty'),
	]
}

module.exports = {
	addEventValidation,
	updateEventValidation,
	deleteEventValidation,
}
