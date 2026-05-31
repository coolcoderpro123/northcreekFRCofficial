/* ==========================================================================
   APPLICATION CONTROLLER - FRC TEAM 9999 VENTURI EFFECT ENGINE
   ========================================================================== */

// --- DATA STORES ---

// Helper to resolve FontAwesome icons based on categories (removes image file dependency)
function getCategoryIcon(category) {
    const icons = {
        "engineering": "fa-cogs",
        "competition": "fa-trophy",
        "software": "fa-laptop-code",
        "outreach": "fa-child-reaching"
    };
    return icons[category] || "fa-robot";
}

// 1. Leadership Members
const leadershipData = {
    students: [
        {
            name: "Anshi Shah",
            role: "President",
            bio: "Freshman at North Creek High School. "
        },
        {
            name: "Riddhesh Jain",
            role: "Vice President",
            bio: "Freshman at North Creek High School"
        },
        {
            name: "Meher Aryan Buruguru",
            role: "Secratary",
            bio: "Freshman at North Creek High School."
        },
        {
            name: "Vanya Kaushik",
            role: "Treasurer",
            bio: "Freshman at North Creek High School."
        },
        {
            name: "Pranav Malladi",
            role: "ASB Representative",
            bio: "Freshman at North Creek High School."
        }
    ],
    mentors: [
        {
            name: "Avisha Agrawal, (2nd Person)",
            role: "Programming Leads",
        },
        {
            name: "Viraj Fadia, Riddhesh Jaini",
            role: "Mechanical/Build Leads",
        },
        {
            name: "Hemanth Irava, Pranav Malladi",
            role: "Electrical Leads",
        },
        {
            name: "Sameer Hussaini(?), Viraj Fadia",
            role: "CAD Leads",
        },
        {
            name: "Anshi Shah, Riddhesh Jaini",
            role: "Outreach Leads",
        },      
        {
            name: "Avisha Agrawal",
            role: "Documentation Lead",
        },          
        {
            name: "Shreyans Jain",
            role: "Safety Lead",
        },          
        {
            name: "Anshi Shah",
            role: "Strategy Lead",
        },          
    ]
};

