-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/qDE9vb
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Death_rates" (
    "state_territory" varchar   NOT NULL,
    "total_case" varchar   NOT NULL,
    "confirmed_cases" int   NOT NULL,
    "probable_cases" int   NOT NULL,
    "cases_in_last_7_days" int   NOT NULL,
    "total_deaths" int   NOT NULL,
    "confirmed_deaths" int   NOT NULL,
    "probable_deaths" int   NOT NULL,
    "death_in_last_7_days" int   NOT NULL,
    "death_per_100000" int   NOT NULL,
    "state_region" varchar   NOT NULL,
    CONSTRAINT "pk_Death_rates" PRIMARY KEY (
        "state_territory"
     )
);

CREATE TABLE "Age_group" (
    "Age_group_sort_order" int   NOT NULL,
    "Age_group" varchar   NOT NULL,
    CONSTRAINT "pk_Age_group" PRIMARY KEY (
        "Age_group_sort_order"
     )
);

CREATE TABLE "Race" (
    "race_ethnicity_sort_order" int   NOT NULL,
    "race" varchar   NOT NULL,
    CONSTRAINT "pk_Race" PRIMARY KEY (
        "race_ethnicity_sort_order"
     )
);

CREATE TABLE "influenza_vaccination_rates" (
    "week_ending" varchar   NOT NULL,
    "influenza_season" varchar   NOT NULL,
    "Data_collection_period" varchar   NOT NULL,
    "Geography" varchar   NOT NULL,
    "Geographic_level" varchar   NOT NULL,
    "parent_geography" varchar   NOT NULL,
    "Age_group" varchar   NOT NULL,
    "Age_group_sort_order" int   NOT NULL,
    "race" varchar   NOT NULL,
    "race_ethnicity_sort_order" int   NOT NULL,
    CONSTRAINT "pk_influenza_vaccination_rates" PRIMARY KEY (
        "week_ending","influenza_season"
     )
);

ALTER TABLE "influenza_vaccination_rates" ADD CONSTRAINT "fk_influenza_vaccination_rates_Age_group_sort_order" FOREIGN KEY("Age_group_sort_order")
REFERENCES "Age_group" ("Age_group_sort_order");

ALTER TABLE "influenza_vaccination_rates" ADD CONSTRAINT "fk_influenza_vaccination_rates_race_ethnicity_sort_order" FOREIGN KEY("race_ethnicity_sort_order")
REFERENCES "Race" ("race_ethnicity_sort_order");

