import { Employee, ProvidesCompensationInformation, Retiree } from '../hr'

describe('creating and using classes', () => {

  it('Creating an Employee', () => {

    const bob = new Employee(120_000);
    bob.firstName = 'Robert';
    bob.lastName = 'Smith';


    expect(bob.firstName).toBe('Robert');
    expect(bob.lastName).toBe('Smith');
    expect(bob.fullName).toBe('Smith, Robert');

    expect(bob.salary).toBe(120_000);

    bob.giveRaise(1000);

    expect(bob.salary).toBe(121_000);

  });

  it('creating a retiree', () => {
    const jill = new Retiree(80_000);
    jill.firstName = 'Jill';
    jill.lastName = 'Smith';

    expect(jill.fullName).toBe('Smith, Jill');

    expect(jill.pension).toBe(80_000);

  });

  it('people for report', () => {
    const bob = new Employee(120_000);
    bob.firstName = 'Robert';
    bob.lastName = 'Smith';

    const jill = new Retiree(80_000);
    jill.firstName = 'Jill';
    jill.lastName = 'Smith';


    const people = [bob, jill];

    function printMailingList(list: { fullName: string }[]) {
      list.forEach(p => console.log(p.fullName));
    }

    function getTotalCompensation(list: ProvidesCompensationInformation[]): number {
      return list.reduce((l, r) => l + r.getCompensation(), 0);
    }


    const totalCompensation = getTotalCompensation(people);
  });
});
