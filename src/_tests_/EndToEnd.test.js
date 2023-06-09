import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('show/hide details of an event', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
  //  headless: false,
  //  slowMo: 250, 
  //  ignoreDefaultArgs: ['--disable-extensions']
    });
    page= await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  })

  afterAll(() => {
    browser.close();
  });
  
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .eventDetails');
    expect(eventDetails).toBeNull();
  })

  test('user can expand an event to see its details', async () => {
    const eventDetails = await page.$('.event .detailsButton');
    expect(eventDetails).toBeDefined();
  })

  test('user can collapse an event to hide its details', async () => {
    const eventDetails = await page.$('.event .eventDetails');
    expect(eventDetails).toBeDefined();
    await page.click('.detailsButton');
    expect(eventDetails).toBeNull();
  })
});