// 2. Team Blog Posts
const blogPosts = [
    {
        id: "post-1",
        title: "Unveiling the 2026 Robot: Venturi V1",
        date: "May 15, 2026",
        category: "engineering",
        author: "Elena Rostova",
        excerpt: "After six intensive weeks of fabrication, coding, and structural assembly, Venturi Effect proudly presents 'Venturi V1' - our most advanced competitive machine yet.",
        content: `
            <p>Today marks the completion of the 2026 build season, and we could not be prouder of the result. Our engineering team has logged over 200 cumulative hours in the North Creek High School technology labs to construct our new FRC robot: <strong>Venturi V1</strong>.</p>
            <p>Designed to tackle the high-speed requirements of this season's arena challenges, Venturi V1 is built on a custom 29-inch square aluminum plate chassis, utilizing a high-efficiency 4-wheel independent Swerve Drive system. This allows the robot to accelerate sideways, rotate, and execute micro-adjustments instantly during matchplay.</p>
            <h4>Key Mechanical Feats:</h4>
            <ul>
                <li><strong>Dynamic Roller Intake:</strong> Designed in-house using custom polycarbonate panels and high-grip silicone rollers, enabling intake of game pieces from any orientation.</li>
                <li><strong>Dual-Stage Pneumatic Lift:</strong> Engineered to lift the entire 120 lbs robot structure up to the high hangar bars in under 1.8 seconds.</li>
                <li><strong>Lightweight Carbon Fiber Arms:</strong> Integrated to reduce total manipulator weight by 14 lbs, increasing motor reaction speeds by 30%.</li>
            </ul>
            <p>Our software sub-team is currently calibrating our autonomous pathways. Venturi V1 utilizes a dual-camera Limelight system that locks onto structural retroreflective targets in the arena, utilizing automated computer vision to align the shooter and execute launches from any location on the field. Stay tuned for our upcoming district debut!</p>
        `
    },
    {
        id: "post-2",
        title: "Winning the Excellence in Engineering Award",
        date: "April 22, 2026",
        category: "competition",
        author: "Alexander Vance",
        excerpt: "Team 9999 takes home the prestigious Excellence in Engineering Award at the PNW District Championships, securing a spot at Worlds!",
        content: `
            <p>What an incredible weekend at the Pacific Northwest District Championships! Competing against 50 of the top robotics teams in the region, Venturi Effect executed a spectacular tournament run, ultimately taking home the highly sought-after <strong>Excellence in Engineering Award</strong>.</p>
            <p>This award celebrates a team that demonstrates an elegant and professional design process, solid technology integration, and complete student mastery over the robot's design. During multiple judge interviews in the pits, our student directors explained our custom swerve kinematics and welding layouts with absolute clarity, impressing the industrial judges.</p>
            <blockquote>"Gracious Professionalism was on full display. The judges were amazed that every single line of code and weld was executed entirely by high school students." — Dr. Arthur Pendelton</blockquote>
            <p>On the field, our team was selected to lead the 3rd seed alliance, battling through grueling triple-overtime tiebreakers to reach the semi-finals. Combined with our prior District Event victory at Auburn, the points earned at this event have officially secured our qualifying invitation to the <strong>FIRST World Championships</strong> in Houston, Texas!</p>
            <p>We want to thank our parents, boosters, and corporate sponsors who made this long campaign possible. Venturi Effect is headed to the global stage!</p>
        `
    },
    {
        id: "post-3",
        title: "Swerve Drive: The Autonomous Programming Evolution",
        date: "March 10, 2026",
        category: "software",
        author: "Marcus Chen",
        excerpt: "A deep dive into how our software sub-team utilized advanced WPILib kinematics, odometry tracking, and sensor feedback to master autonomous driving.",
        content: `
            <p>Autonomous routines in FRC are won or lost in the first fifteen seconds of a match. During this brief timeframe, no humans are allowed on the controls; the robot must operate completely on pre-coded software instructions and live sensor evaluations.</p>
            <p>For the 2026 season, the Venturi Effect Software sub-team completely refactored our code from the ground up, transitioning from basic differential tank drive to high-end <strong>Swerve Drive Kinematics</strong>.</p>
            <h4>Mastering the Mathematics of Motion:</h4>
            <p>Unlike standard robots that move forward and backward, a Swerve robot has four independent wheels that can rotate 360 degrees. To coordinate this, our code calculates velocity vectors for each corner module simultaneously. We utilize the official WPILib Java library, mapping kinematics through custom wrappers to translate Cartesian coordinate inputs into individual motor voltage instructions.</p>
            <p>To trace our precise coordinate position on the field, we implement a highly optimized odometry system:</p>
            <ul>
                <li><strong>Pigeon 2.0 Gyroscope:</strong> Measures angular heading changes at a blazing fast 100Hz frequency.</li>
                <li><strong>CANcoder Encoders:</strong> Tracks the exact rotation of each steer module with 0.1-degree precision.</li>
                <li><strong>AprilTag Computer Vision:</strong> We use an onboard mini-computer to analyze target markers on the arena walls, dynamically correcting mathematical odometry drift relative to physical points.</li>
            </ul>
            <p>The result? Venturi V1 can trace curved spline paths, avoid obstacles, and accurately drop game pieces in the scoring zone within an average precision error of under 1.5 inches. This software breakthrough gives our alliance a massive strategic advantage during the match openers.</p>
        `
    },
    {
        id: "post-4",
        title: "Sparking Innovation: 2025 Summer STEM Camp Recap",
        date: "July 28, 2025",
        category: "outreach",
        author: "Sarah Jenkins",
        excerpt: "Inspiring the next generation of engineers. We mentored over 50 local middle school students at our annual two-week robotics camp.",
        content: `
            <p>Outreach is the heart of FRC Team 9999. While fabricating high-end competition machinery is incredibly exciting, sharing the absolute joy of technology with our local Bothell community is what truly inspires us.</p>
            <p>This past week, Venturi Effect hosted our annual <strong>Venturi STEM Summer Camp</strong> inside the North Creek High School technology shop. Designed for middle school students, the camp welcomes students of all backgrounds to explore science, manufacturing, and code.</p>
            <p>Over the two-week program, our senior high school team members volunteered as instructors, mentoring 52 campers divided into ten competitive teams. Using LEGO Mindstorms EV3 kits and basic Python scripts, the campers discovered structural balance, gear ratios, and core programming loops (if-statements, while-loops, sensor triggers).</p>
            <p>The camp concluded with our traditional "Venturi Arena Challenge," where families gathered to watch the student-made robots navigate obstacle courses and compete in exciting balloon-popping matches. We want to thank our Gold Sponsors whose donations funded full scholarships for 32 of our campers, ensuring technology education remains accessible to all.</p>
        `
    }
];

