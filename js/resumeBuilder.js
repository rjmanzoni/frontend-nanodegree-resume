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
        "location" : "Sao Paulo - SP, Brazil"
    },
    "wellcomeMessage" : "Hi there!",
    "biopic" : "images/me.jpg",
    "skills" : ["Problem Analysis and Resolution", "Software Testing and Troubleshooting", "Object Oriented Programming", "NoSQL Database"]
}

bio.internacionalizeName = function(name){
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

bio.display = function(){

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.internacionalizeName("Renato Manzoni")));

    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.wellcomeMessage));

    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills){
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
}

bio.display();

var work = {
    "jobs" : [
        {
            "employer" : "UNIVERSO ONLINE",
            "title" : "Software Engineer",
            "description" : "Software Engineer working in Java backend systems development with a focus on scalability, performance, interoperability and security.",
            "dates" : "in progress",
            "location" : "São Paulo - SP, Brazil",
        }
    ]
}

work.display = function (){
    for (index in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
        $(".work-entry:last").append(formattedDates);

        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[index].location));

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

work.display();

var projects = {
    "projects" : [
                {
                    "title" : "User Authentication and Authorization",
                    "dates" : "2011 - 2013",
                    "images" : ["images/197x148.gif"],
                    "description" : "Java-based system development and maintenance for authentication and authorization of users (Single sign-on). The system is designed to support thousands of requests per second, horizontally scalability and ensure the safety of users' passwords."
                },
                {
                    "title" : "RESTful Web Service Authentication and Authorization",
                    "dates" : "2011 - 2012",
                    "images" : ["images/197x148.gif"],
                    "description" : "Client-server authentication protocol development for REST services. This protocol is based on Amazon Rest Authentication and HTTP Digest Authentication. A software architecture was designed to manage the credentials of clients and servers in order to facilitate integration."
                },
                {
                    "title": "Device Fingerprint",
                    "dates" : "2011 - 2012",
                    "images" : ["images/197x148.gif"],
                    "description" : "Java-based systems development and maintenance to identify devices according to the information provided by its Browser. This information is used to recognize potential fraud, finding similar devices and classifing them according to their profile."
                },
                {
                    "title": "Phishing Notification",
                    "dates" : "2015 - 2016",
                    "images" : ["images/197x148.gif"],
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

var education = {
    "schools" : [
        {
            "name" : "Campinas State University - UNICAMP",
            "location" : "Campinas - SP, Brazil",
            "degree" : "Pursuing Master Degree in Computer Science - 22 credit completed",
            "majors" : ["Software Engineering","Fault Tolerance", "Computer Science"],
            "dates" : "2011",
            "url" : "http://www.ic.unicamp.br/"
        },
        {
            "name" : "Sao Paulo State University - UNESP",
            "location" : "Presidente Prudente - SP, Brazil",
            "degree" : "Bachelor of Computer Science",
            "majors" : ["Computer Science"],
            "dates" : "2008",
            "url" : "http://www.fct.unesp.br/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front End web developer",
            "school" : "Udacity",
            "dates" : "2017",
            "url" : "https://www.udacity.com"
        }
    ]
}

education.display = function(){
    for(school in education.schools){
      $("#education").append(HTMLschoolStart);

      $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name));
      $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
    }

    $("#education").append(HTMLonlineClasses);

    for(onlineCourse in education.onlineCourses){
      $("#education").append(HTMLschoolStart);

      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title));
      $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates));
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url));
    }
}

education.display();

$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);
