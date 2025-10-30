# DevOps Assignment — Tejas Ramane

## What this project does
A minimal Node.js web app that returns "Hello World" and demonstrates:
- Containerization with Docker
- CI pipeline using GitHub Actions that builds and verifies the image

## How to run locally
1. Install Node.js and Docker.
2. Clone repo and install:
   ```bash
   git clone https://github.com/<tejas-ramane>/devops-assignment-tejas.git
   cd devops-assignment-tejas
   npm install
   npm start
   ```
3. Open http://localhost:3000.

## Run with Docker
```bash
docker build -t devops-assignment .
docker run -d -p 3000:3000 devops-assignment
# then open http://localhost:3000
```

## Pipeline flow (step-by-step)
1. Developer pushes code to the develop branch.  
2. GitHub Actions triggers `.github/workflows/ci.yml`.  
3. Actions performed:
   - Checkout repository
   - Set up node.js
   - Install dependencies (`npm install`)
   - Run Dummy Test
   - Build Docker image (`docker build`)  
   - Run container and verify with `curl http://localhost:3000/`  
4. If all steps succeed, pipeline is green; otherwise, it fails and shows logs.

## Challenges faced & resolutions
- Conflicts of Port. If one port is already in use then it was giving error while performing action.