// 3. Calendar Agenda Events
const calendarEvents = [];

// 4. Learning Resources
const resourcesData = [
    {
        title: "FRC Team Member Handbook",
        desc: "The comprehensive rulebook detailing team organization, shop safety rules, travel guidelines, and behavior codes.",
        type: "internal",
        format: "PDF Document (2.4 MB)",
        link: "#/resources"
    },
    {
        title: "Venturi Effect Identity & Branding Guide",
        desc: "Our graphic standard manual including team colors (Emerald Green, Electric Purple), SVG logos, and official font styles.",
        type: "internal",
        format: "PDF Document (4.1 MB)",
        link: "#/resources"
    },
    {
        title: "Student & Parent Commitment Contract",
        desc: "Mandatory signing form detailing active workshop attendance policies and travel code criteria for competitive events.",
        type: "internal",
        format: "Printable Doc (340 KB)",
        link: "#/resources"
    },
    {
        title: "FIRST® Robotics Competition Site",
        desc: "Official FIRST portal for seasonal game manuals, competitive rule releases, safety manuals, and official game updates.",
        type: "external",
        format: "Official Web Portal",
        link: "https://www.firstinspires.org/robotics/frc"
    },
    {
        title: "The Blue Alliance Tracker",
        desc: "The ultimate FRC scouting base. Search match histories, alliance records, individual team statistics, and awards data.",
        type: "external",
        format: "Match Scouting Database",
        link: "https://www.thebluealliance.com"
    },
    {
        title: "Chief Delphi Community Forums",
        desc: "The central global FRC discussion portal. Ask questions about software loops, chassis machining, CAD layout, and pit setups.",
        type: "external",
        format: "Community Forum Portal",
        link: "https://www.chiefdelphi.com"
    },
    {
        title: "WPILib Software Development Docs",
        desc: "Official library resources outlining programming rules in Java and C++, sensor calibrations, and swerve drive setups.",
        type: "external",
        format: "Technical Java Documentation",
        link: "https://docs.wpilib.org"
    },
    {
        title: "Onshape FRC Part Libraries",
        desc: "Public assemblies of standard FRC motors, bearings, gearboxes, and structural rails for rapid mechanical CAD drafting.",
        type: "external",
        format: "CAD Parts Repository",
        link: "https://www.onshape.com"
    }
];


// --- APPLICATION INITIATOR & ENGINE ---

document.addEventListener("DOMContentLoaded", () => {
    
    // Initialize Core Modules
    initSPARouter();
    initMobileMenu();
    initContactModal();
    initBlogSystem();
    initCalendarAgenda();
    initResourcesSearch();
    initLeadershipBios();
    
    // Trigger initial route load
    handleNavigation();
});


// --- 1. CLIENT-SIDE HASH ROUTER ---

function initSPARouter() {
    // Listen to hash updates
    window.addEventListener("hashchange", handleNavigation);
}

