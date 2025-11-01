const questions = [
  // 1
  {
    question: "HCI stands for:",
    options: [
      "Human Communication Interface",
      "Human Computer Interface",
      "Human Computer Interaction",
      "High Control Interaction",
    ],
    correct: 2,
  },
  {
    question: "What is the main focus of Human-Centered Design?",
    options: [
      "System performance",
      "Developer's preference",
      "User's needs and comfort",
      "Hardware efficiency",
    ],
    correct: 2,
  },
  {
    question:
      "Which of the following is a key characteristic of interactive systems?",
    options: [
      "They are static and unresponsive",
      "They provide real-time feedback",
      "They require no user interaction",
      "They avoid user-centered design",
    ],
    correct: 1,
  },
  {
    question: "Which of the following is NOT a symptom of bad design?",
    options: [
      "Confusing navigation",
      "Inconsistent design elements",
      "Seamless interaction",
      "Poor feedback",
    ],
    correct: 2,
  },
  {
    question: "Which product failed due to lack of human-centered design?",
    options: ["Spotify", "Google Glass", "iPhone", "Kindle"],
    correct: 1,
  },
  {
    question: "Which of the following is an example of bad design?",
    options: [
      "Paper towel that tears easily when wet",
      "Door with clear push/pull sign",
      "Calculator in shopping cart",
      "Voice control in smart TV",
    ],
    correct: 0,
  },
  {
    question:
      "What makes a plastic straw a good design compared to a paper straw?",
    options: [
      "Environmentally friendly",
      "Stays firm in use",
      "Cheaper to manufacture",
      "Breaks down faster",
    ],
    correct: 1,
  },
  {
    question: "What is meant by “reducing friction” in design?",
    options: [
      "Making users think more",
      "Adding more steps in a process",
      "Minimizing discomfort or confusion during interaction",
      "Removing feedback from the system",
    ],
    correct: 2,
  },
  {
    question:
      "Which of the following illustrates poor feedback in an interactive system?",
    options: [
      "Progress bar while uploading a file",
      "Subtle vibration when typing on iPhone",
      "Button click that shows no visual change",
      "Red underline for spelling error",
    ],
    correct: 2,
  },
  {
    question: "What defines 'success' in design as per Dreyfuss’s philosophy?",
    options: [
      "Minimal cost",
      "Higher product rating",
      "User comfort, efficiency, and satisfaction",
      "Advanced features",
    ],
    correct: 2,
  },
  // 2
  {
    question: "What is the core focus of interaction design?",
    options: [
      "Hardware efficiency",
      "Aesthetics only",
      "Designing interactions between users and systems",
      "Writing backend code",
    ],
    correct: 2,
  },
  {
    question: "Accessibility refers to:",
    options: [
      "Creating only visually appealing designs",
      "Making systems work faster",
      "Making technology usable for people with disabilities",
      "Avoiding user research",
    ],
    correct: 2,
  },
  {
    question: "Which of these is an example of inclusive design?",
    options: [
      "High-cost luxury product",
      "Monolingual app interface",
      "Adjustable desks and chairs",
      "Removing all instructions",
    ],
    correct: 2,
  },
  {
    question:
      "Which principle makes users feel confident by using familiar layouts and styles?",
    options: ["Constraints", "Visibility", "Affordance", "Consistency"],
    correct: 3,
  },
  {
    question:
      "According to interaction design goals, what should be done before starting a project?",
    options: [
      "Hire developers",
      "Document usability and UX goals",
      "Finalize budget",
      "Build the UI first",
    ],
    correct: 1,
  },
  {
    question: "What does the principle of 'Affordance' imply in design?",
    options: [
      "Design should be cheap",
      "Users should be able to afford the product",
      "The appearance of an object suggests how to use it",
      "Design should be colorful",
    ],
    correct: 2,
  },
  {
    question: "Which principle limits options to prevent user errors?",
    options: ["Feedback", "Constraints", "Visibility", "Consistency"],
    correct: 1,
  },
  {
    question: "What does 'iteration' mean in the design process?",
    options: [
      "Ignoring user feedback",
      "Designing only once",
      "Repeating design improvements based on feedback",
      "Creating fixed user paths",
    ],
    correct: 2,
  },
  {
    question: "Which design role focuses on ethical aspects and user privacy?",
    options: [
      "Motion Designer",
      "Ethical Designer",
      "AR Designer",
      "Front-End Developer",
    ],
    correct: 1,
  },
  {
    question:
      "Which principle ensures the user knows what just happened after clicking a button?",
    options: ["Constraints", "Consistency", "Feedback", "Simplicity"],
    correct: 2,
  },
  // 3
  {
    question: "What is the first stage in the Design Thinking process?",
    options: ["Define", "Ideate", "Empathize", "Prototype"],
    correct: 2,
  },
  {
    question: "What is the primary goal of user-centered design?",
    options: [
      "Profit maximization",
      "Meeting user needs",
      "Minimal code",
      "Using flashy graphics",
    ],
    correct: 1,
  },
  {
    question:
      "Which of the following is NOT one of the four basic activities in Interaction Design?",
    options: [
      "Discovering requirements",
      "Prototyping",
      "Testing hardware",
      "Evaluating",
    ],
    correct: 2,
  },
  {
    question: "What does 'affordance' in design refer to?",
    options: [
      "Minimizing cognitive load",
      "Simulating actions inspired by real-world interactions",
      "Making interactive systems visually appealing",
      "Designing consistent user interfaces",
    ],
    correct: 1,
  },
  {
    question: "What does A/B testing help in?",
    options: [
      "Speeding up code",
      "Comparing design alternatives",
      "Debugging",
      "Defining the problem",
    ],
    correct: 1,
  },
  {
    question: "Which principle is central to activity-centered design?",
    options: [
      "Aesthetics",
      "User individuality",
      "Tasks and activities",
      "Innovation",
    ],
    correct: 2,
  },
  {
    question:
      "What is the purpose of identifying stakeholders in interaction design?",
    options: [
      "Marketing promotion",
      "Budgeting",
      "Understanding different user groups",
      "Legal compliance",
    ],
    correct: 2,
  },
  {
    question: "In interaction design, why should alternatives be considered?",
    options: [
      "To waste time",
      "To create confusion",
      "To explore better options",
      "To reduce creativity",
    ],
    correct: 2,
  },
  {
    question: "What is the primary trade-off in interaction design?",
    options: [
      "Speed vs code quality",
      "User needs vs business goals",
      "Functionality vs budget",
      "Conflicting requirements",
    ],
    correct: 3,
  },
  {
    question:
      "Which of the following represents the interaction lifecycle model components?",
    options: [
      "Develop, Deliver, Review",
      "Empathize, Build, Sell",
      "Discover, Design, Prototype, Evaluate",
      "Sketch, Render, Sell",
    ],
    correct: 2,
  },
  // 4
  {
    question: "What does a 'persona' represent in user-centered design?",
    options: [
      "A software module",
      "A fictional, data-driven user profile",
      "A UI design template",
      "A marketing strategy",
    ],
    correct: 1,
  },
  {
    question: "What is the goal of empathy mapping?",
    options: [
      "Analyze system architecture",
      "Generate revenue",
      "Understand user emotions and behaviors",
      "Test product pricing",
    ],
    correct: 2,
  },
  {
    question: "Which quadrant is not a part of the empathy map?",
    options: ["Says", "Thinks", "Creates", "Feels"],
    correct: 2,
  },
  {
    question: "In which stage of design thinking are personas usually created?",
    options: ["Test", "Define", "Ideate", "Implement"],
    correct: 1,
  },
  {
    question:
      "Which of these is a method for organizing user data into themes?",
    options: ["Wireframing", "Affinity Mapping", "Prototyping", "Coding"],
    correct: 1,
  },
  {
    question: "What is the purpose of data synthesis in user research?",
    options: [
      "Grouping users for advertising",
      "Identifying themes and patterns",
      "Coding scripts",
      "Reducing storage",
    ],
    correct: 1,
  },
  {
    question: "Which type of user prefers advanced features and customization?",
    options: ["Casual user", "Novice user", "Frequent user", "Expert user"],
    correct: 3,
  },
  {
    question: "Which term refers to how users expect a system to behave?",
    options: [
      "Conceptual model",
      "Mental model",
      "User feedback",
      "Interface logic",
    ],
    correct: 1,
  },
  {
    question:
      "What is a core difference between a mental model and a conceptual model?",
    options: [
      "Mental model is user-centered; conceptual is designer-created",
      "Both are user-generated",
      "Conceptual model is unstructured",
      "Mental model is always correct",
    ],
    correct: 0,
  },
  {
    question: "Which user testing method compares two variations of a product?",
    options: [
      "Affinity mapping",
      "A/B testing",
      "Usability survey",
      "Persona mapping",
    ],
    correct: 1,
  },
  // 5
  {
    question: "What is an interface in HCI?",
    options: [
      "A programming language",
      "A tool for drawing diagrams",
      "A medium through which users and systems communicate",
      "A type of database",
    ],
    correct: 2,
  },
  {
    question: "Which of these is a type of user interaction?",
    options: ["Translating", "Dancing", "Conversing", "Encrypting"],
    correct: 2,
  },
  {
    question: "What is the main benefit of Direct Manipulation interfaces?",
    options: [
      "Complex commands",
      "No visual representation",
      "Rapid and intuitive interaction",
      "Keyboard only input",
    ],
    correct: 2,
  },
  {
    question:
      "Which law states that decision time increases with more choices?",
    options: ["Newton’s Law", "Fitts’s Law", "Miller’s Law", "Hick’s Law"],
    correct: 3,
  },
  {
    question: "What is the goal of using interface metaphors?",
    options: [
      "Confuse users",
      "Simplify code",
      "Help users relate unfamiliar systems with familiar ideas",
      "Replace users",
    ],
    correct: 2,
  },
  {
    question:
      "Which interaction type involves dragging, zooming, and selecting?",
    options: ["Conversing", "Manipulating", "Instructing", "Typing"],
    correct: 1,
  },
  {
    question: "Which of these is NOT a cognitive aspect in interface design?",
    options: ["Perception", "Attention", "Cooking", "Memory"],
    correct: 2,
  },
  {
    question: "What is a major benefit of mental models in design?",
    options: [
      "Increase animation",
      "Reduce memory effort",
      "Align system behavior with user expectations",
      "Avoid user testing",
    ],
    correct: 2,
  },
  {
    question:
      "What are the three components of Don Norman’s conceptual model framework?",
    options: [
      "Interface – User – Network",
      "Designer’s Model – System Image – User’s Model",
      "Input – Output – Context",
      "User – Device – Interaction",
    ],
    correct: 1,
  },
  {
    question: "Which interaction type best suits dynamic environments like VR?",
    options: ["Conversing", "Instructing", "Exploring", "Typing"],
    correct: 2,
  },
  // 6
  {
    question: "Why is data important in HCI?",
    options: [
      "For hardware design",
      "To help understand user needs and improve designs",
      "Only for marketing teams",
      "For graphic design",
    ],
    correct: 1,
  },
  {
    question: "Which of these is a method of data gathering?",
    options: ["Mind mapping", "Observation", "Copy-paste", "Programming"],
    correct: 1,
  },
  {
    question:
      "What kind of data does a fitness tracker collect during physical activity?",
    options: [
      "Email logs",
      "Social media posts",
      "Heart rate and steps",
      "Music playlists",
    ],
    correct: 2,
  },
  {
    question: "Which of these is a quantitative method of data analysis?",
    options: [
      "Affinity mapping",
      "Thematic grouping",
      "Statistical tests",
      "Storyboarding",
    ],
    correct: 2,
  },
  {
    question: "Which term describes collecting data from large online groups?",
    options: ["Ethnography", "Prototyping", "Crowdsourcing", "Debugging"],
    correct: 2,
  },
  {
    question:
      "Which one of these is a key ethical principle in data collection?",
    options: [
      "UI consistency",
      "Fast internet",
      "Informed consent",
      "Multitasking",
    ],
    correct: 2,
  },
  {
    question: "What does IRB stand for in research ethics?",
    options: [
      "Internal Research Board",
      "International Review Board",
      "Institutional Review Board",
      "Interface Review Board",
    ],
    correct: 2,
  },
  {
    question: "Which of these is a common bias in data collection?",
    options: [
      "Large font usage",
      "Preloaded videos",
      "Leading questions",
      "Short surveys",
    ],
    correct: 2,
  },
  {
    question: "What is the purpose of affinity mapping in HCI research?",
    options: [
      "Draw blueprints",
      "Map GPS data",
      "Group similar insights from qualitative data",
      "Match colors",
    ],
    correct: 2,
  },
  {
    question: "What is the ethical risk of poorly anonymized data?",
    options: [
      "Design inconsistency",
      "Performance drop",
      "User privacy breach",
      "Higher marketing cost",
    ],
    correct: 2,
  },
  // 7
  {
    question: "What is a prototype in interaction design?",
    options: [
      "A marketing plan",
      "A final product",
      "A representation of a design for interaction and feedback",
      "A business strategy",
    ],
    correct: 2,
  },
  {
    question: "What does a Lo-Fi prototype typically include?",
    options: [
      "Fully functional code",
      "Polished animations",
      "Simple hand-drawn sketches",
      "AI algorithms",
    ],
    correct: 2,
  },
  {
    question: "Which fidelity prototype is best for early brainstorming?",
    options: ["Hi-Fi", "Lo-Fi", "Mid-Fi", "Live product"],
    correct: 1,
  },
  {
    question: "Smart UI refers to interfaces that:",
    options: [
      "Only work on smartphones",
      "Are designed by robots",
      "Use AI to adapt to users’ behavior",
      "Only have voice control",
    ],
    correct: 2,
  },
  {
    question: "Which of the following is an example of Smart UI?",
    options: [
      "A paper menu",
      "Google Maps with real-time traffic updates",
      "A printed textbook",
      "A wired landline phone",
    ],
    correct: 1,
  },
  {
    question:
      "What type of prototype is best for visual polish and real interactivity?",
    options: ["Lo-Fi", "Hi-Fi", "Sticky notes", "Mood board"],
    correct: 1,
  },
  {
    question: "Which of the following best describes a Mid-Fi prototype?",
    options: [
      "Static wireframe without interaction",
      "Detailed, full-color final product",
      "Grayscale wireframe with limited interaction",
      "Sketches on sticky notes",
    ],
    correct: 2,
  },
  {
    question:
      "Which prototyping method involves users believing they are interacting with a real system, but a human is simulating the responses?",
    options: [
      "Lo-Fi Sketch",
      "Card Sorting",
      "Wizard-of-Oz",
      "Hi-Fi Prototype",
    ],
    correct: 2,
  },
  {
    question: "An experience map is mainly used to:",
    options: [
      "Track delivery orders",
      "Record user’s emotions and behavior over time",
      "Build the backend system",
      "Define data privacy",
    ],
    correct: 1,
  },
  {
    question: "Which of the following best describes a vertical prototype?",
    options: [
      "A broad interface with shallow features",
      "One feature built in detail",
      "A presentation about a prototype",
      "A basic sketch without logic",
    ],
    correct: 1,
  },
  // 8
  {
    question: "What is evaluation in HCI primarily used for?",
    options: [
      "Coding",
      "Aesthetic improvement",
      "Assessing usability and user experience",
      "Writing documentation",
    ],
    correct: 2,
  },
  {
    question: "What is usability in HCI?",
    options: [
      "App speed",
      "How good a UI looks",
      "Ease, efficiency, and satisfaction in user interaction",
      "Server uptime",
    ],
    correct: 2,
  },
  {
    question: "Which of these is a usability metric?",
    options: [
      "Battery usage",
      "Time on task",
      "Number of downloads",
      "Cloud storage",
    ],
    correct: 1,
  },
  {
    question: "What kind of data is collected using surveys?",
    options: [
      "Audio feedback",
      "Quantitative and qualitative feedback",
      "Server logs",
      "Code coverage",
    ],
    correct: 1,
  },
  {
    question: "Which method involves observing real users completing tasks?",
    options: [
      "Predictive modeling",
      "Web scraping",
      "Usability testing",
      "A/B marketing",
    ],
    correct: 2,
  },
  {
    question:
      "Which usability principle relates to reducing errors and helping users recover?",
    options: [
      "Aesthetics only",
      "User memory load",
      "Error prevention and recovery",
      "Server speed",
    ],
    correct: 2,
  },
  {
    question:
      "Which evaluation type helps identify specific usability problems?",
    options: ["Summative", "Diagnostic", "Predictive", "Survey-based"],
    correct: 1,
  },
  {
    question: "What is “Fitts’ Law” used to evaluate in UI design?",
    options: [
      "Response time of an app",
      "Eye strain",
      "Time to point at targets based on distance and size",
      "Battery drainage",
    ],
    correct: 2,
  },
  {
    question: "What is one drawback of heuristic evaluation?",
    options: [
      "Requires too many users",
      "No feedback at all",
      "Can miss real user problems and generate false alarms",
      "Does not need experts",
    ],
    correct: 2,
  },
  {
    question:
      "Which cognitive metric indicates how mentally demanding a task is?",
    options: [
      "Reaction time",
      "Mental effort",
      "Satisfaction score",
      "Server memory",
    ],
    correct: 1,
  },
  // 9
  {
    question: "What does IoT stand for?",
    options: [
      "Input of Technology",
      "Internet of Things",
      "Interface on Tablets",
      "Internal Output Transfer",
    ],
    correct: 1,
  },
  {
    question: "What is the goal of IoT in HCI systems?",
    options: [
      "To increase code complexity",
      "To isolate devices from users",
      "To connect physical devices and enable intelligent interaction",
      "To create virtual-only devices",
    ],
    correct: 2,
  },
  {
    question:
      "Which of these is a real-world example of IoT and HCI working together?",
    options: [
      "Typewriter",
      "Manual thermometer",
      "Smart thermostat adjusting temperature",
      "USB storage device",
    ],
    correct: 2,
  },
  {
    question: "What is a major benefit of HCI in IoT systems?",
    options: [
      "More hardware requirements",
      "Confusing user interfaces",
      "Making complex systems easier for users",
      "Removing user interaction",
    ],
    correct: 2,
  },
  {
    question: "What does a smart light system do in an HCI-IoT setup?",
    options: [
      "Print documents",
      "Change brightness based on presence",
      "Play music",
      "Open PDF files",
    ],
    correct: 1,
  },
  {
    question: "What does “user-centered design” mean in IoT?",
    options: [
      "Focus on developers’ preferences",
      "Focus on devices only",
      "Focus on user needs, context, and feedback",
      "Focus on data transfer rate",
    ],
    correct: 2,
  },
  {
    question:
      "Which of these is a key design challenge in HCI for IoT systems?",
    options: [
      "Making everything wireless",
      "Supporting only desktop users",
      "Diverse user demographics and accessibility",
      "Using heavy hardware",
    ],
    correct: 2,
  },
  {
    question: "What is an example of context-aware HCI design in IoT?",
    options: [
      "A fridge that beeps randomly",
      "A fan that adjusts speed based on room temperature",
      "A smart home with no app",
      "A lamp without brightness control",
    ],
    correct: 1,
  },
  {
    question: "In the HaptiDrag project, what sensation is simulated?",
    options: ["Sound", "Temperature", "Friction or drag", "Smell"],
    correct: 2,
  },
  {
    question: "Why is IoT-HCI integration ethically sensitive?",
    options: [
      "Devices are too expensive",
      "Overuse of storage",
      "Risks related to privacy, surveillance, and algorithmic bias",
      "Difficulty in learning coding",
    ],
    correct: 2,
  },
  // 10
  {
    question: "What does LLM stand for in the context of HCI?",
    options: [
      "Light Logic Machine",
      "Large Language Model",
      "Logical Learning Matrix",
      "Learning Loop Model",
    ],
    correct: 1,
  },
  {
    question: "Which is a common input to a Multimodal LLM?",
    options: [
      "Sound only",
      "Text only",
      "Text, image, audio, or video",
      "Binary code",
    ],
    correct: 2,
  },
  {
    question: "What is prompting in LLMs?",
    options: [
      "Coding UI",
      "Feeding tasks or instructions in natural language",
      "Saving responses in HTML",
      "Sending keyboard signals",
    ],
    correct: 1,
  },
  {
    question: "What type of prompting gives LLM a task with zero examples?",
    options: [
      "Chain of Thought",
      "Zero-shot prompting",
      "Few-shot prompting",
      "Instruction tuning",
    ],
    correct: 1,
  },
  {
    question: "What is personalization in digital systems?",
    options: [
      "Showing the same content to all users",
      "Creating long user forms",
      "Tailoring content and experience to user preferences",
      "Reducing user control",
    ],
    correct: 2,
  },
  {
    question:
      "Which field benefits from LLM-based real-time language translation for accessibility?",
    options: [
      "Circuit design",
      "Multilingual HCI",
      "Sports coaching",
      "Chemical engineering",
    ],
    correct: 1,
  },
  {
    question:
      "Which feature of LLMs helps generate content in the user’s tone and style?",
    options: [
      "Auto-compile",
      "Behavioral token tuning",
      "Neural pruning",
      "Hardware acceleration",
    ],
    correct: 1,
  },
  {
    question:
      "Which of the following is NOT a key desired behavior in HCI-LLM systems?",
    options: [
      "Product engagement",
      "Advocacy",
      "Inactivity",
      "Learning & skill growth",
    ],
    correct: 2,
  },
  {
    question: "What is behavior-optimized content?",
    options: [
      "Content designed for network speed",
      "Content generated to trigger a desired user response",
      "Content that ignores user context",
      "Static website banners",
    ],
    correct: 1,
  },
  {
    question: "Which of these LLM capabilities supports social inclusion?",
    options: [
      "File transfer",
      "Multilingual real-time translation",
      "Video editing",
      "Static UI generation",
    ],
    correct: 1,
  },
  // 11
  {
    question: "What is privacy in the context of HCI?",
    options: [
      "User data hidden from designers",
      "Protecting passwords only",
      "User’s ability to control personal information",
      "Avoiding sharing devices",
    ],
    correct: 2,
  },
  {
    question: "What is security in HCI?",
    options: [
      "Only using antivirus software",
      "Protecting systems from spam",
      "Safeguarding user data from unauthorized access",
      "Designing complex passwords",
    ],
    correct: 2,
  },
  {
    question:
      "Which of the following helps build user trust in digital systems?",
    options: [
      "Complex user interfaces",
      "Hidden settings",
      "Transparent data collection",
      "Long privacy policies",
    ],
    correct: 2,
  },
  {
    question: "What does 2FA stand for?",
    options: [
      "Two-Factor Authentication",
      "Fast Access Algorithm",
      "File Access Automation",
      "Fake Account Alert",
    ],
    correct: 0,
  },
  {
    question: "Which is an example of biometric authentication?",
    options: [
      "Typing password",
      "Fingerprint scan",
      "CAPTCHA",
      "Username login",
    ],
    correct: 1,
  },
  {
    question:
      "Which principle refers to embedding privacy from the beginning of system design?",
    options: [
      "Post-production privacy",
      "Privacy-first Encryption",
      "Privacy by Design",
      "Secure Proxy Layer",
    ],
    correct: 2,
  },
  {
    question: "What is the main goal of Explainable AI (XAI)?",
    options: [
      "Add humor to AI",
      "Hide AI decisions from users",
      "Make AI decisions understandable and transparent",
      "Teach AI how to explain jokes",
    ],
    correct: 2,
  },
  {
    question: "What is a dark pattern in interface design?",
    options: [
      "A color scheme",
      "An optimized design layout",
      "UI elements that deceive users into giving up data",
      "Custom themes",
    ],
    correct: 2,
  },
  {
    question: "What does GDPR stand for?",
    options: [
      "Global Digital Protection Rights",
      "General Data Protection Regulation",
      "Government Data Processing Rule",
      "General Device Privacy Rules",
    ],
    correct: 1,
  },
  {
    question: "Which of the following is NOT a known harm from LLMs?",
    options: [
      "Bias and discrimination",
      "Job displacement",
      "Strong password generation",
      "Privacy violations",
    ],
    correct: 2,
  },
  // 12
  {
    question:
      "What is the process of converting a message into a form suitable for transmission called?",
    options: ["Decoding", "Feedback", "Encoding", "Channel"],
    correct: 2,
  },
  {
    question: "Which model of communication includes feedback?",
    options: ["Linear", "Interactive", "One-way", "Directional"],
    correct: 1,
  },
  {
    question:
      "Which of these is NOT a component of the human conversational system?",
    options: ["Encoding", "Channel", "Bot Response", "Feedback"],
    correct: 2,
  },
  {
    question: "What is a major challenge in AI-based communication systems?",
    options: [
      "High cost of books",
      "Lack of coding",
      "Understanding user context",
      "Use of non-verbal cues",
    ],
    correct: 2,
  },
  {
    question:
      "What is the primary input in conversational AI systems like Alexa?",
    options: ["Keyboard", "Gesture", "Voice", "Mouse"],
    correct: 2,
  },
  {
    question:
      "Which of the following is an example of non-verbal communication?",
    options: ["Email", "Facial expression", "Podcast", "Article"],
    correct: 1,
  },
  {
    question:
      "Which key feature allows ChatGPT to maintain coherence in a conversation?",
    options: [
      "ASR",
      "Multi-user architecture",
      "Context-awareness",
      "Static programming",
    ],
    correct: 2,
  },
  {
    question:
      "Which AI technology is responsible for converting spoken language into text?",
    options: ["TTS", "NLP", "ASR", "ML"],
    correct: 2,
  },
  {
    question:
      "In the context of intelligent agents, what does it mean to be “situated in some environment”?",
    options: [
      "Physically built",
      "Can act based on external conditions",
      "Needs electricity",
      "Visible to users",
    ],
    correct: 1,
  },
  {
    question:
      "What is the main ethical concern with AI-based conversational systems?",
    options: [
      "Long response time",
      "Voice pitch variation",
      "Privacy and Bias",
      "High computation",
    ],
    correct: 2,
  },
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];

