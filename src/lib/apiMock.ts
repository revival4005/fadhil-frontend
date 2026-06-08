import { apiRequest } from "./api";

export async function registerUser(data: Record<string, any>) {
    return apiRequest("/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
    });
}

export default { registerUser };
