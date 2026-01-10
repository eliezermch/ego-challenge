export const EGO_API_URL = process.env.EGO_API_URL || 'http://localhost:1337';

export async function getCarModels() {
  try {
    const response = await fetch(`${EGO_API_URL}/api/models/`);
    if (!response.ok) {
      throw new Error(
        `Error fetching data from Strapi: ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
