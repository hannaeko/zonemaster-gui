import { by, browser, element } from 'protractor';

import { Utils } from './utils/app.utils';

describe('Zonemaster test FR16 - [The advanced view should have a text describing what undelegated means?]', () => {
  const utils = new Utils();
  beforeAll(async () => {
    await utils.goToHome();
    await utils.setLang('en');
    await utils.activeOptions();
  });

  it('should have a link to the proper faq answer', () => {
    expect(element(by.css('.alert.alert-info')).isPresent()).toBe(true);
    expect(element(by.css('.alert.alert-info')).element(by.css('a')).getAttribute('routerlink')).toBe('/faq');
    expect(element(by.css('.alert.alert-info')).element(by.css('a')).getAttribute('fragment')).toBe('q12');
  });

  it('should have a description text in multi languages', async () => {
    await utils.setLang('en');
    expect(element(by.css('.alert.alert-info')).element(by.css('a')).getText()).toContain('undelegated');
    expect(element(by.css('nav div.lang a.selected')).getAttribute('lang')).toBe('en');

    await utils.setLang('fr');
    expect(element(by.css('.alert.alert-info')).element(by.css('a')).getText()).toContain('non délégué');
    expect(element(by.css('nav div.lang a.selected')).getAttribute('lang')).toBe('fr');

    await utils.setLang('sv');
    expect(element(by.css('.alert.alert-info')).element(by.css('a')).getText()).toContain('odelegerat domäntest');
    expect(element(by.css('nav div.lang a.selected')).getAttribute('lang')).toBe('sv');
  });
});
