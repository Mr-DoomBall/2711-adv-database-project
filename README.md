# Data Warehousing for Diabetes Patient Care

## Description
- To design and implement a data warehouse system using a diabetes patient care dataset, focusing on the technical aspects of system architecture, data management, and analytical query formulation.

## Dataset Overview and Application
### Dataset Description
- Ten years (1999-2008) of clinical care data from 130 US hospitals, including over 50 features per patient record, focusing on diabetic patients.
### Application Purpose
- Use the dataset to analyze treatment outcomes, readmission rates, and identify care gaps.
### Key Features
- Patient demographics, hospital stay details, treatment records, readmission information.

## Proposed Team Contributions

| Database                            | Team                     |
|-------------------------------------|--------------------------|
| ETL Process Design & Implementation | Sijie Zhang, Xiang Guo   |
| Database Design                     | Donghan Li, Zhuochun Li  |
| Backend Development                 | Hui Ji, Bowen Li         |
| Frontend Development                | Haoyang Deng, Xinhang Li |
| Documentation & Reporting           | All                      |


## Potential aggregate questions
Given the details on admission sources, admission types, and discharge dispositions, and aiming to combine these aspects with race and gender for analytical purposes, here are six aggregate questions that could be both insightful and relatively straightforward to implement:

1. **Race Distribution by Admission Type**:
    - What is the distribution of race among patients for each admission type (Emergency, Urgent, Elective, etc.)? This question seeks to identify if certain racial groups are more likely to have specific types of hospital admissions.

2. **Gender Analysis of Discharge Dispositions**:
    - How does gender distribution vary across different discharge dispositions (e.g., Discharged to home, Expired, Transferred to SNF)? This question can reveal potential gender disparities in patient outcomes following hospitalization.

3. **Admission Source and Race Correlation**:
    - Among patients referred by physicians, clinics, or through emergency rooms, what is the racial breakdown? This could highlight potential trends or disparities in how patients of different races access hospital care.

4. **Impact of Gender on Admission Source**:
    - Is there a significant difference in the admission source (e.g., Transfer from a hospital, Emergency Room, Court/Law Enforcement) when comparing male and female patients? This question explores gender disparities in the reasons for hospital admission.

5. **Race and Gender Distribution in Elective Admissions**:
    - For elective admissions, what is the breakdown of patients by race and gender? Elective admissions are planned hospital visits, and analyzing the race and gender data might uncover disparities in access to elective procedures.

6. **Gender Differences in Outcomes for Specific Admission Sources**:
    - Do outcomes (as indicated by discharge dispositions) for emergency room admissions differ significantly between male and female patients? This question investigates whether gender influences patient outcomes for a common admission source.

## Instructions to start the server
#### Pre-req: please have all databases installed and configured following the steps in their respective folders
##### (SQL should be at default port 7778 with username and password both set as "root", MongoDB should be at default port 27017 without changing the default username and password, Neo4j should be at default port 7687 with username "neo4j" and password "password" while database name named as "neo4j")

1. Download and install NodeJS from https://nodejs.org/en/download/
2. Navigate into the "2711-adv-database-project/frontend" folder/directory using cd in command line
3. Type in "node app.js" to the same command line window/instance.
4. Goto http://localhost:3000/ on any browser