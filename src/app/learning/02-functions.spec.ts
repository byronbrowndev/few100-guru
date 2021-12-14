describe('writing functions', () => {

  describe('overloading a functions (spoiler - you cannot really do it)', () => {

    it('formatting a name', () => {

      function formatName(first: string, last: string, mi?: string): string {
        let fullName = `${last}, ${first}`;

        if (mi) { // 0, '', null, undefined
          fullName += ` ${mi}.`;
        }
        return fullName;
      }

      let fullName = formatName('Han', 'Solo');

      expect(fullName).toBe('Solo, Han');

      fullName = formatName('Han', 'Solo', 'D');

      expect(fullName).toBe('Solo, Han D.');
    });

    it('interspersed optional parameters', () => {

      function add(a: number = 10, b: number = 2, ...extra: number[]): number {
        const initialState = a + b;

        return extra.reduce((lhs, rhs) => lhs + rhs, initialState);
      }

      expect(add()).toBe(12);

      expect(add(20)).toBe(22);

      expect(add(undefined, 9)).toBe(19);

      expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
    });

  });
});
