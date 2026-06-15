// Feather Icons initialization helper
if (window.feather) {
  window.feather.replace();
}

// Scrolled Header Effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Placement Suite Tabs Switcher
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab');
    
    // Remove active class from buttons
    tabButtons.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    
    // Hide all tab panes
    tabPanes.forEach(pane => pane.classList.remove('active'));
    // Show target tab pane
    const targetPane = document.getElementById(tabId);
    if (targetPane) {
      targetPane.classList.add('active');
    }
  });
});

// Interactive Dashboard Preview State Toggling
const portalButtons = document.querySelectorAll('.portal-toggle-btn');
const mockSidebarBrand = document.querySelector('.mock-sidebar-brand');
const mockTitle = document.querySelector('.mock-title');
const mockMenu = document.querySelector('.mock-menu');
const mockGrid = document.querySelector('.mock-grid');
const mockListTitle = document.querySelector('.mock-list-title');
const mockListContainer = document.querySelector('.mock-list-container');

const recruiterMenuHTML = `
  <li class="active"><i data-feather="users"></i> Candidates</li>
  <li><i data-feather="briefcase"></i> Post Job</li>
  <li><i data-feather="calendar"></i> Drive Schedule</li>
  <li><i data-feather="bar-chart-2"></i> Selection Funnel</li>
`;

const studentMenuHTML = `
  <li class="active"><i data-feather="layout"></i> My Dashboard</li>
  <li><i data-feather="briefcase"></i> Search Jobs</li>
  <li><i data-feather="edit-3"></i> AI Interviews</li>
  <li><i data-feather="file-text"></i> Resume Builder</li>
`;

const recruiterStatsHTML = `
  <div class="mock-mini-card">
    <div class="mock-mini-card-label">Active Drives</div>
    <div class="mock-mini-card-val text-primary" style="color: #6366f1;">8</div>
  </div>
  <div class="mock-mini-card">
    <div class="mock-mini-card-label">Applicants</div>
    <div class="mock-mini-card-val text-primary" style="color: #8b5cf6;">482</div>
  </div>
  <div class="mock-mini-card">
    <div class="mock-mini-card-label">Hired Count</div>
    <div class="mock-mini-card-val text-accent" style="color: #10b981;">34</div>
  </div>
`;

const studentStatsHTML = `
  <div class="mock-mini-card">
    <div class="mock-mini-card-label">Profile Score</div>
    <div class="mock-mini-card-val text-accent" style="color: #10b981;">94%</div>
  </div>
  <div class="mock-mini-card">
    <div class="mock-mini-card-label">Applications</div>
    <div class="mock-mini-card-val text-primary" style="color: #6366f1;">12</div>
  </div>
  <div class="mock-mini-card">
    <div class="mock-mini-card-label">Interviews</div>
    <div class="mock-mini-card-val text-primary" style="color: #8b5cf6;">3</div>
  </div>
`;

const recruiterListHTML = `
  <div class="mock-list-item">
    <div class="item-left">
      <div class="item-logo" style="background: rgba(99, 102, 241, 0.1); color: #6366f1;">JD</div>
      <div>
        <div class="item-name">Jane Doe</div>
        <div class="item-subtext">Stanford University • CSE</div>
      </div>
    </div>
    <span class="mock-status success">Matched (96%)</span>
  </div>
  <div class="mock-list-item">
    <div class="item-left">
      <div class="item-logo" style="background: rgba(139, 92, 246, 0.1); color: #8b5cf6;">AS</div>
      <div>
        <div class="item-name">Alex Smith</div>
        <div class="item-subtext">MIT • Data Science</div>
      </div>
    </div>
    <span class="mock-status success">Matched (91%)</span>
  </div>
  <div class="mock-list-item">
    <div class="item-left">
      <div class="item-logo" style="background: rgba(245, 158, 11, 0.1); color: #f59e0b;">ML</div>
      <div>
        <div class="item-name">Marcus Lee</div>
        <div class="item-subtext">Berkeley • Software Engineering</div>
      </div>
    </div>
    <span class="mock-status warning">Screening Info</span>
  </div>
`;

