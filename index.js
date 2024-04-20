const yup = require("yup");

const correctUser = {
	name: "Lucas Hobold",
	email: "lucas@rotaexata.com.br",
	age: 15,
	job: "Developer",
};

const incorrectUser = {
	name: "Felipeta",
	email: "felipem@rotaexata.com.br",
	age: 7,
	job: "CS",
};

const userSchema = yup.object({
	name: yup.string().min(10, "Please insert your full name"),
	email: yup.string().email("Please insert a valid e-mail"),
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
});

async function validateUser(user) {
	try {
		await userSchema.validate(user);
	} catch (error) {
		console.log(error.message);
		console.log(error.errors);
	}
}

validateUser(correctUser)
// validateUser(incorrectUser)
