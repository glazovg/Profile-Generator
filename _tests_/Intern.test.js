const Intern = require('../lib/Intern');

describe('Intern class', () => {
    const intern = new Intern('Jennifer Parker', '002', 'traveltime4@btf.com', 'BootCamp');

    it('Creates a new Intern', () => {
        expect(intern).toBeInstanceOf(Intern);
    });

    describe('getSchool()', () => {
        it('Returns school name', () => {
            expect(intern.getSchool()).toBe(intern.school);
        });
    });

    describe('getRole()', () => {
        it('Returns "Intern"', () => {
            expect(intern.getRole()).toBe('Intern');
        });
    });
});
