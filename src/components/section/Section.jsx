import React from "react";
import Card from "../card/Card";
import styles from "./Section.module.css";

const Section = () => {
  return (
    <div>
      <div className={styles.section_container}>
        <div className={styles.section_top}>
          <h2>Section Header</h2>
          <p>Secton Sub heading</p>
        </div>

        <div className={styles.section_card}>
          <Card
            image="/animals/cock1.jpg"
            heading="Chicken"
            description="Get all poulty product fresh"
            price="60.00"
          />
          <Card
            image="/animals/rab1.jpg"
            heading="Rabbit"
            description="White meat is good for your health"
            price="100.00"
          />
          <Card
            image="/animals/cow.jpg"
            heading="Cow"
            description="A nutricious red meat"
            price="4000.00"
          />
          <Card
            image="/animals/goat.jpg"
            heading="Goat"
            description="All types of goats"
            price="500.00"
          />
          <Card
            image="/animals/turkey 1.jpg"
            heading="Turkey"
            description="All types of goats"
            price="300.00"
          />
          <Card
            image="/animals/sheep 1.jpg"
            heading="Sheep"
            description="All types of goats"
            price="600.00"
          />
          <Card
            image="/animals/duck1.jpg"
            heading="Duck"
            description="All types of goats"
            price="150.00"
          />
          <Card
            image="/animals/grasscut1.jpg"
            heading="Grasscutter"
            description="All types of goats"
            price="150.00"
          />
          <Card
            image="/animals/snail 1.jpg"
            heading="Snail"
            description="All types of goats"
            price="500.00"
          />
          <Card
            image="/animals/chicken 1.jpg"
            heading="chicken"
            description="All types of goats"
            price="500.00"
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
