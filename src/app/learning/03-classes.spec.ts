import { Employee } from "../hr/employee";

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
});