function handleNavigation() {
    const rawHash = window.location.hash || "#/home";
    
    // Normalize hash (e.g. #/about -> about)
    let hashRoute = rawHash.replace(/^#\//, "");
    if (!hashRoute) hashRoute = "home";
    
    // Map of hash routes to section DOM element IDs
    const routes = {
        "home": "view-home",
        "about": "view-about",
        "history": "view-history",
        "leadership": "view-leadership",
        "outreach": "view-outreach",
        "fundraising": "view-fundraising",
        "boosters": "view-boosters",
        "sponsors": "view-sponsors",
        "first": "view-first",
        "resources": "view-resources",
        "calendar": "view-calendar",
        "blog": "view-blog"
    };
    
    const targetSectionId = routes[hashRoute] || "view-home";
    const targetSection = document.getElementById(targetSectionId);
    
    if (targetSection) {
        // Hide all active sections
        const allSections = document.querySelectorAll(".page-view");
        allSections.forEach(section => {
            section.classList.remove("active");
        });
        
        // Show target section with a slight delay for smooth fade transitions
        setTimeout(() => {
            targetSection.classList.add("active");
            window.scrollTo(0, 0); // Reset page scroll
        }, 50);
        
        // Update header active styling
        updateActiveHeaderLink(hashRoute);
    }
    
    // Close mobile menu on navigate
    const navMenu = document.getElementById("nav-menu-container");
    const menuToggle = document.getElementById("menu-toggle-btn");
    if (navMenu && navMenu.classList.contains("active-menu")) {
        navMenu.classList.remove("active-menu");
        menuToggle.classList.remove("active-btn");
    }
}

function updateActiveHeaderLink(activeRoute) {
    const headerLinks = document.querySelectorAll(".nav-item");
    headerLinks.forEach(link => {
        link.classList.remove("active-nav");
    });
    
    // Handle dropdown route parent highlight
    const dropdownRoutes = ["about", "history", "leadership", "outreach", "fundraising", "boosters"];
    let linkIdToHighlight = "nav-" + activeRoute;
    
    if (dropdownRoutes.includes(activeRoute)) {
        linkIdToHighlight = "nav-about";
    }
    
    const activeLink = document.getElementById(linkIdToHighlight);
    if (activeLink) {
        activeLink.classList.add("active-nav");
    }
}


// --- 2. MOBILE HAMBURGER MENU ---

function initMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle-btn");
    const navMenu = document.getElementById("nav-menu-container");
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active-btn");
            navMenu.classList.toggle("active-menu");
        });
    }
    
    // Mobile dropdown toggle inside menu
    const dropdownTrigger = document.querySelector(".nav-dropdown-trigger");
    if (dropdownTrigger) {
        dropdownTrigger.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Stop hash route transition to allow submenu opening
                const dropdownMenu = dropdownTrigger.nextElementSibling;
                if (dropdownMenu) {
                    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
                }
            }
        });
    }
}


// --- 3. DYNAMIC LEADERSHIP GRID ---

function initLeadershipBios() {
    const studentsGrid = document.getElementById("student-leaders-grid");
    const mentorsGrid = document.getElementById("mentors-grid");
    
    if (studentsGrid) {
        studentsGrid.innerHTML = leadershipData.students.map(member => createProfileCard(member)).join("");
    }
    
    if (mentorsGrid) {
        mentorsGrid.innerHTML = leadershipData.mentors.map(member => createProfileCard(member)).join("");
    }
}

function createProfileCard(member) {
    return `
        <div class="card glass-card profile-card relative-card">
            <div class="card-glow green-glow"></div>
            <div class="avatar-box">
                <i class="fa-solid fa-user-astronaut avatar-placeholder"></i>
            </div>
            <h4 class="profile-name">${member.name}</h4>
            <span class="profile-role">${member.role}</span>
            <span class="profile-tag">${member.tag}</span>
            <p class="profile-bio">${member.bio}</p>
        </div>
    `;
}


// --- 4. DYNAMIC CALENDAR / AGENDA ---

function initCalendarAgenda() {
    const agendaContainer = document.getElementById("calendar-agenda-container");
    const filterButtons = document.querySelectorAll(".calendar-filter-btn");
    
    if (!agendaContainer) return;
    
    // Render all initial events
    renderEvents("all");
    
    // Connect filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active-cal-filter"));
            btn.classList.add("active-cal-filter");
            
            const filterValue = btn.getAttribute("data-cal-filter");
            renderEvents(filterValue);
        });
    });
}

