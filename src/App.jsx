import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { companyProjectData } from "./components/dummyData";

function App() {
  return (
    <div className={styles.pageContainer}>
      <Header />

      <div className={styles.heroPic}>
        <form className={styles.searchBar}>
          <input type="text" className={styles.searchInput} />
          <button className={styles.searchBtn}>Search</button>
        </form>
        <h1 className={styles.heroH1}>
          Welcome to your start in Serious Business!
        </h1>
      </div>

      <div className={styles.projectSection}>
        <h1>Our Projects</h1>

        <div className={styles.projectSpace}>
          {companyProjectData.map((project) => {
            return (
              <Card
                id={project.id}
                title={project.projectTitle}
                img={project.img}
                desc={project.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
