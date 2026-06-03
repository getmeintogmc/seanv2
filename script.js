// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('Service Worker registered'))
        .catch(err => console.log('Service Worker registration failed'));
}

// NEET Data - Complete spaced repetition timetable
const neetData = [
    // Physics Chapters
    { subject: 'Physics', chapter: 'Units and Measurements', pass1Start: '2026-06-03', pass1D1: '2026-06-04', pass1D3: '2026-06-06', pass1D7: '2026-06-10', pass1D30: '2026-07-03', pass2Start: '2026-09-03', pass2D1: '2026-09-04', pass2D7: '2026-09-10' },
    { subject: 'Physics', chapter: 'Motion in a Straight Line', pass1Start: '2026-06-05', pass1D1: '2026-06-06', pass1D3: '2026-06-08', pass1D7: '2026-06-12', pass1D30: '2026-07-05', pass2Start: '2026-09-04', pass2D1: '2026-09-05', pass2D7: '2026-09-11' },
    { subject: 'Physics', chapter: 'Motion in a Plane', pass1Start: '2026-06-07', pass1D1: '2026-06-08', pass1D3: '2026-06-10', pass1D7: '2026-06-14', pass1D30: '2026-07-07', pass2Start: '2026-09-05', pass2D1: '2026-09-06', pass2D7: '2026-09-12' },
    { subject: 'Physics', chapter: 'Laws of Motion', pass1Start: '2026-06-09', pass1D1: '2026-06-10', pass1D3: '2026-06-12', pass1D7: '2026-06-16', pass1D30: '2026-07-09', pass2Start: '2026-09-07', pass2D1: '2026-09-08', pass2D7: '2026-09-14' },
    { subject: 'Physics', chapter: 'Work Energy and Power', pass1Start: '2026-06-11', pass1D1: '2026-06-12', pass1D3: '2026-06-14', pass1D7: '2026-06-18', pass1D30: '2026-07-11', pass2Start: '2026-09-08', pass2D1: '2026-09-09', pass2D7: '2026-09-15' },
    { subject: 'Physics', chapter: 'System of Particles and Rotational Motion', pass1Start: '2026-06-13', pass1D1: '2026-06-14', pass1D3: '2026-06-16', pass1D7: '2026-06-20', pass1D30: '2026-07-13', pass2Start: '2026-09-09', pass2D1: '2026-09-10', pass2D7: '2026-09-16' },
    { subject: 'Physics', chapter: 'Gravitation', pass1Start: '2026-06-16', pass1D1: '2026-06-17', pass1D3: '2026-06-19', pass1D7: '2026-06-23', pass1D30: '2026-07-16', pass2Start: '2026-09-11', pass2D1: '2026-09-12', pass2D7: '2026-09-18' },
    { subject: 'Physics', chapter: 'Mechanical Properties of Solids', pass1Start: '2026-06-18', pass1D1: '2026-06-19', pass1D3: '2026-06-21', pass1D7: '2026-06-25', pass1D30: '2026-07-18', pass2Start: '2026-09-12', pass2D1: '2026-09-13', pass2D7: '2026-09-19' },
    { subject: 'Physics', chapter: 'Mechanical Properties of Fluids', pass1Start: '2026-06-20', pass1D1: '2026-06-21', pass1D3: '2026-06-23', pass1D7: '2026-06-27', pass1D30: '2026-07-20', pass2Start: '2026-09-14', pass2D1: '2026-09-15', pass2D7: '2026-09-21' },
    { subject: 'Physics', chapter: 'Thermal Properties of Matter', pass1Start: '2026-06-23', pass1D1: '2026-06-24', pass1D3: '2026-06-26', pass1D7: '2026-06-30', pass1D30: '2026-07-23', pass2Start: '2026-09-15', pass2D1: '2026-09-16', pass2D7: '2026-09-22' },
    { subject: 'Physics', chapter: 'Thermodynamics', pass1Start: '2026-06-25', pass1D1: '2026-06-26', pass1D3: '2026-06-28', pass1D7: '2026-07-02', pass1D30: '2026-07-25', pass2Start: '2026-09-16', pass2D1: '2026-09-17', pass2D7: '2026-09-23' },
    { subject: 'Physics', chapter: 'Kinetic Theory', pass1Start: '2026-06-27', pass1D1: '2026-06-28', pass1D3: '2026-06-30', pass1D7: '2026-07-04', pass1D30: '2026-07-27', pass2Start: '2026-09-18', pass2D1: '2026-09-19', pass2D7: '2026-09-25' },
    { subject: 'Physics', chapter: 'Oscillations', pass1Start: '2026-06-30', pass1D1: '2026-07-01', pass1D3: '2026-07-03', pass1D7: '2026-07-07', pass1D30: '2026-07-30', pass2Start: '2026-09-19', pass2D1: '2026-09-20', pass2D7: '2026-09-26' },
    { subject: 'Physics', chapter: 'Waves', pass1Start: '2026-07-02', pass1D1: '2026-07-03', pass1D3: '2026-07-05', pass1D7: '2026-07-09', pass1D30: '2026-08-01', pass2Start: '2026-09-21', pass2D1: '2026-09-22', pass2D7: '2026-09-28' },
    { subject: 'Physics', chapter: 'Electric Charges and Fields', pass1Start: '2026-07-04', pass1D1: '2026-07-05', pass1D3: '2026-07-07', pass1D7: '2026-07-11', pass1D30: '2026-08-03', pass2Start: '2026-09-22', pass2D1: '2026-09-23', pass2D7: '2026-09-29' },
    { subject: 'Physics', chapter: 'Electrostatic Potential and Capacitance', pass1Start: '2026-07-07', pass1D1: '2026-07-08', pass1D3: '2026-07-10', pass1D7: '2026-07-14', pass1D30: '2026-08-06', pass2Start: '2026-09-23', pass2D1: '2026-09-24', pass2D7: '2026-09-30' },
    { subject: 'Physics', chapter: 'Current Electricity', pass1Start: '2026-07-09', pass1D1: '2026-07-10', pass1D3: '2026-07-12', pass1D7: '2026-07-16', pass1D30: '2026-08-08', pass2Start: '2026-09-25', pass2D1: '2026-09-26', pass2D7: '2026-10-02' },
    { subject: 'Physics', chapter: 'Moving Charges and Magnetism', pass1Start: '2026-07-11', pass1D1: '2026-07-12', pass1D3: '2026-07-14', pass1D7: '2026-07-18', pass1D30: '2026-08-10', pass2Start: '2026-09-26', pass2D1: '2026-09-27', pass2D7: '2026-10-03' },
    { subject: 'Physics', chapter: 'Magnetism and Matter', pass1Start: '2026-07-14', pass1D1: '2026-07-15', pass1D3: '2026-07-17', pass1D7: '2026-07-21', pass1D30: '2026-08-13', pass2Start: '2026-09-28', pass2D1: '2026-09-29', pass2D7: '2026-10-05' },
    { subject: 'Physics', chapter: 'Electromagnetic Induction', pass1Start: '2026-07-16', pass1D1: '2026-07-17', pass1D3: '2026-07-19', pass1D7: '2026-07-23', pass1D30: '2026-08-15', pass2Start: '2026-09-29', pass2D1: '2026-09-30', pass2D7: '2026-10-06' },
    { subject: 'Physics', chapter: 'Alternating Current', pass1Start: '2026-07-18', pass1D1: '2026-07-19', pass1D3: '2026-07-21', pass1D7: '2026-07-25', pass1D30: '2026-08-17', pass2Start: '2026-10-01', pass2D1: '2026-10-02', pass2D7: '2026-10-08' },
    { subject: 'Physics', chapter: 'Electromagnetic Waves', pass1Start: '2026-07-21', pass1D1: '2026-07-22', pass1D3: '2026-07-24', pass1D7: '2026-07-28', pass1D30: '2026-08-20', pass2Start: '2026-10-02', pass2D1: '2026-10-03', pass2D7: '2026-10-09' },
    { subject: 'Physics', chapter: 'Ray Optics and Optical Instruments', pass1Start: '2026-07-23', pass1D1: '2026-07-24', pass1D3: '2026-07-26', pass1D7: '2026-07-30', pass1D30: '2026-08-22', pass2Start: '2026-10-03', pass2D1: '2026-10-04', pass2D7: '2026-10-10' },
    { subject: 'Physics', chapter: 'Wave Optics', pass1Start: '2026-07-25', pass1D1: '2026-07-26', pass1D3: '2026-07-28', pass1D7: '2026-08-01', pass1D30: '2026-08-24', pass2Start: '2026-10-06', pass2D1: '2026-10-07', pass2D7: '2026-10-13' },
    { subject: 'Physics', chapter: 'Dual Nature of Radiation and Matter', pass1Start: '2026-07-28', pass1D1: '2026-07-29', pass1D3: '2026-07-31', pass1D7: '2026-08-04', pass1D30: '2026-08-27', pass2Start: '2026-10-07', pass2D1: '2026-10-08', pass2D7: '2026-10-14' },
    { subject: 'Physics', chapter: 'Atoms', pass1Start: '2026-07-30', pass1D1: '2026-07-31', pass1D3: '2026-08-02', pass1D7: '2026-08-06', pass1D30: '2026-08-29', pass2Start: '2026-10-08', pass2D1: '2026-10-09', pass2D7: '2026-10-15' },
    { subject: 'Physics', chapter: 'Nuclei', pass1Start: '2026-08-01', pass1D1: '2026-08-02', pass1D3: '2026-08-04', pass1D7: '2026-08-08', pass1D30: '2026-08-31', pass2Start: '2026-10-10', pass2D1: '2026-10-11', pass2D7: '2026-10-17' },
    { subject: 'Physics', chapter: 'Semiconductor Electronics: Materials Devices and Simple Circuits', pass1Start: '2026-08-04', pass1D1: '2026-08-05', pass1D3: '2026-08-07', pass1D7: '2026-08-11', pass1D30: '2026-09-03', pass2Start: '2026-10-11', pass2D1: '2026-10-12', pass2D7: '2026-10-18' },

    // Chemistry Chapters
    { subject: 'Chemistry', chapter: 'Some Basic Concepts of Chemistry', pass1Start: '2026-06-03', pass1D1: '2026-06-04', pass1D3: '2026-06-06', pass1D7: '2026-06-10', pass1D30: '2026-07-03', pass2Start: '2026-09-03', pass2D1: '2026-09-04', pass2D7: '2026-09-10' },
    { subject: 'Chemistry', chapter: 'Structure of Atom', pass1Start: '2026-06-05', pass1D1: '2026-06-06', pass1D3: '2026-06-08', pass1D7: '2026-06-12', pass1D30: '2026-07-05', pass2Start: '2026-09-04', pass2D1: '2026-09-05', pass2D7: '2026-09-11' },
    { subject: 'Chemistry', chapter: 'Classification of Elements and Periodicity in Properties', pass1Start: '2026-06-07', pass1D1: '2026-06-08', pass1D3: '2026-06-10', pass1D7: '2026-06-14', pass1D30: '2026-07-07', pass2Start: '2026-09-05', pass2D1: '2026-09-06', pass2D7: '2026-09-12' },
    { subject: 'Chemistry', chapter: 'Chemical Bonding and Molecular Structure', pass1Start: '2026-06-09', pass1D1: '2026-06-10', pass1D3: '2026-06-12', pass1D7: '2026-06-16', pass1D30: '2026-07-09', pass2Start: '2026-09-07', pass2D1: '2026-09-08', pass2D7: '2026-09-14' },
    { subject: 'Chemistry', chapter: 'Chemical Thermodynamics', pass1Start: '2026-06-11', pass1D1: '2026-06-12', pass1D3: '2026-06-14', pass1D7: '2026-06-18', pass1D30: '2026-07-11', pass2Start: '2026-09-08', pass2D1: '2026-09-09', pass2D7: '2026-09-15' },
    { subject: 'Chemistry', chapter: 'Equilibrium', pass1Start: '2026-06-13', pass1D1: '2026-06-14', pass1D3: '2026-06-16', pass1D7: '2026-06-20', pass1D30: '2026-07-13', pass2Start: '2026-09-09', pass2D1: '2026-09-10', pass2D7: '2026-09-16' },
    { subject: 'Chemistry', chapter: 'Redox Reactions', pass1Start: '2026-06-16', pass1D1: '2026-06-17', pass1D3: '2026-06-19', pass1D7: '2026-06-23', pass1D30: '2026-07-16', pass2Start: '2026-09-11', pass2D1: '2026-09-12', pass2D7: '2026-09-18' },
    { subject: 'Chemistry', chapter: 'Organic Chemistry – Some Basic Principles and Techniques', pass1Start: '2026-06-18', pass1D1: '2026-06-19', pass1D3: '2026-06-21', pass1D7: '2026-06-25', pass1D30: '2026-07-18', pass2Start: '2026-09-12', pass2D1: '2026-09-13', pass2D7: '2026-09-19' },
    { subject: 'Chemistry', chapter: 'Hydrocarbons', pass1Start: '2026-06-20', pass1D1: '2026-06-21', pass1D3: '2026-06-23', pass1D7: '2026-06-27', pass1D30: '2026-07-20', pass2Start: '2026-09-14', pass2D1: '2026-09-15', pass2D7: '2026-09-21' },
    { subject: 'Chemistry', chapter: 'Solutions', pass1Start: '2026-06-23', pass1D1: '2026-06-24', pass1D3: '2026-06-26', pass1D7: '2026-06-30', pass1D30: '2026-07-23', pass2Start: '2026-09-15', pass2D1: '2026-09-16', pass2D7: '2026-09-22' },
    { subject: 'Chemistry', chapter: 'Electrochemistry', pass1Start: '2026-06-25', pass1D1: '2026-06-26', pass1D3: '2026-06-28', pass1D7: '2026-07-02', pass1D30: '2026-07-25', pass2Start: '2026-09-16', pass2D1: '2026-09-17', pass2D7: '2026-09-23' },
    { subject: 'Chemistry', chapter: 'Chemical Kinetics', pass1Start: '2026-06-27', pass1D1: '2026-06-28', pass1D3: '2026-06-30', pass1D7: '2026-07-04', pass1D30: '2026-07-27', pass2Start: '2026-09-18', pass2D1: '2026-09-19', pass2D7: '2026-09-25' },
    { subject: 'Chemistry', chapter: 'The d- and f-Block Elements', pass1Start: '2026-06-30', pass1D1: '2026-07-01', pass1D3: '2026-07-03', pass1D7: '2026-07-07', pass1D30: '2026-07-30', pass2Start: '2026-09-19', pass2D1: '2026-09-20', pass2D7: '2026-09-26' },
    { subject: 'Chemistry', chapter: 'Coordination Compounds', pass1Start: '2026-07-02', pass1D1: '2026-07-03', pass1D3: '2026-07-05', pass1D7: '2026-07-09', pass1D30: '2026-08-01', pass2Start: '2026-09-21', pass2D1: '2026-09-22', pass2D7: '2026-09-28' },
    { subject: 'Chemistry', chapter: 'Haloalkanes and Haloarenes', pass1Start: '2026-07-04', pass1D1: '2026-07-05', pass1D3: '2026-07-07', pass1D7: '2026-07-11', pass1D30: '2026-08-03', pass2Start: '2026-09-22', pass2D1: '2026-09-23', pass2D7: '2026-09-29' },
    { subject: 'Chemistry', chapter: 'Alcohols Phenols and Ethers', pass1Start: '2026-07-07', pass1D1: '2026-07-08', pass1D3: '2026-07-10', pass1D7: '2026-07-14', pass1D30: '2026-08-06', pass2Start: '2026-09-23', pass2D1: '2026-09-24', pass2D7: '2026-09-30' },
    { subject: 'Chemistry', chapter: 'Aldehydes Ketones and Carboxylic Acids', pass1Start: '2026-07-09', pass1D1: '2026-07-10', pass1D3: '2026-07-12', pass1D7: '2026-07-16', pass1D30: '2026-08-08', pass2Start: '2026-09-25', pass2D1: '2026-09-26', pass2D7: '2026-10-02' },
    { subject: 'Chemistry', chapter: 'Amines', pass1Start: '2026-07-11', pass1D1: '2026-07-12', pass1D3: '2026-07-14', pass1D7: '2026-07-18', pass1D30: '2026-08-10', pass2Start: '2026-09-26', pass2D1: '2026-09-27', pass2D7: '2026-10-03' },
    { subject: 'Chemistry', chapter: 'Biomolecules', pass1Start: '2026-07-14', pass1D1: '2026-07-15', pass1D3: '2026-07-17', pass1D7: '2026-07-21', pass1D30: '2026-08-13', pass2Start: '2026-09-28', pass2D1: '2026-09-29', pass2D7: '2026-10-05' },

    // Biology Chapters (truncated for space - showing first few)
    { subject: 'Biology', chapter: 'The Living World', pass1Start: '2026-06-03', pass1D1: '2026-06-04', pass1D3: '2026-06-06', pass1D7: '2026-06-10', pass1D30: '2026-07-03', pass2Start: '2026-09-03', pass2D1: '2026-09-04', pass2D7: '2026-09-10' },
    { subject: 'Biology', chapter: 'Biological Classification', pass1Start: '2026-06-04', pass1D1: '2026-06-05', pass1D3: '2026-06-07', pass1D7: '2026-06-11', pass1D30: '2026-07-04', pass2Start: '2026-09-04', pass2D1: '2026-09-05', pass2D7: '2026-09-11' },
    { subject: 'Biology', chapter: 'Plant Kingdom', pass1Start: '2026-06-05', pass1D1: '2026-06-06', pass1D3: '2026-06-08', pass1D7: '2026-06-12', pass1D30: '2026-07-05', pass2Start: '2026-09-05', pass2D1: '2026-09-06', pass2D7: '2026-09-12' },
    { subject: 'Biology', chapter: 'Animal Kingdom', pass1Start: '2026-06-06', pass1D1: '2026-06-07', pass1D3: '2026-06-09', pass1D7: '2026-06-13', pass1D30: '2026-07-06', pass2Start: '2026-09-07', pass2D1: '2026-09-08', pass2D7: '2026-09-14' },
    { subject: 'Biology', chapter: 'Morphology of Flowering Plants', pass1Start: '2026-06-08', pass1D1: '2026-06-09', pass1D3: '2026-06-11', pass1D7: '2026-06-15', pass1D30: '2026-07-08', pass2Start: '2026-09-08', pass2D1: '2026-09-09', pass2D7: '2026-09-15' },
];

