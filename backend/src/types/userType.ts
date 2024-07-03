

export type UserType= {
    accountData: {
        login: string,
        email: string,
        passwordHash: string,
        createdAt: Date
    },
    emailConfirmation: {
        confirmationCode: string,
        isConfirmed: boolean,
    }
}