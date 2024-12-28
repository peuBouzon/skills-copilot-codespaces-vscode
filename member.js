function skillsMember() {
    return {
        name: 'John Doe',
        age: 25,
        skills: ['JavaScript', 'HTML', 'CSS'],
        showSkills: function() {
            this.skills.forEach(skill => {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };
}