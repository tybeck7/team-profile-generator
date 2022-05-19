const Intern = require('../lib/Intern')

test('Interns School name', () => {
    const intern = new Intern('Harrold', 'idk', 'imaninternBITCH@gmail.com', 'Zoom University')
        expect(intern.name).toBe('Harrold'),
        expect(intern.id).toBe('idk')
        expect(intern.email).toBe('imaninternBITCH@gmail.com')
        expect(intern.school).toBe('Zoom University')
})