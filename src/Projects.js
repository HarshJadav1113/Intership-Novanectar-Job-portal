import { projects } from "../Constants";
import ProjectCard from "../components/Projectcard";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section className="projects-container">
      <div className="projects-header">
        <h2>Our Projects</h2>
        <p>Here are some of my recent works showcasing my skills and expertise</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveDemo={project.liveDemo}
            image={project.image} // Optional: Add if you want project images
          />
        ))}
        
        {/* Additional Project Cards */}
        <ProjectCard
          title="E-Commerce Dashboard"
          description="A comprehensive admin dashboard for e-commerce businesses with analytics and inventory management"
          technologies={["React", "Node.js", "MongoDB", "Chart.js"]}
          githubLink="#"
          liveDemo="#"
        />
        
        <ProjectCard
          title="Weather Forecast App"
          description="Real-time weather forecasting application with 5-day predictions and location-based services"
          technologies={["React", "OpenWeather API", "Geolocation API"]}
          githubLink="#"
          liveDemo="#"
        />
        
        <ProjectCard
          title="Task Management System"
          description="Collaborative task management tool with drag-and-drop functionality and team features"
          technologies={["React", "Firebase", "Redux", "React DnD"]}
          githubLink="#"
          liveDemo="#"
        />
      </div>
    </section>
  );
};

export default Projects;