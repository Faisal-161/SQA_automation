import { test, expect } from '@playwright/test';

test.describe('API Testing Suite', () => {
  test('Verify API endpoint for user creation', async ({ request }) => {
    const response = await request.post('/api/users', {
      data: {
        name: 'John Doe',
        email: 'john@example.com',
      },
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.name).toBe('John Doe');
    expect(responseBody.email).toBe('john@example.com');
  });
});