function loadQuestion() {
  const question = questions[currentQuestion];
  document.getElementById("question-number").textContent = `Question ${
    currentQuestion + 1
  } of ${questions.length}`;
  document.getElementById("question").textContent = question.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = option;
    button.onclick = () => selectAnswer(index);
    optionsContainer.appendChild(button);
  });

  selectedAnswer = userAnswers[currentQuestion] || null;
  if (selectedAnswer !== null) {
    document
      .querySelectorAll(".option")
      [selectedAnswer].classList.add("selected");
    document.getElementById("next-btn").disabled = false;
  } else {
    document.getElementById("next-btn").disabled = true;
  }

  document.getElementById("prev-btn").disabled = currentQuestion === 0;
}

function selectAnswer(index) {
  selectedAnswer = index;
  userAnswers[currentQuestion] = index;
  document.querySelectorAll(".option").forEach((btn, i) => {
    btn.classList.toggle("selected", i === index);
  });
  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    calculateScore();
    showResult();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

function calculateScore() {
  score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === questions[index].correct) {
      score++;
    }
  });
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById(
    "score"
  ).textContent = `You scored ${score} out of ${questions.length}`;
  showReview();
}

function showReview() {
  const reviewContainer = document.getElementById("review");
  reviewContainer.innerHTML = "";

  questions.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "review-question";

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = `${index + 1}. ${question.question}`;
    questionDiv.appendChild(questionTitle);

    question.options.forEach((option, optionIndex) => {
      const optionDiv = document.createElement("div");
      optionDiv.className = "review-option";
      optionDiv.textContent = option;

      if (optionIndex === question.correct) {
        optionDiv.classList.add("correct");
      }

      questionDiv.appendChild(optionDiv);
    });

    reviewContainer.appendChild(questionDiv);
  });
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  selectedAnswer = null;
  userAnswers = [];
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
  loadQuestion();
}

// Initialize quiz
loadQuestion();
