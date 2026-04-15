interface RegisterInput {
    username: string;
    email: string;
    password: string;
}

interface Response {
    message?: string;
    statusCode?: number;
    error?: string;
}

interface RegisterResponse extends Response {
    accessToken?: string;
    refreshToken?: string;
}

export type { RegisterInput, RegisterResponse };