// Generate NEET table on page load
function generateNEETTable() {
    const container = document.getElementById('neet-content');
    
    // Group by subject
    const groupedBySubject = {};
    neetData.forEach(item => {
        if (!groupedBySubject[item.subject]) {
            groupedBySubject[item.subject] = [];
        }
        groupedBySubject[item.subject].push(item);
    });

    // Create tables for each subject
    Object.keys(groupedBySubject).forEach(subject => {
        const chapters = groupedBySubject[subject];
        
        const subjectGroup = document.createElement('div');
        subjectGroup.className = 'neet-subject-group glass-card';
        
        const title = document.createElement('h3');
        title.className = 'neet-subject-title';
        title.textContent = subject;
        subjectGroup.appendChild(title);
        
        const tableWrapper = document.createElement('div');
        tableWrapper.className = 'table-wrapper';
        
        const table = document.createElement('table');
        table.className = 'data-table';
        
        // Table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `
            <th>Chapter</th>
            <th>Pass 1 Study</th>
            <th>Pass 1 Day 1</th>
            <th>Pass 1 Day 3</th>
            <th>Pass 1 Day 7</th>
            <th>Pass 1 Day 30</th>
            <th>Pass 2 Study</th>
            <th>Pass 2 Day 1</th>
            <th>Pass 2 Day 7</th>
        `;
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Table body
        const tbody = document.createElement('tbody');
        chapters.forEach(chapter => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${chapter.chapter}</td>
                <td>${formatDate(chapter.pass1Start)}</td>
                <td>${formatDate(chapter.pass1D1)}</td>
                <td>${formatDate(chapter.pass1D3)}</td>
                <td>${formatDate(chapter.pass1D7)}</td>
                <td>${formatDate(chapter.pass1D30)}</td>
                <td>${formatDate(chapter.pass2Start)}</td>
                <td>${formatDate(chapter.pass2D1)}</td>
                <td>${formatDate(chapter.pass2D7)}</td>
            `;
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        
        tableWrapper.appendChild(table);
        subjectGroup.appendChild(tableWrapper);
        container.appendChild(subjectGroup);
    });
}

// Format date to readable format
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' });
}

// Section Navigation
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Update active nav button
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Show dashboard by default
    document.getElementById('dashboard').classList.add('active');
    
    // Generate NEET tables
    generateNEETTable();

    // Set first nav button as active
    const firstNavBtn = document.querySelector('.nav-btn');
    if (firstNavBtn) {
        firstNavBtn.classList.add('active');
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
