import { type RegisterInput, type RegisterResponse } from '.';
import { API_URL } from '../constants';

async function registerUser(body: RegisterInput): Promise<RegisterResponse> {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        credentials: 'include',
    });

    const data: RegisterResponse = await res.json();

    return data;
}

export { registerUser };