function renderEvents(categoryFilter) {
    const agendaContainer = document.getElementById("calendar-agenda-container");
    if (!agendaContainer) return;
    
    const filteredEvents = calendarEvents.filter(evt => {
        return categoryFilter === "all" || evt.category === categoryFilter;
    });
    
    if (filteredEvents.length === 0) {
        agendaContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fa-regular fa-calendar-xmark" style="font-size: 2.5rem; color: var(--neon-purple); margin-bottom: 1rem; display: block;"></i>
                <p>No upcoming events scheduled at this time. Check back soon!</p>
            </div>
        `;
        return;
    }
    
    agendaContainer.innerHTML = filteredEvents.map(evt => {
        let badgeClass = "badge-build";
        if (evt.category === "outreach") badgeClass = "badge-outreach";
        if (evt.category === "competition") badgeClass = "badge-competition";
        
        return `
            <div class="agenda-item">
                <div class="agenda-date-box">
                    <span class="date-num">${evt.day}</span>
                    <span class="date-month">${evt.month}</span>
                </div>
                <div class="agenda-info">
                    <h4>${evt.title}</h4>
                    <p class="agenda-desc">${evt.desc}</p>
                </div>
                <div class="agenda-meta">
                    <p><i class="fa-regular fa-clock"></i> ${evt.time}</p>
                    <p><i class="fa-solid fa-location-dot"></i> ${evt.location}</p>
                </div>
                <div class="agenda-badge">
                    <span class="badge-cal ${badgeClass}">${evt.category}</span>
                </div>
            </div>
        `;
    }).join("");
}


// --- 5. RESOURCES SEARCH AND FILTER ---

function initResourcesSearch() {
    const searchInput = document.getElementById("resource-search");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const gridContainer = document.getElementById("resources-grid-container");
    
    if (!gridContainer) return;
    
    // Initial Render
    renderResources("", "all");
    
    let currentFilter = "all";
    let currentQuery = "";
    
    // Connect search keyups
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentQuery = e.target.value.toLowerCase().trim();
            renderResources(currentQuery, currentFilter);
        });
    }
    
    // Connect filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active-filter"));
            btn.classList.add("active-filter");
            
            currentFilter = btn.getAttribute("data-filter");
            renderResources(currentQuery, currentFilter);
        });
    });
}

function renderResources(query, filter) {
    const gridContainer = document.getElementById("resources-grid-container");
    if (!gridContainer) return;
    
    const filteredList = resourcesData.filter(res => {
        const matchesQuery = res.title.toLowerCase().includes(query) || 
                             res.desc.toLowerCase().includes(query) || 
                             res.format.toLowerCase().includes(query);
                             
        const matchesFilter = filter === "all" || res.type === filter;
        
        return matchesQuery && matchesFilter;
    });
    
    if (filteredList.length === 0) {
        gridContainer.innerHTML = `
            <div class="grid-span-full card glass-card text-center py-5">
                <i class="fa-solid fa-file-excel" style="font-size: 2.5rem; color: var(--neon-purple); margin-bottom: 1rem;"></i>
                <p>No resources match your search criteria. Try typing another keyword!</p>
            </div>
        `;
        return;
    }
    
    gridContainer.innerHTML = filteredList.map(res => {
        const isExternal = res.type === "external";
        const tagClass = isExternal ? "tag-external" : "tag-internal";
        const buttonIcon = isExternal ? "fa-arrow-up-right-from-square" : "fa-file-arrow-down";
        const buttonText = isExternal ? "Visit Portal" : "Download File";
        const clickTarget = isExternal ? `target="_blank"` : "";
        const buttonStyleClass = isExternal ? "btn-secondary" : "btn-primary";
        
        return `
            <div class="card glass-card resource-card relative-card">
                <div class="card-glow ${isExternal ? 'green-glow' : 'purple-glow'}"></div>
                <div>
                    <div class="resource-meta">
                        <span class="resource-tag ${tagClass}">${res.type}</span>
                        <span class="resource-format">${res.format}</span>
                    </div>
                    <h4 class="resource-title">${res.title}</h4>
                    <p class="resource-desc">${res.desc}</p>
                </div>
                <a href="${res.link}" ${clickTarget} class="btn ${buttonStyleClass} btn-block">
                    <i class="fa-solid ${buttonIcon}"></i> ${buttonText}
                </a>
            </div>
        `;
    }).join("");
}


// --- 6. BLOG SYSTEM & MODAL POST READER ---

function initBlogSystem() {
    const homeBlogFeed = document.getElementById("homepage-blog-feed");
    const blogGrid = document.getElementById("blog-grid-container");
    const readerModal = document.getElementById("blog-reader-modal");
    const closeBtn = document.getElementById("blog-close-btn");
    
    // A. Render home page sidebar updates feed (Top 3 items)
    if (homeBlogFeed) {
        const topPosts = blogPosts.slice(0, 3);
        homeBlogFeed.innerHTML = topPosts.map(post => `
            <a href="#/blog" class="feed-item" data-post-id="${post.id}">
                <span class="feed-date"><i class="fa-regular fa-clock"></i> ${post.date}</span>
                <span class="feed-title">${post.title}</span>
            </a>
        `).join("");
        
        // Clicking home feed updates navigates to blog, and automatically opens that post detail
        const feedAnchors = homeBlogFeed.querySelectorAll(".feed-item");
        feedAnchors.forEach(anchor => {
            anchor.addEventListener("click", (e) => {
                const postId = anchor.getAttribute("data-post-id");
                // Delay opening to allow page transition
                setTimeout(() => {
                    openBlogReader(postId);
                }, 300);
            });
        });
    }
    
    // B. Render main blog grid page (Uses Light Mode Icon Placeholders instead of AI Images)
    if (blogGrid) {
        blogGrid.innerHTML = blogPosts.map(post => {
            const iconClass = getCategoryIcon(post.category);
            const iconColorClass = (post.category === "engineering" || post.category === "software") ? "text-green" : "text-purple";
            
            return `
                <div class="card glass-card blog-card relative-card">
                    <div class="card-glow purple-glow"></div>
                    <div class="blog-img-box-placeholder ${iconColorClass}">
                        <i class="fa-solid ${iconClass}"></i>
                    </div>
                    <div class="blog-meta-row">
                        <span class="blog-category"><i class="fa-solid fa-tags"></i> ${post.category}</span>
                        <span>${post.date}</span>
                    </div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <div class="blog-footer">
                        <span class="blog-author"><i class="fa-solid fa-circle-user"></i> By ${post.author}</span>
                        <button class="btn btn-secondary btn-sm read-blog-trigger" data-post-id="${post.id}">
                            Read Article <i class="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join("");
        
        // Wire up clicks on "Read Article" buttons
        const readBtns = blogGrid.querySelectorAll(".read-blog-trigger");
        readBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const postId = btn.getAttribute("data-post-id");
                openBlogReader(postId);
            });
        });
    }
    
    // C. Wire close handlers for blog modal
    if (closeBtn && readerModal) {
        closeBtn.addEventListener("click", () => {
            readerModal.classList.remove("active-modal");
        });
        
        // Click outside to close
        readerModal.addEventListener("click", (e) => {
            if (e.target === readerModal) {
                readerModal.classList.remove("active-modal");
            }
        });
    }
}

