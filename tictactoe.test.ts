import { Builder, Capabilities, By } from "selenium-webdriver";

import chromedriver from "chromedriver";
import { Executor } from "selenium-webdriver/http";

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://localhost:4000");
});

afterAll(async () => {
  await driver.quit();
});

test("User can start the game", async () => {
  let button = await (await driver).findElement(By.id("start-game"));
  await button.click();
});

describe("Adding X and O to different cells", () => {
  test("User can click the top left corner and add an X", async () => {
    let cell0 = await driver.findElement(By.id("cell-0"));
    await cell0.click();
    let cell0Text = await cell0.getText();
    expect(cell0Text).toBe("X");
  });
  test("User can click the lower right corner and add an X", async () => {
    let cell8 = await driver.findElement(By.id("cell-8"));
    await cell8.click();
    let cell8Text = await cell8.getText();
    expect(cell8Text).toBe("X");
  });

  test("Computer will add O to cell-1 after user clicks in cell-0", async () => {
    let cell1 = await driver.findElement(By.id("cell-1"));
    let cell1Text = await cell1.getText();
    expect(cell1Text).toBe("O");
  });

  test("User can click the top right corner and add an X", async () => {
    let cell2 = await driver.findElement(By.id("cell-2"));
    await cell2.click();
    let cell2Text = await cell2.getText();
    expect(cell2Text).toBe("X");
  });

  test("User can click the top middle corner and add an X", async () => {
    let cell1 = await driver.findElement(By.id("cell-1"));
    await cell1.click();
    let cell1Text = await cell1.getText();
    expect(cell1Text).toBe("X");
  });

  test("Computer will add O to cell-3 after user clicks in cell-2", async () => {
    let cell3 = await driver.findElement(By.id("cell-3"));
    let cell3Text = await (await cell3.getText()).toUpperCase();
    expect(cell3Text).toBe("O");
  });
});
