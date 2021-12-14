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
  describe('higher order functions', () => {

    it('creating html elements the easy way 1', () => {


      function createElement(tag: string, content: string): string {
        return `<${tag}>${content}</${tag}>`;
      }

      expect(createElement('h1', 'hello')).toBe('<h1>hello</h1>');
      expect(createElement('h1', 'goodbye')).toBe('<h1>goodbye</h1>');
      expect(createElement('p', 'content')).toBe('<p>content</p>');

    });

    it('creating html elements the oop style', () => {

      class ElementMaker {
        constructor(private tag: string) { }
        make(content: string): string {
          return `<${this.tag}>${content}</${this.tag}>`;
        }
      }


      const h1Maker = new ElementMaker('h1');

      expect(h1Maker.make('Hello')).toBe('<h1>Hello</h1>');
      expect(h1Maker.make('GoodBye')).toBe('<h1>GoodBye</h1>');
      expect(h1Maker.make('Tacos')).toBe('<h1>Tacos</h1>');

      const h2Maker = new ElementMaker('h2');
      expect(h2Maker.make('Hello')).toBe('<h2>Hello</h2>');
      expect(h2Maker.make('GoodBye')).toBe('<h2>GoodBye</h2>');
      expect(h2Maker.make('Tacos')).toBe('<h2>Tacos</h2>');

      const pMaker = new ElementMaker('p');
      expect(pMaker.make('I cannot believe I did not giggle at the name of this variable!')).toBe('<p>I cannot believe I did not giggle at the name of this variable!</p>')
    });

  });

  it('a functional way to do the same thing', () => {

    function elementMaker(tag: string): (content: string) => string {
      return (content) => `<${tag}>${content}</${tag}>`
    }

    const h1Maker = elementMaker('h1');
    const h2Maker = elementMaker('h2');
    const pMaker = elementMaker('p');

    expect(h1Maker('Hello')).toBe('<h1>Hello</h1>');
    expect(h1Maker('GoodBye')).toBe('<h1>GoodBye</h1>');
    expect(h1Maker('Tacos')).toBe('<h1>Tacos</h1>');

    expect(h2Maker('Hello')).toBe('<h2>Hello</h2>');
    expect(h2Maker('GoodBye')).toBe('<h2>GoodBye</h2>');
    expect(h2Maker('Tacos')).toBe('<h2>Tacos</h2>');

    expect(pMaker('I cannot believe I did not giggle at the name of this variable!')).toBe('<p>I cannot believe I did not giggle at the name of this variable!</p>')
  });
});
