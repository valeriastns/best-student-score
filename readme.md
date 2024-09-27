## Installation

### 1. Clone the repository
*Clone the project from the remote repository:*
```bash
git clone <git+https://github.com/valeriastns/best-student-score.git>
```

### 2. Go to the project directory 
```bash
cd <project-name>
```

### 3. Install dependencies
```bash
npm install
```

### 4. Initialize the project
*This will create a package.json file containing information about the project, author and dependencies, please fill it*
```bash
npm init
```

### 5. Add .gitignore
*Create a .gitignore file and add folders and files that should not be included in the repository, like this file below*
```bash
/node_modules
```

### 6. Running the script
*You can run the script using Node.js:*
```bash
node script.js
```

### 7. Installing Jest
*Install jest by running the following command:*
```bash
npm install --save-dev jest
```
*and add the following dection to your package.json*
```
{
  "scripts": {
    "test": "jest"
  }
}
```

### 8. Install dependencies
*Install babel-plugin-istanbul, by running the following command:*
```bash
npm install --save-dev babel-plugin-istanbul
```

### 9. Add jest confing file
*Create jest.config.js file and add following code for using CommonJS, not the ECMAScript Modules (ESM):*
``` js
module.exports = {
    transform: {
      "^.+\\.js$": "babel-jest"
    }
  };
```

### 10. Running tests
*To run the tests, use the Jest command:*
```bash
npm test
```

## Code Coverage
*Code coverage is a measure of how much of your code is executed when running tests.*
### What we measure in this project?
*The main metrics measured are:*
-  **Lines:** % of lines in your code that are executed during tests. This shows how much of the written code is being executed, ensuring that no lines of code are left untested.
-  **Branches:** % of conditional branches (e.g., `if`, `else`) that are tested. This ensures that all possible paths through the code are executed during tests, covering every condition.
-  **Functions:** % of functions in the code that are executed by the tests. Each function should be covered by at least one test to ensure that it behaves correctly under various conditions.

### 10. Running Code Coverage
*To check the code coverage, run the following command:*
```bash
npx jest --coverage
```

### 12. Results
*We can check the result in terminal output or we can open the coverage folder in our project, then Icov-report folder and open index.html file with our Live Server*