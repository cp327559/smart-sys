import { SmartAgricultureSystemPage } from './app.po';

describe('smart-agriculture-system App', function() {
  let page: SmartAgricultureSystemPage;

  beforeEach(() => {
    page = new SmartAgricultureSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
