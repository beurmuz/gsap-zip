import styles from "./ProjectHeader.module.css";

const ProjectHeader = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProjectHeader;
