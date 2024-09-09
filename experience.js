// Handle form submission and display selected roles and skills
document.getElementById('role-form').addEventListener('change', function() {
    const selectedRoles = Array.from(document.querySelectorAll('input[name="role"]:checked')).map(role => role.value);
    console.log('Selected Roles:', selectedRoles);
});

document.getElementById('skill-form').addEventListener('change', function() {
    const skill1 = document.getElementById('skill1').value;
    const skill2 = document.getElementById('skill2').value;
    const skill3 = document.getElementById('skill3').value;
    const skill4 = document.getElementById('skill4').value;
    const skill5 = document.getElementById('skill5').value;
    
    const skills = [skill1, skill2, skill3, skill4, skill5].filter(skill => skill);
    console.log('Top Skills:', skills);
});