const Manager = require('../lib/Manager')

test('managers office number', () => {
    const manager = new Manager('Harrold', 'idk', 'imanmanagerBITCH@gmail.com', '420000')
        expect(manager.name).toBe('Harrold'),
        expect(manager.id).toBe('idk')
        expect(manager.email).toBe('imanmanagerBITCH@gmail.com')
        expect(manager.officeNumber).toBe('420000')
})