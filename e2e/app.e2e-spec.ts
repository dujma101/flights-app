import { FlightsAppPage } from './app.po';

describe('flights-app App', function() {
  let page: FlightsAppPage;

  beforeEach(() => {
    page = new FlightsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
