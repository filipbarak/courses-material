import { CoursesMaterialPage } from './app.po';

describe('courses-material App', () => {
  let page: CoursesMaterialPage;

  beforeEach(() => {
    page = new CoursesMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
