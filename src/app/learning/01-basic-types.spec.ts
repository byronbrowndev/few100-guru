describe('basic data types', () => {

  it('is easy to declare a variable', () => {

    let a = 10, b = 20;

    let answer = a + b;

    expect(answer).toBe(30);
  });

  describe('declaring variables', () => {

    it('untyped variables', () => {
      let a;

      a = 19;

      expect(a).toBe(19);

      a = 'tacos';

      expect(a).toBe('tacos');

      a = function (x: number) {
        return x * 2;
      }

      expect(typeof (a)).toBe('function');

      expect(a(10)).toBe(20);
    });
    it('setting data types for a variable', () => {

      let x: number | string; // Union.

      x = 12;


      x = 'tacos';

    });

    it('initializing a variable', () => {
      let x: number | string = 12;
      let y = 18;


      x = 'Tacos';
    });

    it('declaring constants', () => {
      const x = 12; // you cannot reassign a new value to this name.

      // x = 13;

      const jobs = ['Developer', 'QA', 'STE'];

      // jobs = ['Fry Cook'];

      jobs[0] = 'Fry Cook';

      // jobs = [...jobs, 'Scrum Master']
      jobs.push('Scrum Master');

      expect(jobs).toEqual(['Fry Cook', 'QA', 'STE', 'Scrum Master']);


      const book = { title: 'War and Piece', author: 'Tolstoy' };

      book.title = 'War and Peace';


    });
  });
});
