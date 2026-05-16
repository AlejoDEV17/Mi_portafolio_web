const { chromium } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

async function main() {
  const browser = await chromium.launch({ headless: true });
  const cases = [
    { name: "desktop", viewport: { width: 1440, height: 1000 } },
    { name: "mobile", viewport: { width: 390, height: 844 }, isMobile: true }
  ];
  const dir = path.join(process.cwd(), "tmp", "screenshots");
  fs.mkdirSync(dir, { recursive: true });

  for (const testCase of cases) {
    const context = await browser.newContext({
      viewport: testCase.viewport,
      isMobile: Boolean(testCase.isMobile)
    });
    const page = await context.newPage();
    await page.goto("http://localhost:4173", {
      waitUntil: "domcontentloaded",
      timeout: 15000
    });
    await page.waitForSelector("canvas", { timeout: 10000 });
    await page.waitForTimeout(2200);

    const canvasInfo = await page.locator("canvas").first().evaluate((canvas) => {
      const rect = canvas.getBoundingClientRect();
      return {
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      };
    });
    const title = await page.locator("h1").innerText({ timeout: 10000 });
    const screenshotPath = path.join(dir, `${testCase.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });

    console.log(
      `${testCase.name}: title="${title.slice(0, 64)}" canvas=${canvasInfo.width}x${canvasInfo.height} screenshot=${screenshotPath}`
    );
    await context.close();
  }

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
