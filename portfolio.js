import emoji from "react-easy-emoji";

export const greetings = {
	name: "Jayesh Shadi",
	title: "Hi, I'm Jayesh!",
	description:
	  "I am a software engineer with 2+ years of experience at Kotak Securities, where I have developed and led complex \
	  projects. My journey from Intern to Deputy Manager - IT (Software Developer) has equipped me with a robust technical \
	  background and strong leadership capabilities. I have successfully managed teams for over 2+ years and have been involved \
	  in significant projects like API development, system migrations, and application upgrades. I specialize in Node.js, Angular,\
	   .NET, and machine learning technologies, and I am passionate about continuous learning and innovation.",
	resumeLink: "https://drive.google.com/file/d/1KGiNC7_CIcQPYSl72SLCKMGINjCOwxwS/view?usp=drive_link",
};

export const openSource = {
	githubUserName: "jayesh-shadi",
};

export const contact = {};

export const socialLinks = {
	email:"jshadi1300@gmail.com",
	twitter: "https://twitter.com/jayesh_shadi",
	github: "https://github.com/jayesh-shadi",
	linkedin: "https://www.linkedin.com/in/jayesh-shadi-02486a10a/",
};

export const skillsSection = {
	title: "What I do",
	subTitle: "Leading the development and research of software solutions in various domains, with a strong focus in Full stack dev.",
	data: [
	  {
		title: "Full Stack Development",
		lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
		skills: [
		  emoji("🚀 Development and Deployment of Scalable APIs and Software Solutions"),
		  emoji("🛠️ Software Testing, Maintenance & Deployment Management"),
		  emoji("🌐 Distributed Systems Architecture & Cloud Solutions"),
		  emoji("🤝 Leading Technical Teams & Managing Projects"),
		],
		softwareSkills: [
		  { skillName: "Python", iconifyTag: "logos:python" },
		  { skillName: "Java", iconifyTag: "logos:java" },
		  { skillName: "JavaScript", iconifyTag: "logos:javascript" },
		  { skillName: "SQL", iconifyTag: "hugeicons:sql" },
		  { skillName: "PostgreSQL", iconifyTag: "simple-icons:postgresql" },
		  { skillName: "Angular", iconifyTag: "logos:angular" },
		  { skillName: "Django", iconifyTag: "logos:django" },
		  { skillName: "Docker", iconifyTag: "logos:docker-icon" },
		  { skillName: "Kubernetes", iconifyTag: "logos:kubernetes" },
		  { skillName: "GitHub", iconifyTag: "fontisto:github" },
		  { skillName: "Nodejs", iconifyTag: "logos:nodejs" },
		  { skillName: "DotNET", iconifyTag: "logos:dotnet" },
		  { skillName: "C-sharp", iconifyTag: "logos:c-sharp" },
		],
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
		progressPercentage: "90",
	  },
	  {
		Stack: "Programming",
		progressPercentage: "95",
	  },
];

export const educationInfo = [
	{
		schoolName: "University of Mumbai",
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
];

export const experience = [
	{
		role: "Deputy Manager - IT (Software Developer)",
		company: "Kotak Securities",
		contractor: "",
		companyLogo: "/img/icons/common/kotaksec.png",
		date: "June 2022-Present",
		titles: ["",""],
		desc: [
		  ["Developed and deployed a Node.js Express API application with 40+ endpoints.","Developed a .NET-based framework application utilizing Crystal Reports"],
		  ["Led the successful upgradation of internal applications from Angular v12.1.2 to v15.2.8","undertook a pivotal role in migrating the existing Journal Voucher (JV) system in winforms to an Angular v15.2.8"],
		],
	  },
	  {
		role: "Web Developer Intern",
		company: "VESIT RENAISSANCE",
		contractor: "",
		companyLogo: "/img/icons/common/ves.jfif",
		date: "May 2020-July 2020",
		titles: ["",""],
		desc: [
		  ["Developed a Website for College Faculty Profile.","Experienced the real-time Application of known programming languages. Technologies Used: - HTML5, CSS, JAVASCRIPT."],
		  [],
		],
	  },
	  {
		role: "Machine Learning Intern",
		company: "XANE.AI",
		contractor: "",
		companyLogo: "/img/icons/common/xane.ai.jpeg",
		date: "September 2020 – October 2020",
		titles: [""],
		desc: [["Used Machine learning to create a model that predicts which passengers survived the Titanic shipwreck.",
		]]
	  },
	  {
		role: "Managed Network Expert",
		company: "CHEGG INC",
		contractor: "",
		companyLogo: "/img/icons/common/chegg.jpeg",
		date: "Septeber 2020-November 2020",
		titles: [""],
		desc: [
		  ["Worked as a Part-time Question and Answer Expert where the tasks consisted of answering the questions based on concepts of Computer Science and Engineering."]],
	  },
];

export const projects = [
	{
		name: "Automated Crowd Management in Public Bus Transport System",
		desc: "Minimized human intervention by providing travelers with the live crowd\
	density of the bus approaching next. (Features: - Live Bus location update)",
		link: "https://link.springer.com/chapter/10.1007/978-981-19-4182-5_12",
	  },
	  {
		name: "Chikitsak- Disease Prediction using Machine Learning",
		desc: "Developed a project that Aims at Displaying: Illness/Disease based on features as symptoms entered by the user and providing precise results",
		link: "https://www.irjet.net/archives/V8/i7/IRJET-V8I7279.pdf",
	  },
];

