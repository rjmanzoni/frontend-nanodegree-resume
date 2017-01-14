/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name" : "Renato de Jesus Manzoni",
    "role" : "Software Engineering",
    "contacts" : {
        "mobile" : "+55 11 98356 3656",
        "email" : "rjmanzoni@gmail.com",
        "github" : "rjmanzoni",
        "location" : "Sao Paulo - SP, Brazi"
    },
    "wellcomeMessage" : "Hi there!",
    "biopic" : "images/me.png"
}

var education = {
    "schools" : [
        {
            "name" : "Campinas State University - UNICAMP",
            "degree" : "Pursuing Master Degree in Computer Science - 22 credit completed",
            "dates" : "2011"
        },
        {
            "name" : "Sao Paulo State University - UNESP",
            "degree" : "Bachelor of Computer Science",
            "dates" : "2008"
        }
    ],
    "courses" : [
        {
            "title" : "Front End web developer",
            "school" : "Udacity",
            "dates" : "2017",
            "url" : "https://udacity.com"
        }
    ]
}

var work = {
    "jobs" : [
        {
            "employer" : "UNIVERSO ONLINE - UOL",
            "title" : "Software Engineer",
            "projects" : [
                {
                    "name" : "User Authentication and Authorization",
                    "description" : "Java-based system development and maintenance for authentication and authorization of users (Single sign-on). The system is designed to support thousands of requests per second, horizontally scalability and ensure the safety of users' passwords."
                },
                {
                    "name" : "RESTful Web Service Authentication and Authorization",
                    "description" : "Client-server authentication protocol development for REST services. This protocol is based on Amazon Rest Authentication and HTTP Digest Authentication. A software architecture was designed to manage the credentials of clients and servers in order to facilitate integration."
                },
                {
                    "name": "Device Fingerprint",
                    "description" : "Java-based systems development and maintenance to identify devices according to the information provided by its Browser. This information is used to recognize potential fraud, finding similar devices and classifing them according to their profile."
                },
                {
                    "name": "Phishing Notification",
                    "description" : "Java-based systems development and maintenance that identifies phishing based on the web site domain. The notification is done by a JavaScript that sends a request for servers stating the origin of phishing."
                }
            ]
        }
    ]
}
