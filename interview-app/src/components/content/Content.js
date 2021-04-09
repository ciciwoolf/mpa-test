import React from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./content.module.css";
import {IncubatorPage, LearnPage, StartUpPage, ServicePage, EventsPage, JoinPage  } from "../pages";

//component={StartUpDetail}  put into startup/:id Route

export const Content = () => {
  return (
    <section className="appBody">
      <Switch>
        <Route exact path="/">  
        <div className={styles.wrapper}>
          <IncubatorPage/>   
          </div>            
        </Route>
        <Route exact path="/learn">
          <LearnPage />
        </Route>
        <Route exact path="/startup/:id">
          <StartUpPage />
        </Route>
        <Route exact path="/service">
          <ServicePage />
        </Route>
        <Route exact path="/events">
          <EventsPage />
        </Route>
        <Route exact path="/join">
          <JoinPage />
        </Route>
      </Switch>
    </section>
  );
};
