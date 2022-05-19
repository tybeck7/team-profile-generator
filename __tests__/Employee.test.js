const Employee = require ('../lib/Employee')

test('creates a employee class with name email and job title', ()=> {
    const employee = new Employee('Harry Potter')

    expect(employee.name).toBe('Harry Potter')
})
