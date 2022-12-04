module.exports = function () {
  return {
      surveys: [
          { id: 1, owner: "admin", title: "Survey 1", type: "General",startdate: "2022-11-26",enddate: "2022-11-30",
              q1:"Question 1",q2:"Question 2",q3:"Question 3",q4:"Question 4",q5:"Question5" },
          { id: 2, owner: "admin", title: "Survey 2", type: "Education",startdate: "2022-11-26",enddate: "2022-11-30",
          q1:"Question 1",q2:"Question 2",q3:"Question 3",q4:"Question 4",q5:"Question5" },
          { id: 3, owner: "admin", title: "Survey 3", type: "Social",startdate: "2022-11-26",enddate: "2022-11-30",
          q1:"Question 1",q2:"Question 2",q3:"Question 3",q4:"Question 4",q5:"Question5" }
          
      ],
      answers: [],
      users:[
        { id:"admin1",username:"admin",password:"123456",email:"a",displayName:"Admin",newPassword:"" }
      ]
  }
}
