import puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = (await browser.pages())[0]
  await page.goto('https://www.baidu.com')
  await page.type('#kw', 'puppeteer')
  await page.click('.s_btn_wr input')
  await page.waitForNavigation({ waitUntil: 'networkidle2' })
  console.log(await page.evaluate(() => window.location.href))
  await page.screenshot({ path: 'result.png', fullPage: true })
  await browser.close()
})()
