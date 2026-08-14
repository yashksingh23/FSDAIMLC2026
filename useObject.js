const employee = {
    id : 2,
    name : 'John Doe',
    designation : 'Software Engineer',
    techstack:[{
        plang: 'JavaScript',
        server:'Apache tomcat',
        database:'MySQL',
        database2:'MongoDB'
    },
    {
        plang: 'Python',
        server:'Nginx',
        database:'MySQL',
        database2:'MongoDB'
    },
    {
        plang: 'React',
        server:'node server',
        database:'MySQL',
        database2:'MongoDB'
    }]
}
console.log(employee);
console.log(employee.id);
console.log(employee.name);
console.log(employee.designation);

console.log(employee.techstack[0].plang);
console.log(employee.techstack[0].server);
console.log(employee.techstack[0].database);
console.log(employee.techstack[0].database2);
console.log(employee.techstack[1].plang);
console.log(employee.techstack[1].server);
console.log(employee.techstack[1].database);
console.log(employee.techstack[1].database2);

console.log(employee.techstack[2].plang);
console.log(employee.techstack[2].server);
console.log(employee.techstack[2].database);