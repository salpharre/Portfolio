//projects to be dynamically created on project page
const db = {
    Projects: [
        {
            "id": 1,
            "title": "Beyond Vacation",
            "description": "Beyond Vacation is a vacation outdoor rental app, built around the idea of vacationing while still social distancing, it's a vacation away from your (indefinite) vacation.",
            "github": "https://github.com/salpharre/BeyondVacation",
            "deploy": "https://beyond-vacation-app.herokuapp.com/",
            "demo": "https://youtu.be/xY4kl7mzGEk",
            "images": require("./images/beyondvacation.jpg"),
            "tech": "Nodejs, Express, MySQL"
        },
        {
            "id": 2,
            "title": "Employee Directory",
            "description": "This app allows users to sort employees alphabetically and filter by name",
            "github": "https://github.com/salpharre/Employee-Directory",
            "deploy": "https://employee-directory3247.herokuapp.com/",
            "demo": "https://youtu.be/WXVXlCT4oUM",
            "images": require("./images/directory.jpg"),
            "tech": "React, Bootstrap"
        },
        {
            "id": 3,
            "title": "Employee Tracker",
            "description": "CLI application to track your employees. Add your employees, roles with matching salaries and departments. View who is currently employed at your company and update what roles they have.",
            "github": "https://github.com/salpharre/Employee-Tracker",
            "demo": "https://youtu.be/8lzWoJKZIdg",
            "images": require("./images/employeetracker.jpg"),
            "tech": "Node, MySQL"
        },
        {
            "id": 5,
            "title": "Organize",
            "description": "A centralized hub for social movement organizations to share information with their local community, and for the general public to easily obtain this information.",
            "github": "https://github.com/salpharre/Organize2.0",
            "deploy": "https://organize-demo.herokuapp.com/",
            "demo": "https://youtu.be/5j6DQmioua4?t=420",
            "images": require("./images/organizeMinimized.jpg"),
            "tech": "MongoDB, Express, Reactjs, Nodejs"
        }
    ]
}
export default db;