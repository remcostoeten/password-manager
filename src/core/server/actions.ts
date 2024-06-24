'use server';

export async function fetchData() {
  const response = await fetch(
    'https://raw.githubusercontent.com/remcostoeten/password-manager/master/src/core/server/api.json',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
}
