export const EGO_API_URL = process.env.EGO_API_URL || 'http://localhost:3000';

export async function getCarModelById(id: string) {
  try {
    const response = await fetch(`${EGO_API_URL}/api/models/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching data from Ego: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