const studentListHTML = `
  <div class="mock-list-item">
    <div class="item-left">
      <div class="item-logo" style="background: rgba(16, 185, 129, 0.1); color: #10b981;">G</div>
      <div>
        <div class="item-name">Google</div>
        <div class="item-subtext">Software Engineer Intern</div>
      </div>
    </div>
    <span class="mock-status success">Offer Released</span>
  </div>
  <div class="mock-list-item">
    <div class="item-left">
      <div class="item-logo" style="background: rgba(99, 102, 241, 0.1); color: #6366f1;">M</div>
      <div>
        <div class="item-name">Microsoft</div>
        <div class="item-subtext">Associate Software Engineer</div>
      </div>
    </div>
    <span class="mock-status warning">Interview Scheduled</span>
  </div>
  <div class="mock-list-item">
    <div class="item-left">
      <div class="item-logo" style="background: rgba(139, 92, 246, 0.1); color: #8b5cf6;">S</div>
      <div>
        <div class="item-name">Stripe</div>
        <div class="item-subtext">Frontend Engineer</div>
      </div>
    </div>
    <span class="mock-status success">Resume Shortlisted</span>
  </div>
`;

portalButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    portalButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const role = btn.getAttribute('data-role');
    if (role === 'recruiter') {
      mockSidebarBrand.innerHTML = `<span class="logo-dot"></span> RecruiterPortal`;
      mockTitle.textContent = "Talent Pool Overview";
      mockMenu.innerHTML = recruiterMenuHTML;
      mockGrid.innerHTML = recruiterStatsHTML;
      mockListTitle.textContent = "Recommended Applicants";
      mockListContainer.innerHTML = recruiterListHTML;
    } else {
      mockSidebarBrand.innerHTML = `<span class="logo-dot"></span> StudentPortal`;
      mockTitle.textContent = "My Applications & Metrics";
      mockMenu.innerHTML = studentMenuHTML;
      mockGrid.innerHTML = studentStatsHTML;
      mockListTitle.textContent = "Recent Job Applications";
      mockListContainer.innerHTML = studentListHTML;
    }
    
    if (window.feather) {
      window.feather.replace();
    }
  });
});

// AI Mock Interview Simulator Logic
const questions = {
  software: "What is the difference between SQL and NoSQL databases, and when would you choose one over the other?",
  frontend: "Explain how the virtual DOM works in React, and how it improves performance.",
  product: "How would you prioritize user requests and feature releases for a new student-facing job portal?",
  datascience: "Explain what overfitting is in machine learning, and how you can prevent it."
};

const topicTags = document.querySelectorAll('.topic-tag');
const consoleQuestion = document.querySelector('.console-question');
const consoleInput = document.querySelector('.console-input');
const evaluateBtn = document.getElementById('evaluate-btn');
const feedbackBox = document.querySelector('.console-feedback');

let activeTopic = 'software';

topicTags.forEach(tag => {
  tag.addEventListener('click', () => {
    topicTags.forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    
    activeTopic = tag.getAttribute('data-topic');
    consoleQuestion.textContent = questions[activeTopic];
    consoleInput.value = '';
    feedbackBox.classList.remove('show');
    evaluateBtn.textContent = "Evaluate Response";
    evaluateBtn.disabled = false;
  });
});

