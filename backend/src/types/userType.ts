

export type UserType= {
    accountData: {
        login: string,
        email: string,
        passwordHash: String,
        createdAt: Date
    },
    emailConfirmation: {
        confirmationCode: String,
        isConfirmed: Boolean,
    }
}