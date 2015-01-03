var formattedName = HTMLheaderName.replace("%data%", "Augustinas Markevicius");

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);