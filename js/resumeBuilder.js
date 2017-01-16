/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name" : "Renato Manzoni",
    "role" : "Software Engineering",
    "contacts" : {
        "mobile" : "+55 11 98356 3656",
        "email" : "rjmanzoni@gmail.com",
        "github" : "rjmanzoni",
        "location" : "Sao Paulo - SP, Brazi"
    },
    "wellcomeMessage" : "Hi there!",
    "biopic" : "images/me.png",
    "skills" : ["Java", "Perl", "Shell Script", "SQL", "MongoDB", "Apache Cassandra", "Elasticsearch", "Apache Flume", "Logstash", "Apache Hadoop", "Jetty", "WildFly", "REST", "SOAP", "Redis", "Infinispan", "Memcached", "Cryptography", "Apache ActiveMQ", "Linux"]
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
            "employer" : "UNIVERSO ONLINE",
            "title" : "Software Engineer",
            "description" : "Software Engineer working in Java backend systems development with a focus on scalability, performance, interoperability and security.",
            "dates" : "2011 - Present",
            "location" : "São Paulo - SP, Brazil",
        }
    ]
}

var projects = {
    "projects" : [
                {
                    "title" : "User Authentication and Authorization",
                    "dates" : "2011 - 2013",
                    "description" : "Java-based system development and maintenance for authentication and authorization of users (Single sign-on). The system is designed to support thousands of requests per second, horizontally scalability and ensure the safety of users' passwords."
                },
                {
                    "title" : "RESTful Web Service Authentication and Authorization",
                    "dates" : "2011 - 2012",
                    "description" : "Client-server authentication protocol development for REST services. This protocol is based on Amazon Rest Authentication and HTTP Digest Authentication. A software architecture was designed to manage the credentials of clients and servers in order to facilitate integration."
                },
                {
                    "title": "Device Fingerprint",
                    "dates" : "2011 - 2012",
                    "description" : "Java-based systems development and maintenance to identify devices according to the information provided by its Browser. This information is used to recognize potential fraud, finding similar devices and classifing them according to their profile."
                },
                {
                    "title": "Phishing Notification",
                    "dates" : "2015 - 2016",
                    "description" : "Java-based systems development and maintenance that identifies phishing based on the web site domain. The notification is done by a JavaScript that sends a request for servers stating the origin of phishing."
                }
            ]
}


projects.display = function(){
    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formmatedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formmatedTitle);

        var formmatedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formmatedDates);

        var formmatedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formmatedDescription);
    }
}

projects.display();

if(bio.skills){
    $("#header").append(HTMLheaderName.replace("%data%", "Renato Manzoni"));
    $("#header").append(HTMLskillsStart);

    $("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
}

function displayWork(){
    for (index in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
 });

function inMain(name){
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);



