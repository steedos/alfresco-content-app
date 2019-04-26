import { browser } from 'protractor';

export async function navigateUrl(url: string) {
  await browser.executeScript(
      `window.adf.navigateUrl('${url}');`
  );
}

export async function setConfigField(field: string, value: string) {
  await browser.executeScript(
      'window.adf.setConfigField(`' + field + '`, `' + value + '`);'
  );
}

export async function setStorageItem(field: string, value: string) {
  await browser.executeScript(
      'window.adf.setStorageItem(`' + field + '`, `' + value + '`);'
  );
}

export async function clearStorage() {
  await browser.executeScript(
      'window.adf.clearStorage();'
  );
}

export async function apiReset() {
  await browser.executeScript(
      `window.adf.apiReset();`
  );
}
