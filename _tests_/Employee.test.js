const Employee = require('../lib/Employee');

describe('Employee class', () => {
    const employee = new Employee('Emmet Brown', '001','traveltime@btf.com');

    it('Creates a new Employee', () => {
        expect(employee).toBeInstanceOf(Employee);
    });

    describe('getName()', () => {
        it('Returns name', () => {
            expect(employee.getName()).toBe(employee.name);
        });
    });

    describe('getId()', () => {
        it('Returns id', () => {
            expect(employee.getId()).toBe(employee.id);
        });
    });

    describe('getEmail()', () => {
        it('Returns email', () => {
            expect(employee.getEmail()).toBe(employee.email);
        });
    });

    describe('getRole()', () => {
        it('Returns "Employee"', () => {
            expect(employee.getRole()).toBe('Employee');
        });
    });
});
