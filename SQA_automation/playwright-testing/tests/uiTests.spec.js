import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import ContactUsPage from '../pages/ContactUsPage';

test.describe('UI Testing Suite', () => {
  test('Complete sign-up and product purchase flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    await loginPage.navigate();
    await loginPage.signUp('John Doe', 'john@example.com');

    await expect(page.locator('text=Account Created')).toBeVisible();

    await productPage.selectMenCategory();
    await productPage.selectJeans();

    await productPage.updateProductQuantity(2);
    await expect(page.locator('text=Added to Cart')).toBeVisible();

    await page.goto('/cart');
    await page.locator('a[href="/checkout"]').click();
    await expect(page.locator('text=Checkout')).toBeVisible();
  });

  test('Contact Us form submission', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);

    await contactUsPage.navigate();
    await contactUsPage.submitForm(
      'John Doe',
      'john@example.com',
      'Test Subject',
      'Test Message',
      'path/to/file.txt'
    );

    await expect(page.locator('text=Success! Your details have been submitted.')).toBeVisible();
  });
});
