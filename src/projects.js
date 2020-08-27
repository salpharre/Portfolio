const db = {
    Projects: [
        {
            "id": 1,
            "title": "Beyond Vacation",
            "description": "Beyond Vacation is a vacation outdoor rental app, built around the idea of vacationing while still social distancing, it's a vacation away from your (indefinite) vacation.",
            "github": "https://github.com/salpharre/BeyondVacation",
            "images": require("./images/beyondvacation.jpg"),
            "tech": "Nodejs, Express, MySQL"
        },
        {
            "id": 2,
            "title": "Employee Directory",
            "description": "This app allows users to sort employees alphabetically and filter by name",
            "github": "https://github.com/salpharre/Employee-Directory",
            "images": require("./images/directory.jpg"),
            "tech": "React, Bootstrap"
        },
        {
            "id": 3,
            "title": "Employee Tracker",
            "description": "CLI application to track your employees. Add your employees, roles with matching salaries and departments. View who is currently employed at your company and update what roles they have.",
            "github": "https://github.com/salpharre/Employee-Tracker",
            "images": require("./images/employeetracker.jpg"),
            "tech": "Node, MySQL"
        },
        {
            "id": 4,
            "title": "Weather Dashboard",
            "description": "Type in your location and weather for your location will appear. This application uses a weather API to use your entered city and state to reveal your weather.",
            "github": "https://github.com/salpharre/Weather-Dashboard",
            "images": require("./images/weather.jpg"),
            "tech": "Web API, Bootstrap"
        }
    ]
}
export default db;