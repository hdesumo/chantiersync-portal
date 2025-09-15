test("devrait ouvrir et fermer le menu burger", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.setViewportSize({ width: 375, height: 800 }); // Simule un mobile
  await page.click("button:has-text('☰')");
  await expect(page.locator("nav.mobile-menu")).toBeVisible(); // ✅ sélection spécifique
  await page.click("button[aria-label='Fermer']");
  await expect(page.locator("nav.mobile-menu")).toBeHidden(); // ✅
});

test("devrait naviguer vers Fonctionnalités via le menu mobile", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.setViewportSize({ width: 375, height: 800 });
  await page.click("button:has-text('☰')");
  await page.click("nav.mobile-menu a:has-text('Fonctionnalités')"); // ✅ cible menu mobile
  await expect(page).toHaveURL(/.*fonctionnalites/);
});
