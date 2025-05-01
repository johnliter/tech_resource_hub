// Resource data
const resources = [
    {
        title: "daily.dev",
        description: "Get all your developer news in one place. A professional network for developers to stay updated.",
        category: "news",
        url: "https://daily.dev"
    },
    {
        title: "dev.to",
        description: "A constructive and inclusive social network for software developers.",
        category: "development",
        url: "https://dev.to"
    },
    {
        title: "TLDR Newsletter",
        description: "Daily newsletter with concise summaries of the most important stories in tech.",
        category: "news",
        url: "https://tldr.tech"
    },
    {
        title: "Hacker News",
        description: "Social news website focusing on computer science and entrepreneurship.",
        category: "news",
        url: "https://news.ycombinator.com"
    },
    {
        title: "Product Hunt",
        description: "The best new products in tech. Discover your next favorite thing.",
        category: "news",
        url: "https://www.producthunt.com"
    },
    {
        title: "Smashing Magazine",
        description: "For professional web designers and developers, with a focus on useful techniques.",
        category: "design",
        url: "https://www.smashingmagazine.com"
    },
    {
        title: "CSS-Tricks",
        description: "Daily articles about CSS, HTML, JavaScript, and all things related to web design.",
        category: "development",
        url: "https://css-tricks.com"
    },
    {
        title: "The Verge",
        description: "Covers the intersection of technology, science, art, and culture.",
        category: "news",
        url: "https://www.theverge.com"
    },
    {
        title: "Ars Technica",
        description: "The PC enthusiast's resource. In-depth technology news and reviews.",
        category: "news",
        url: "https://arstechnica.com"
    },
    {
        title: "Stack Overflow",
        description: "Public platform building the definitive collection of coding questions & answers.",
        category: "development",
        url: "https://stackoverflow.com"
    },
    {
        title: "GitHub Blog",
        description: "The latest news and updates from GitHub, the complete developer platform.",
        category: "development",
        url: "https://github.blog"
    },
    {
        title: "Wired",
        description: "In-depth coverage of current and future trends in technology.",
        category: "news",
        url: "https://www.wired.com"
    },
    {
        title: "Towards Data Science",
        description: "Sharing concepts, ideas, and codes in data science, machine learning, and AI.",
        category: "ai",
        url: "https://towardsdatascience.com"
    },
    {
        title: "Krebs on Security",
        description: "In-depth security news and investigation by Brian Krebs.",
        category: "security",
        url: "https://krebsonsecurity.com"
    },
    {
        title: "The Hacker News",
        description: "The most trusted and widely-acknowledged online cybersecurity news platform.",
        category: "security",
        url: "https://thehackernews.com"
    },
    {
        title: "MIT Technology Review",
        description: "Independent journalism about technology, its effects on society, and the future.",
        category: "news",
        url: "https://www.technologyreview.com"
    },
    {
        title: "Dribbble",
        description: "Discover the world's top designers & creatives, and the best design inspiration.",
        category: "design",
        url: "https://dribbble.com"
    },
    {
        title: "Behance",
        description: "Showcase and discover creative work on the world's leading online platform.",
        category: "design",
        url: "https://www.behance.net"
    },
    {
        title: "TechCrunch",
        description: "Breaking technology news, analysis, and opinions on the biggest companies.",
        category: "news",
        url: "https://techcrunch.com"
    },
    {
        title: "Notion Blog",
        description: "Articles about productivity, collaboration, and the future of work.",
        category: "productivity",
        url: "https://www.notion.so/blog"
    },
    {
        title: "OpenAI Blog",
        description: "Research and updates from OpenAI, an AI research and deployment company.",
        category: "ai",
        url: "https://openai.com/blog"
    },
    {
        title: "DeepMind Blog",
        description: "Latest news and research from DeepMind, advancing AI to benefit humanity.",
        category: "ai",
        url: "https://deepmind.com/blog"
    },
    {
        title: "Wait But Why",
        description: "Long-form articles on technology, AI, space, and human existence.",
        category: "news",
        url: "https://waitbutwhy.com"
    },
    {
        title: "Figma Blog",
        description: "Design resources, tips, and company updates from Figma.",
        category: "design",
        url: "https://www.figma.com/blog"
    },
    {
        title: "DigitalOcean Community",
        description: "Tutorials, questions, and resources for developers building on DigitalOcean.",
        category: "development",
        url: "https://www.digitalocean.com/community"
    },
    {
        title: "FreeCodeCamp News",
        description: "Thousands of programming tutorials to help you learn to code.",
        category: "development",
        url: "https://www.freecodecamp.org/news"
    },
    {
        title: "The Practical Dev",
        description: "Community for programmers to share ideas and help each other grow.",
        category: "development",
        url: "https://dev.to"
    },
    {
        title: "Codrops",
        description: "A web design and development blog that publishes articles and tutorials.",
        category: "design",
        url: "https://tympanus.net/codrops"
    },
    {
        title: "A List Apart",
        description: "Explores the design, development, and meaning of web content.",
        category: "development",
        url: "https://alistapart.com"
    },
    {
        title: "UX Collective",
        description: "Curated stories on user experience, usability, and product design.",
        category: "design",
        url: "https://uxdesign.cc"
    }
];

// DOM elements
const resourcesGrid = document.getElementById('resourcesGrid');
const searchInput = document.getElementById('search');
const categoryButtons = document.querySelectorAll('.category-btn');

// Display all resources initially
displayResources(resources);

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    
    const filteredResources = resources.filter(resource => {
        const matchesSearch = resource.title.toLowerCase().includes(searchTerm) || 
                             resource.description.toLowerCase().includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    displayResources(filteredResources);
});

// Category filter functionality
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const category = button.dataset.category;
        const searchTerm = searchInput.value.toLowerCase();
        
        const filteredResources = resources.filter(resource => {
            const matchesSearch = resource.title.toLowerCase().includes(searchTerm) || 
                                 resource.description.toLowerCase().includes(searchTerm);
            const matchesCategory = category === 'all' || resource.category === category;
            
            return matchesSearch && matchesCategory;
        });
        
        displayResources(filteredResources);
    });
});

// Function to display resources
function displayResources(resourcesToDisplay) {
    if (resourcesToDisplay.length === 0) {
        resourcesGrid.innerHTML = '<div class="no-results">No resources found matching your criteria. Try a different search or category.</div>';
        return;
    }
    
    resourcesGrid.innerHTML = resourcesToDisplay.map(resource => `
        <div class="resource-card">
            <span class="category">${resource.category}</span>
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <a href="${resource.url}" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
    `).join('');
}

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();