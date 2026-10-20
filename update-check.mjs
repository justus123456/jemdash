import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { emailHref, gmailHref, outlookHref, enquiryMessage, whatsappHref } from './src/config.js';
assert.equal(new URL(emailHref).searchParams.get('body'),enquiryMessage);
assert.equal(new URL(gmailHref).searchParams.get('body'),enquiryMessage);
assert.equal(new URL(outlookHref).searchParams.get('body'),enquiryMessage);
assert.equal(new URL(whatsappHref).pathname,'/2348134043022');
assert.equal(new URL(whatsappHref).searchParams.get('text'),enquiryMessage);
const browser=await chromium.launch({channel:'msedge',headless:true});
try {
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://localhost:5173',{waitUntil:'networkidle'});
 await page.setViewportSize({width:1440,height:1000});
 assert.equal(await page.locator('header .wordmark').innerText(),'JENDASH↗');
 assert.equal(await page.locator('body').innerText().then(t=>t.includes('Jendash')),false);
 assert.equal(await page.locator('header').evaluate(e=>getComputedStyle(e).position),'fixed');
 await page.locator('footer a[href="#privacy-policy"]').click();
 await page.locator('#privacy-policy summary').click();
 assert.equal(await page.locator('#privacy-policy details').getAttribute('open'),'');
 await page.getByRole('heading',{name:'Your enquiry & your privacy.'}).waitFor();
 for(const width of [360,390,768,1024,1440]){await page.setViewportSize({width,height:900});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`overflow ${width}`)}
 await page.setViewportSize({width:390,height:844});
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.getByRole('button',{name:'Open navigation'}).click();
 await page.getByRole('navigation').getByRole('link',{name:'Our car',exact:true}).click();
 await page.waitForTimeout(200);
 console.log('Mobile anchor top:',await page.locator('#our-car').evaluate(e=>e.getBoundingClientRect().top));
 assert.equal(await page.locator('#our-car').evaluate(e=>e.getBoundingClientRect().top>=85),true);
 await page.goto('http://localhost:5173',{waitUntil:'networkidle'});
 await page.screenshot({path:'mobile-preview.png',fullPage:true});
 await page.setViewportSize({width:1440,height:1000});
 await page.screenshot({path:'desktop-preview.png',fullPage:true});
 assert.deepEqual(errors,[]);console.log('PASS: uppercase brand, fixed navbar, unobscured mobile anchors, email draft and provider links, privacy disclosure, five responsive widths, no browser errors.');
} finally {await browser.close()}
