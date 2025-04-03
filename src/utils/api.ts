import { API_BASE_URL } from '../config/api';

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const finalOptions = {
      ...options,
      mode: 'no-cors' as RequestMode,
      headers: {
        ...options.headers,
      }
    };

    if (options.method === 'POST') {
      finalOptions.headers = {
        ...finalOptions.headers,
        'Content-Type': 'application/json'
      };
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, finalOptions);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || '서버 에러가 발생했습니다.');
    }

    return data as T;
  } catch (error) {
    throw error;
  }
} 