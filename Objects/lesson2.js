const user = {
    name:"upendra",
    courselist:[],
    buyCourse: function(courseName){
        return this.courselist.push(courseName);
    },
    courseCount: function(){
        return `${this.name} is enrolled for ${this.courselist.length}`;
    }
}

user.buyCourse("python");
user.buyCourse("c++");
console.log(user.courseCount());
