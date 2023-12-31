# Github History Tracker

## Description
This is a simple web application that allows users to track the history of a github repository. The user can enter a github repository url and the application will display the history of the repository. The history is displayed in a table and the user can click on a commit to view the details of the commit.


## Installation

### Prerequisites
- Node.js v20.0.0 or higher
- Docker & Docker Compose (optional)


### How setup

1. Clone the repository

```bash
git clone https://github.com/Carlos0934/github-history-tracker
```


2. Install dependencies

```bash
cd api && npm install
```

```bash
cd app && npm install
```

3. Add environment variables 

Copy a .env.example file to .env and set the environment variables for the api

```bash
GITHUB_TOKEN= # Your github token
PORT=3000 # Port where the api will run on (optional)
```

Copy a .env.example file to .env and set the environment variables for the app

```bash
API_URL=http://localhost:3000/api # Url where the api is running (optional)
```

4. Run the application

```bash
cd api && npm start
```

```bash
cd app && npm start
```

5. Open the application in your browser


### How to run with docker

1. Clone the repository

```bash
git clone https://github.com/Carlos0934/github-history-tracker
```

2. Add environment variables in root directory, rename .env.example to .env
```bash
GITHUB_TOKEN= # Your github token
PORT=3000 # Port where the api will 
VITE_API_URL=http://localhost:3000/api # Url where the app will fetch data from
```
 
3. Run the application

```bash
docker-compose up
```

4. Open the application in your browser at http://localhost:8000


## Future improvements
- Deploy the application with docker to AWS with ECS
- Add frontend tests
- Add E2E tests
- Add Continuous Integration and Continuous Deployment with Github Actions
- Sign in with github through oauth to remove the need for a github token
- Add Webhooks to the api to automatically fetch data when a new commit is pushed to the repository through SSE (Server Sent Events)