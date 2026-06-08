const fallbackApiBaseUrl = "http://localhost:8082/api";

export const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || fallbackApiBaseUrl;

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}
