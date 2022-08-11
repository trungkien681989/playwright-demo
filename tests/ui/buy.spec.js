// @ts-check
import { test, expect } from '@playwright/test';

test.beforeAll(async ({ request }) => {
  const loginResponse = await request.post('/rest/user/login', {
    data: {
      email: 'PlsDoNotTryToStealMyInfo@gmail.com',
      password: 'PlsDoNotTryToStealMyInfo@gmail.com',
    }
  });
  await expect(loginResponse.ok()).toBeTruthy();

  let authentication = await loginResponse.body().then(b => { 
    return JSON.parse(b.toString()).authentication; 
  });

  const getProductsResponse = await request.get(`/rest/basket/${authentication.bid}`, {
    headers: {
      Authorization: `Bearer ${authentication.token}`
    }
  });
  await expect(getProductsResponse.ok()).toBeTruthy();

  let products = await getProductsResponse.body().then(b => { 
    return JSON.parse(b.toString()).data.Products; 
  });
  await console.log(products);

  for(let i = 0; i < products.length; i++) {
    const deleteProductsResponse = await request.delete(`/api/BasketItems/${products[i].BasketItem.id}`, {
      headers: {
        Authorization: `Bearer ${authentication.token}`
      }
    });
    await expect(deleteProductsResponse.ok()).toBeTruthy(); 
  }
});

test.beforeEach(async ({ page }) => {
   // Go to https://juice-shop.guardrails.ai/#/
   await page.goto('https://juice-shop.guardrails.ai/#/');

   // Click [aria-label="Close Welcome Banner"]
   await page.locator('[aria-label="Close Welcome Banner"]').click();
 
   // Click text=Me want it!
   await page.locator('text=Me want it!').click();
 
   // Click [aria-label="Show\/hide account menu"]
   await page.locator('[aria-label="Show\\/hide account menu"]').click();
 
   // Click button[role="menuitem"]:has-text("exit_to_app Login")
   await page.locator('button[role="menuitem"]:has-text("exit_to_app Login")').click();
   await expect(page).toHaveURL('https://juice-shop.guardrails.ai/#/login');
 
   // Click [aria-label="Text field for the login email"]
   await page.locator('[aria-label="Text field for the login email"]').click();
 
   // Fill [aria-label="Text field for the login email"]
   await page.locator('[aria-label="Text field for the login email"]').fill('PlsDoNotTryToStealMyInfo@gmail.com');
 
   // Click [aria-label="Text field for the login password"]
   await page.locator('[aria-label="Text field for the login password"]').click();
 
   // Fill [aria-label="Text field for the login password"]
   await page.locator('[aria-label="Text field for the login password"]').fill('PlsDoNotTryToStealMyInfo@gmail.com');
 
   // Click [aria-label="Login"]
   await page.locator('[aria-label="Login"]').click();
   await expect(page).toHaveURL('https://juice-shop.guardrails.ai/#/search');
});

test('buy products', async ({ page }) => {
  // Click text=Apple Juice (1000ml) 1.99¤Add to Basket >> [aria-label="Add to Basket"]
  await page.locator('text=Apple Juice (1000ml) 1.99¤Add to Basket >> [aria-label="Add to Basket"]').click();

  // Click text=Apple Pomace 0.89¤Add to Basket >> [aria-label="Add to Basket"]
  await page.locator('text=Apple Pomace 0.89¤Add to Basket >> [aria-label="Add to Basket"]').click();

  // Click [aria-label="Show the shopping cart"]
  await page.locator('[aria-label="Show the shopping cart"]').click();
  await expect(page).toHaveURL('https://juice-shop.guardrails.ai/#/basket');

  // Click text=Apple Juice (1000ml) 1 1.99¤ >> button >> nth=2
  await page.locator('text=Apple Juice (1000ml) 1 1.99¤ >> button').nth(2).click();

  // Click text=Apple Pomace 1 0.89¤ >> button >> nth=2
  await page.locator('text=Apple Pomace 1 0.89¤ >> button').nth(2).click();
});