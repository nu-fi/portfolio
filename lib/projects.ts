export const projects = [
  {
    id: 'congklak-ai',
    patternNumber: '01',
    title: 'Congklak AI Web Application',
    role: 'AI / Full-Stack Engineer',
    tech: ['Gymnasium', 'PyTorch (PPO)', 'Gradio', 'Hugging Face'],
    description: 'Engineered a custom reinforcement learning environment to simulate traditional Congklak rules, trained a PPO agent, and deployed the interactive web application to Hugging Face Spaces using ZeroGPU architecture.',
    overview: 'A complete end-to-end AI architecture designed to explore the rules and mechanics of the traditional Indonesian game, Congklak, through the lens of machine learning.',
    process: 'I engineered a custom Reinforcement Learning environment using Gymnasium to accurately simulate the game mechanics. From there, I trained a Proximal Policy Optimization (PPO) agent using PyTorch. To make the model accessible, I developed a frontend interface using Gradio and deployed the entire application to Hugging Face Spaces utilizing ZeroGPU architecture.',
    outcome: 'A fully interactive, containerized web application where users can play Congklak against a trained AI agent in real-time.',
    liveLink: 'https://huggingface.co/spaces/nu-fi/congklak', // Update this!
    repoLink: 'https://github.com/nu-fi/congklak', // Update this!
    image: '/projects/congklak.jpg',
    isTableau: false
  },
  {
    id: 'financial-coop',
    patternNumber: '02',
    title: 'Financial Cooperative System',
    role: 'Full-Stack Developer',
    tech: ['React', 'Django REST', 'PostgreSQL', 'Docker', 'Prometheus'],
    description: 'Built a containerized full-stack web application for financial cooperative management, featuring robust APIs and automated server observability through Grafana and Discord webhooks.',
    overview: 'A robust, scalable management system engineered specifically for financial cooperatives, focusing on reliable data transactions and system observability.',
    process: 'The foundation was built using Django REST Framework and PostgreSQL for a secure backend, paired with a React frontend. The entire application was containerized using Docker to ensure consistent deployment. For proactive monitoring, I configured server observability utilizing Prometheus and Grafana, integrated with Discord Webhooks for real-time alerting.',
    outcome: 'A highly observable, production-ready cooperative platform that ensures reliable financial data management and immediate incident awareness.',
    liveLink: 'https://huggingface.co/spaces/nu-fi/congklak', // Update this!
    repoLink: 'https://github.com/nu-fi/koperasi', // Update this!
    image: '/projects/congklak.jpg',
    isTableau: false
  },
  {
    id: 'retail-strategy',
    patternNumber: '03',
    title: 'Retail Strategy Engine',
    role: 'Data / Python Developer',
    tech: ['Python', 'Streamlit', 'Apriori Algorithm', 'RFM'],
    description: 'Developed an automated analytics engine applying the Apriori algorithm and RFM segmentation to drive customer insights and market basket analysis.',
    overview: 'A data-driven web application designed to transform raw retail transaction data into actionable strategic insights through advanced segmentation and association rules.',
    process: 'I utilized Python and Streamlit to build the interactive engine. The core logic automates customer RFM (Recency, Frequency, Monetary) segmentation to identify high-value demographics. Additionally, I applied the Apriori algorithm to conduct market basket analysis, uncovering hidden purchasing patterns.',
    outcome: 'An accessible, automated analytics dashboard that empowers retail decision-makers to optimize inventory and targeted marketing strategies.',
    liveLink: 'https://retail-strategy-engine.streamlit.app/', // Update this!
    repoLink: 'https://github.com/nu-fi/retail-strategy-engine', // Update this!
    image: '/projects/retail.jpg',
    isTableau: false
  },
  {
    id: 'ecommerce-analytics',
    patternNumber: '04',
    title: 'E-Commerce Supply Chain Analytics',
    role: 'Data Analyst',
    tech: ['SQL', 'Tableau'],
    description: 'Conducted end-to-end supply chain analytics on Brazilian e-commerce datasets by constructing complex SQL queries and delivering interactive executive dashboards.',
    overview: 'A comprehensive analytical deep-dive into the supply chain performance and delivery metrics of a large-scale Brazilian e-commerce dataset.',
    process: 'The raw data was initially processed and translated from Portuguese using complex SQL queries to clean and join multiple disparate tables. Once structured, the data was visualized by constructing interactive, executive-level dashboards in Tableau.',
    outcome: 'Clear, interactive visual insights that highlight delivery bottlenecks, regional performance disparities, and actionable supply chain optimizations.',
    liveLink: 'hhttps://public.tableau.com/views/E-commerceperformancedashboard/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link', // Update this!
    repoLink: 'https://github.com/nu-fi/congklak', // Update this!
    // image: '/projects/congklak.jpg',
    isTableau: true
  }
];