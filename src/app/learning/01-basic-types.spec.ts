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
  });
});
