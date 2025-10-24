const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section, main");

function openMenu() {
  mobileMenu.style.pointerEvents = "auto";
  mobileMenu.classList.add("show");
  mobileMenuButton.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.remove("show");
  mobileMenuButton.classList.remove("active");
  document.body.style.overflow = "auto";

  setTimeout(() => {
    mobileMenu.style.pointerEvents = "none";
  }, 400);
}

mobileMenuButton.addEventListener("click", openMenu);
mobileMenuClose.addEventListener("click", closeMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

var typed = new Typed(".auto-type", {
  strings: ["Rido Ferdian Krisna", "Backend Dev"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

function setActiveLink() {
  let currentSection = "";
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-section") === currentSection) {
      link.classList.add("active");
    }
  });

  mobileMenuLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-section") === currentSection) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      closeMenu();
      setTimeout(() => {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }, 400);
    }
  });
});

AOS.init({
  once: true,
});

const skillsData = {
  html: {
    title: "HTML",
    description: "HyperText Markup Language - Struktur dasar halaman web",
    code: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>My Portfolio</title>
      </head>
      <body>
          <header>
              <h1>Welcome to My Portfolio</h1>
              <nav>
                  <ul>
                      <li><a href="#about">About</a></li>
                      <li><a href="#skills">Skills</a></li>
                      <li><a href="#contact">Contact</a></li>
                  </ul>
              </nav>
          </header>

          <main>
              <section id="about">
                  <h2>About Me</h2>
                  <p>I'm a passionate web developer.</p>
              </section>
          </main>
      </body>
      </html>`,
  },
  css: {
    title: "CSS",
    description: "Cascading Style Sheets - Styling dan layout halaman web",
    code: `.container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
      }

      .button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.3s ease;
      }

      .button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      }

      @media (max-width: 768px) {
          .container {
              padding: 10px;
          }
      }`,
  },
  javascript: {
    title: "JavaScript",
    description: "Bahasa pemrograman untuk membuat web interaktif",
    code: `// Event Listener
      document.querySelector('.button').addEventListener('click', function() {
          alert('Button clicked!');
      });

      // Fetch API
      async function fetchData() {
          try {
              const response = await fetch('https://api.example.com/data');
              const data = await response.json();
              console.log(data);
          } catch (error) {
              console.error('Error:', error);
          }
      }

      // Array Methods
      const skills = ['HTML', 'CSS', 'JavaScript'];
      const upperSkills = skills.map(skill => skill.toUpperCase());
      console.log(upperSkills);

      // Object Destructuring
      const user = { name: 'John', age: 25, city: 'Jakarta' };
      const { name, age } = user;`,
  },
  tailwind: {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework untuk styling cepat",
    code: `<!-- Card Component -->
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
          <img class="w-full h-48 object-cover" src="image.jpg" alt="Card">
          <div class="px-6 py-4">
              <h2 class="font-bold text-xl mb-2 text-gray-800">Card Title</h2>
              <p class="text-gray-600 text-base">
                  This is a beautiful card component built with Tailwind CSS.
              </p>
          </div>
          <div class="px-6 py-4">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  Learn More
              </button>
          </div>
      </div>

      <!-- Responsive Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-gray-100 p-4 rounded">Item 1</div>
          <div class="bg-gray-100 p-4 rounded">Item 2</div>
          <div class="bg-gray-100 p-4 rounded">Item 3</div>
      </div>`,
  },
  bootstrap: {
    title: "Bootstrap",
    description: "CSS framework populer dengan komponen siap pakai",
    code: `<!-- Navigation Bar -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
              <a class="navbar-brand" href="#">Brand</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
      </nav>

      <!-- Card with Button -->
      <div class="card" style="width: 18rem;">
          <img src="image.jpg" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">Card Title</h5>
              <p class="card-text">Some quick example text.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>

      <!-- Alert -->
      <div class="alert alert-success" role="alert">
          This is a success alert!
      </div>`,
  },
  php: {
    title: "PHP",
    description: "Server-side scripting language untuk web development",
    code: `<?php
      // Database Connection
      $host = 'localhost';
      $dbname = 'mydatabase';
      $username = 'root';
      $password = '';

      try {
          $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
          $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      } catch(PDOException $e) {
          echo "Connection failed: " . $e->getMessage();
      }

      // Fetch Data
      $stmt = $pdo->prepare("SELECT * FROM users WHERE active = ?");
      $stmt->execute([1]);
      $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

      // Loop Through Results
      foreach ($users as $user) {
          echo $user['name'] . "<br>";
      }

      // Function
      function greet($name) {
          return "Hello, " . $name . "!";
      }

      echo greet("World");
      ?>`,
  },
  mysql: {
    title: "MySQL",
    description: "Relational Database Management System",
    code: `-- Create Database
      CREATE DATABASE portfolio_db;
      USE portfolio_db;

      -- Create Table
      CREATE TABLE users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      -- Insert Data
      INSERT INTO users (name, email)
      VALUES ('John Doe', 'john@example.com');

      -- Select with Join
      SELECT u.name, p.title, p.description
      FROM users u
      INNER JOIN projects p ON u.id = p.user_id
      WHERE u.active = 1
      ORDER BY p.created_at DESC;

      -- Update Data
      UPDATE users
      SET name = 'Jane Doe'
      WHERE id = 1;

      -- Delete Data
      DELETE FROM users WHERE id = 5;`,
  },
  laravel: {
    title: "Laravel",
    description: "PHP framework modern dengan fitur lengkap",
    code: `// Route Definition
      Route::get('/users', [UserController::class, 'index']);
      Route::post('/users', [UserController::class, 'store']);

      // Controller
      class UserController extends Controller
      {
          public function index()
          {
              $users = User::with('posts')->paginate(10);
              return view('users.index', compact('users'));
          }

          public function store(Request $request)
          {
              $validated = $request->validate([
                  'name' => 'required|max:255',
                  'email' => 'required|email|unique:users',
              ]);

              User::create($validated);
              return redirect()->route('users.index');
          }
      }

      // Model
      class User extends Model
      {
          protected $fillable = ['name', 'email'];

          public function posts()
          {
              return $this->hasMany(Post::class);
          }
      }`,
  },
  git: {
    title: "Git",
    description: "Version control system untuk tracking code changes",
    code: `# Initialize Repository
      git init

      # Add Files
      git add .
      git add index.html

      # Commit Changes
      git commit -m "Initial commit"
      git commit -m "Add new feature"

      # Branch Management
      git branch feature-branch
      git checkout feature-branch
      git checkout -b new-feature

      # Merge Branches
      git checkout main
      git merge feature-branch

      # Remote Repository
      git remote add origin https://github.com/user/repo.git
      git push -u origin main
      git pull origin main

      # View History
      git log
      git log --oneline
      git status`,
  },
  github: {
    title: "GitHub",
    description: "Platform hosting untuk Git repositories",
    code: `# Clone Repository
      git clone https://github.com/username/repository.git

      # Push to GitHub
      git remote add origin https://github.com/username/repo.git
      git branch -M main
      git push -u origin main

      # Pull Request Workflow
      git checkout -b feature-branch
      # Make changes
      git add .
      git commit -m "Add new feature"
      git push origin feature-branch
      # Create Pull Request on GitHub

      # Sync Fork
      git remote add upstream https://github.com/original/repo.git
      git fetch upstream
      git merge upstream/main

      # GitHub Actions (CI/CD)
      # .github/workflows/ci.yml
      name: CI
      on: [push, pull_request]
      jobs:
        build:
          runs-on: ubuntu-latest
          steps:
            - uses: actions/checkout@v2
            - name: Run tests
              run: npm test`,
  },
};

function openModal(skill) {
  const data = skillsData[skill];
  if (!data) return;

  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalDescription").textContent = data.description;
  document.getElementById("modalCode").textContent = data.code;
  document.getElementById("skillModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("skillModal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function copyCode() {
  const code = document.getElementById("modalCode").textContent;
  navigator.clipboard.writeText(code).then(() => {
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = "Copied!";
    btn.classList.add("bg-green-600");
    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove("bg-green-600");
    }, 2000);
  });
}

// Close modal when clicking outside
document.getElementById("skillModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
