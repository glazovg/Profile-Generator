const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    const engineer = new Engineer('Jennifer Parker', '002', 'traveltime3@btf.com', 'jenniferp');

    it('Creates a new Engineer', () => {
        expect(engineer).toBeInstanceOf(Engineer);
    });

    describe('getGithub()', () => {
        it('Returns github username', () => {
            expect(engineer.getGithub()).toBe(engineer.github);
        });
    });

    describe('getRole()', () => {
        it('Returns "Engineer"', () => {
            expect(engineer.getRole()).toBe('Engineer');
        });
    });
});
