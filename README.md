# Resume Tailor

## Overview

Resume Tailor is an app that helps users easily tailor their resume according to the given job description. User needs to provide their mother version of resume (including all projects and experiences usually longer than one page) and their targeted job description. Resume Tailor will detect keywords and key phrase from the JD and match with user's information, and automatically generate tailored resume.

### Problem

All job hunters are experiencing tailor their resume again and again. Tailoring resume is a boring and time consuming taks while job seekers are not learning anything from this repetitive process. Why don't let machine do this for us?

### User Profile

All job seekers.

### Features
1. Authentication. Resume tailor supports user using email to login
2. Resume tailor also implement OAuth login with Google, Github, and LinkedIn
3. User can type their basic info, summary, skills, education, experience, projects.
4. User can see their saved resume
5. User can provide their targeted job description.
6. After user hits start tailoring, there will be three sections, one to display detected keywords from provided job description, one to display original job description, one to display tailored resume.
7. User can download tailored resume

### Development
1. run command `git clone https://github.com/HuanLi1008/resume_tailor_client.git` to clone the git repo
2. run `npm i` to install all dependencies
3. create a local .env file similar with .env.sample
4. set up a supabase project and put supabase url and supabase api_key in the .env file
5. make sure resume tailor server is running
6. run `npm start`
7. use sample resume and sample jd in test.json under src folder to test the app.

### Future Feature
1. user can choose resume template to use
2. user can specify how many bullet points they want to keep