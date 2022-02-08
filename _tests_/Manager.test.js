const Manager = require('../lib/Manager');

describe('Manager class', () => {
    const manager = new Manager('Marty McFly', '002', 'traveltime2@btf.com', '1001');

    it('Creates a new Manager', () => {
        expect(manager).toBeInstanceOf(Manager);
    });

    describe('officeNumber', () => {
        it('Property of Manager', () => {
            expect(manager.officeNumber).toBe('1001');
        });
    });

    describe('getRole()', () => {
        it('Returns "Manager"', () => {
            expect(manager.getRole()).toBe('Manager');
        });
    });
});
