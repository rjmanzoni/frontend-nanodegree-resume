/*
This is empty on purpose! Your code to build the resume will go here.
 */
var myName = "Renato Manzoni";
var myRole = "Software Engineering";
var name = HTMLheaderName.replace("%data%", myName);
var role = HTMLheaderRole.replace("%data%", myRole);

$("#header").append(name);
$("#header").append(role);
