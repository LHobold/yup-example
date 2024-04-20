class UserService {
	async createUser({ user }) {
		console.log(user);

		return { statusCode: 200, body: { message: "User created successfully" } };
	}
	async getUser({ id }) {
		return {
			statusCode: 200,
			body: {
				id,
				name: "Ares",
				age: 4162,
				job: "God",
				email: "ares@olympus.com.br",
			},
		};
	}
}

module.exports = UserService;
