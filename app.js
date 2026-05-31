/* ==========================================================================
   APPLICATION CONTROLLER - FRC TEAM 9999 VENTURI EFFECT ENGINE
   ========================================================================== */

// --- DATA STORES ---

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

// 2. Calendar Agenda Events
const calendarEvents = [];

// 3. Learning Resources
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
        "calendar": "view-calendar"
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


// --- 6. INTERACTIVE CONTACT MODAL & FORM ---

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
