import React, { useRef, useEffect } from 'react';

const ProjectSpace: React.FC<ProjectSpaceProps> = ({ projectId }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset scroll position to top when projectId changes
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, [projectId]);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    // If you have a specific container element
    const container = document.querySelector('.your-container-class');
    if (container) {
      container.scrollTo(0, 0);
    }
  };

  return (
    <div ref={containerRef} className="your-container-class">
      {/* ... rest of your component JSX ... */}
    </div>
  );
}

export default ProjectSpace;
