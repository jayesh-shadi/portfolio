import emoji from "react-easy-emoji";

export const greetings = {
	name: "Jayesh Shadi",
	title: "Hi all, I'm Jayesh",
	description:
	"I am Full Stack Developer from India.I enjoy taking complex problems and converting them into simple and beautiful working models.I also love the logic and Structure of Coding and always solve to write elegant and efficient code whether it be HTML, CSS or JQuery.I have always admired and found Technology Fascinating.Its Not that we use Technology we Live Technology.",
	resumeLink: "https://drive.google.com/file/d/1TjrsTT3UhcGbNUWLJ2JiRK7uW4MgGsRE/view?usp=sharing",
};

export const openSource = {
	githubUserName: "jayesh-shadi",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/profile.php?id=100008979016534",
	instagram: "https://www.instagram.com/jayesh_shadi/",
	twitter: "https://twitter.com/jayesh_shadi",
	github: "https://github.com/jayesh-shadi",
	linkedin: "https://www.linkedin.com/in/jayesh-shadi-02486a10a/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Develop Progressive Web Applications"
		),

	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "Java",
			fontAwesomeClassname: "logos:java",
		},
		{
			skillName: "SQL",
			fontAwesomeClassname: "logos:mysql",
		},
		{
			skillName: "Django",
			fontAwesomeClassname: "logos:django",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "85", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Vivekanand Education Society's Institute Of Technology",
		subHeader: "B.E. in Computer Engineering",
		duration: "August 2018 - July 2022",
		desc: "Mumbai, India",
		descBullets: [
			"SORT Incharge for 3 Consecutive years.",
			"Published Research Paper on Chikitsak: Disease Prediction System using Machine Learning (ISO 9001:2008 Certified Journal) ",
		],
	},
	{
		schoolName: "Ideal Junior College",
		subHeader: "High School(PCM)",
		duration: "August 2016 - March 2018",
		desc: "Hyderabad, Telangana.",
		descBullets: [
			"Secured 94.3% in High School",
		],
	},
	{
		schoolName: "Kk Cambridge International Schoool",
		subHeader: "Secondary School",
		duration: "August 2011 - March 2016",
		desc: "Amravati, Maharashtra",
		descBullets: [
			"Yellow House Leader",
			"Won Story Writing Competition",
		],
	},
];

export const experience = [
	{
		role: "Web Developer Intern",
		company: "VESIT RENAISSANCE",
		companylogo: "/img/icons/common/ves.jfif",
		date: "May 2020-July 2020",
		desc: "",
		descBullets: [
			"Developed a Website for College Faculty Profile.",
			"Experienced the real-time Application of known programming languages. Technologies Used: - HTML5, CSS, JAVASCRIPT.",
		],
	},
	{
		role: "Machine Learning Intern",
		company: "XANE.AI",
		companylogo: "/img/icons/common/xane.ai.jpeg",
		date: "September 2020 – October 2020",
		desc: "Used Machine learning to create a model that predicts which passengers survived the Titanic shipwreck.",
	},
	{
		role: "Managed Network Expert",
		company: "CHEGG INC",
		companylogo: "/img/icons/common/chegg.jpeg",
		date: "Septeber 2020-November 2020",
		desc: "Worked as a Part-time Question and Answer Expert where the tasks consisted of answering the questions based on concepts of Computer Science and Engineering.",
	},
];

export const projects = [
	{
		name: "Automated Crowd Management in Public Bus Transport System. (06/2021 – 08/2021)",
		desc: "",
		desc:[
			"Worked as an Application Developer that tend to minimize the human intervention to provide the travelers who are waiting at the bus stop with the live crowd density of the bus approaching next. (Features: - Live Bus location update) ",
			"Technologies Used: - Android Studio, Java. ",
			"For Model Training CNN was Used. ",
		],
		link:"https://github.com/jayesh-shadi/Automated-Crowd-Management-system-in-Bus",
	},
	{
		name: "Chikitsak- Disease Prediction using Machine Learning (06/2020 - 04/2021)",
		desc:[
			"Worked on Django (Python Based Web Framework) for Backend. HTML, CSS, Bootstrap, JavaScript, jQuery for the frontend and PostgreSQL as the Database. This Project was mainly focused on building a web application that that predicts an illness based on the information or symptoms entered into the system and provides precise results.• For Model Training: - Random Forest, Decision Tree and Naive Bayes Classifier Algorithms were used to achieve the maximal accurate result."
		],

		link: "https://github.com/jayesh-shadi/Chikitsak-Disease_Prediction_Using_Machine_Learning",
	},
];

