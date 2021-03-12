# React Calculator Project
This is just the preparation for react calculator project. This first milestone is just the project environment setup. The second milestone involves creating basic components that make up the calculator. The components are Button, ButtonPanel, and Display which are located in the components folder within the src directory at the root of the project. The App component contains both the Display and ButtonPanel components which define the user interface of the calculator. The Display component will display the result of each calculation. The ButtonPanel contains the different buttons specified in the simple calculator app.

## Project SetUp
Get a local copy of the file. Clone with HTTPS following the steps below.

### For Windows
- In your search box, type cmd, click on cmd to open the command prompt.

### For Linux, Mac OS
- In your search box, type terminal, click on the terminal to launch it.

- Copy and paste the command below in your terminal and press enter from your keyboard.
```
git clone https://github.com/Zubenna/calculator-react.git
```
## Access Project Folder 
- Depending on where the project files are downloaded to, either Hard Disk(HDD), Desktop or Documents directory in your computer after completing the step above.
- Click on the folder calculator to open it.
- Inside the folder, right-click and click on terminal or cmd depending on your Operating System to open it.

## Set Up Project Locally in Your Computer
- In the cmd or terminal, type the command below;
```
npm install
```
- Wait for some time to install all the game packages.
- Once the installation is completed, you will see messages like '23 packages has been added, 'audited 1335 packages in 37.888s' etc.

- Now, type the command below in your cmd or terminal to start the project locally. Wait for some time.
```
npm start
```
- Once the server is fully started, you will see the project opening a different tab on your browser at port http://localhost:3000/. The page now displays the react.js application user interface. For this milestone, the page will display the text below
"Testing React Calculator Project Setup...Testing Deployment".

## Calculator Logic
Two files, calculate.js and operate.js are created inside the logic directory. The calculate.js takes two arguments, an object, calcData, and buttonName. The calcData object has total, next, and operation as properties. This function manipulates the properties of the calcData object using the buttonName supplied to it. If the buttonName includes any of ['+', '-', '÷', 'X', '%'], It calls the operate.js function which will use the operation name to calculate the total using the Big.js methods. The operate function implements basic mathematical calculation which includes percentage, multiplication, division, addition, and subtraction.

## Live Version
Launch live version to confirm that the initial project setup is running on Heroku.
- [Launch App](https://calculator-zubenna.herokuapp.com/)

## Built With
- JavaScript
- React

## Author
👤 **Nnamdi Emelu**
- Github: [zubenna](https://github.com/zubenna)
- Twitter: [@zubenna](https://twitter.com/zubenna)
- Linkedin: [nnamdi-emelu](https://www.linkedin.com/in/nnamdi-emelu/)

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/Zubenna/calculator-react/issues/new)

## 👍 Show Your Support
Kindly star ⭐️ this project, if you like it!

## :clap: Acknowledgements
- [Microverse](https://www.microverse.org/)

## 📝 License
This project is [MIT](./LICENSE) licensed.