evaluateBtn.addEventListener('click', () => {
  const answer = consoleInput.value.trim();
  if (!answer) {
    alert("Please write a short answer first so our AI engine can evaluate it!");
    return;
  }
  
  evaluateBtn.textContent = "Analyzing Response...";
  evaluateBtn.disabled = true;
  
  // Simulate AI evaluation delay
  setTimeout(() => {
    let score = 0;
    let feedback = "";
    
    // Simple keyword checks to make evaluation feel "real"
    if (activeTopic === 'software') {
      const sqlKeywords = ['relational', 'schema', 'table', 'structure', 'query', 'joins', 'acid'];
      const nosqlKeywords = ['document', 'key-value', 'flexible', 'scalability', 'horizontal', 'unstructured', 'schema-less'];
      
      let sqlHits = sqlKeywords.filter(kw => answer.toLowerCase().includes(kw)).length;
      let nosqlHits = nosqlKeywords.filter(kw => answer.toLowerCase().includes(kw)).length;
      
      score = Math.min(40 + (sqlHits * 8) + (nosqlHits * 8), 98);
      
      if (score > 80) {
        feedback = `<strong>Excellent Answer! (Score: ${score}%)</strong><br/>You demonstrated a strong understanding of both relational (SQL) schemas and document/key-value (NoSQL) scaling characteristics. Solid job citing schema consistency vs horizontal scaling!`;
      } else if (score > 60) {
        feedback = `<strong>Good Answer (Score: ${score}%)</strong><br/>You covered the core differences. To make it perfect, discuss schema flexibility, ACID transactions, and horizontal vs vertical scaling structures.`;
      } else {
        feedback = `<strong>Underdeveloped Response (Score: ${score}%)</strong><br/>Your answer is too brief. Try comparing SQL's tabular structure with NoSQL's flexible schema-less nature, mentioning performance trade-offs.`;
      }
    } else if (activeTopic === 'frontend') {
      const reactKeywords = ['render', 'reconciliation', 'diffing', 'state', 'batching', 'ui', 'real dom', 'memory'];
      let hits = reactKeywords.filter(kw => answer.toLowerCase().includes(kw)).length;
      score = Math.min(45 + (hits * 10), 96);
      
      if (score > 80) {
        feedback = `<strong>Excellent Answer! (Score: ${score}%)</strong><br/>Superb details. You correctly highlighted how React creates a lightweight representation of the UI in memory and uses a diffing algorithm to perform efficient batched updates.`;
      } else if (score > 60) {
        feedback = `<strong>Good Answer (Score: ${score}%)</strong><br/>Good structure. Focus more on explaining the 'Reconciliation' process and why updating the real DOM directly is expensive.`;
      } else {
        feedback = `<strong>Underdeveloped Response (Score: ${score}%)</strong><br/>Try describing the Virtual DOM as a lightweight JS object matching the real DOM tree and explaining the reconciliation process.`;
      }
    } else if (activeTopic === 'product') {
      const pmKeywords = ['user', 'roadmap', 'rice', 'impact', 'effort', 'feedback', 'mvp', 'stakeholders'];
      let hits = pmKeywords.filter(kw => answer.toLowerCase().includes(kw)).length;
      score = Math.min(45 + (hits * 10), 95);
      
      if (score > 80) {
        feedback = `<strong>Excellent Answer! (Score: ${score}%)</strong><br/>Impressive framework application! Mentioning key prioritization frameworks (like RICE or Kano model) and aligning them with user needs and development efforts is spot on.`;
      } else {
        feedback = `<strong>Good Answer (Score: ${score}%)</strong><br/>Make sure to structure prioritizing using a specific framework, comparing estimated impact versus engineering effort.`;
      }
    } else if (activeTopic === 'datascience') {
      const dsKeywords = ['variance', 'generalize', 'validation', 'regularization', 'train', 'test', 'dropout', 'noise'];
      let hits = dsKeywords.filter(kw => answer.toLowerCase().includes(kw)).length;
      score = Math.min(40 + (hits * 10), 98);
      
      if (score > 80) {
        feedback = `<strong>Excellent Answer! (Score: ${score}%)</strong><br/>Perfect. You accurately defined overfitting as learning the training noise instead of the signal, and detailed preventive tactics like cross-validation, regularization (L1/L2), and dropout.`;
      } else {
        feedback = `<strong>Good Answer (Score: ${score}%)</strong><br/>You explained what overfitting is. Be sure to list concrete preventive measures, such as cross-validation, regularization, and data augmentation.`;
      }
    }
    
    feedbackBox.innerHTML = feedback;
    feedbackBox.classList.add('show');
    evaluateBtn.textContent = "Evaluate Response";
    evaluateBtn.disabled = false;
  }, 1200);
});

// Interactive Pricing Calculator
const studentsSlider = document.getElementById('students-slider');
const studentsCountLabel = document.getElementById('students-count');
const priceResultLabel = document.getElementById('price-result');

function updatePrice() {
  const students = parseInt(studentsSlider.value);
  studentsCountLabel.textContent = students.toLocaleString();
  
  // Basic Pricing calculation rule (e.g. $2 per student per month, volume discount tier)
  let baseRate = 2.0;
  if (students > 5000) baseRate = 1.0;
  else if (students > 2000) baseRate = 1.25;
  else if (students > 1000) baseRate = 1.5;
  else if (students > 500) baseRate = 1.75;
  
  const totalPrice = Math.round(students * baseRate);
  priceResultLabel.textContent = `$${totalPrice.toLocaleString()}`;
}

if (studentsSlider) {
  studentsSlider.addEventListener('input', updatePrice);
  updatePrice(); // Init
}

// Count-up Statistics logic
const stats = document.querySelectorAll('.stat-num');
let started = false;

function startCounter() {
  stats.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const speed = target / 100; // Speed factor
    
    let count = 0;
    const updateCount = () => {
      count += speed;
      if (count < target) {
        counter.textContent = Math.ceil(count) + (target % 1 === 0 && target > 100 ? '+' : '');
        setTimeout(updateCount, 15);
      } else {
        counter.textContent = target.toLocaleString() + '+';
      }
    };
    updateCount();
  });
}

// Check intersection of statistics section
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        startCounter();
        started = true;
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(statsSection);
}