function openBlogReader(postId) {
    const post = blogPosts.find(p => p.id === postId);
    const detailContent = document.getElementById("blog-detail-content");
    const readerModal = document.getElementById("blog-reader-modal");
    
    if (post && detailContent && readerModal) {
        const iconClass = getCategoryIcon(post.category);
        const iconColorClass = (post.category === "engineering" || post.category === "software") ? "text-green" : "text-purple";
        
        detailContent.innerHTML = `
            <div class="blog-detail-header">
                <h2 class="blog-detail-title">${post.title}</h2>
                <div class="blog-detail-meta">
                    <span><i class="fa-regular fa-calendar"></i> ${post.date}</span>
                    <span><i class="fa-solid fa-user-circle"></i> Author: ${post.author}</span>
                    <span class="blog-category"><i class="fa-solid fa-tags"></i> Category: ${post.category}</span>
                </div>
            </div>
            <div class="blog-detail-image-box-placeholder ${iconColorClass}">
                <i class="fa-solid ${iconClass}"></i>
            </div>
            <div class="blog-detail-body">
                ${post.content}
            </div>
        `;
        
        // Open Modal overlay
        readerModal.classList.add("active-modal");
    }
}


// --- 7. INTERACTIVE CONTACT MODAL & FORM ---

function initContactModal() {
    const contactModal = document.getElementById("contact-modal");
    const closeBtn = document.getElementById("contact-close-btn");
    const successCloseBtn = document.getElementById("success-close-btn");
    const contactForm = document.getElementById("contact-form");
    const successState = document.getElementById("form-success-state");
    
    // Footer and sidebar trigger links
    const footerTrigger = document.getElementById("footer-contact-trigger");
    
    const openModal = () => {
        if (contactModal) {
            // Reset state
            if (contactForm) contactForm.style.display = "flex";
            if (successState) successState.style.display = "none";
            if (contactForm) contactForm.reset();
            
            contactModal.classList.add("active-modal");
        }
    };
    
    const closeModal = () => {
        if (contactModal) {
            contactModal.classList.remove("active-modal");
        }
    };
    
    if (footerTrigger) footerTrigger.addEventListener("click", openModal);
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (successCloseBtn) successCloseBtn.addEventListener("click", closeModal);
    
    if (contactModal) {
        contactModal.addEventListener("click", (e) => {
            if (e.target === contactModal) closeModal();
        });
    }
    
    // Connect Form Submit validation
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Stop standard redirect refresh
            
            const nameField = document.getElementById("form-name").value.trim();
            const emailField = document.getElementById("form-email").value.trim();
            const msgField = document.getElementById("form-message").value.trim();
            
            if (nameField && emailField && msgField) {
                // Show dynamic premium loading state or jump directly to success screen
                contactForm.style.display = "none";
                successState.style.display = "flex";
            }
        });
    }
}
