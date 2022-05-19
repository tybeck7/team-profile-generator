const Engineer = require ('../lib/Engineer')

test('engineers github', () => {
    const engineer = new Engineer('Harrold', 'idk', 'imanengineerBITCH@gmail.com', 'myGit')
        expect(engineer.name).toBe('Harrold'),
        expect(engineer.id).toBe('idk')
        expect(engineer.email).toBe('imanengineerBITCH@gmail.com')
        expect(engineer.github).toBe('myGit')
})