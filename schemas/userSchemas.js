const yup = require('yup')

exports.createUserSchema = yup.object({
	body: yup.object({
		name: yup.string().min(10, "Please insert your full name"),
		email: yup.string().email("Please insert a valida e-mail"),
		age: yup
			.number()
			.required("You need to provide your age")
			.when("job", {
				is: val => val,
				otherwise: schema =>
					schema.min(
						18,
						"You need to be at leasy 18 years old, or be currently employed"
					),
			}),
		job: yup
			.string()
			.required("You need to provide your job")
			.notOneOf(["CS", "Support"], job => `Fuck you ${job.value}`),
	})
})

exports.getUserSchema = yup.object({
	params: yup.object({
		id: yup.number().required()
	})
})