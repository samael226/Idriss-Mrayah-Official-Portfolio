const fs = require('fs');
const path = require('path');

const projects = ['aichat', 'taskmanager', 'ecommerce'];
const publicDir = path.join(__dirname, '../public/projects');

// Create projects directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Create placeholder images
projects.forEach(project => {
  const svg = `
    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1a1a1a"/>
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#ffffff" text-anchor="middle">
        ${project.toUpperCase()} Project Image
      </text>
    </svg>
  `;
  
  fs.writeFileSync(path.join(publicDir, `${project}.svg`), svg);
  console.log(`Created placeholder for ${project}`);
}); 