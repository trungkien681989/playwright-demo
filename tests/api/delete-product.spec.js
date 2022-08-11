// @ts-check
import { test, expect } from '@playwright/test';

test('login', async ({ request }) => {
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