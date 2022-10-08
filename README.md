# Battleship
This repo will contain the code for the classic boardgame Battleship. Main premise behind making this project is to practice implementing tests using Jest.

-------------------------------------------------------------------------
HOW TO GET JEST STARTED IN A NEW PROJECT:
/////
USE npm init WHEN STARTING PROJECT TO CREATE THE 
package.json FILE!!!!!!!!!!!!!!!!
1. Create a package.json file and add:
            {
               "scripts": {
                    "tests": "jest"
                }
            }
/////This should add node_modules to the project? should also add package-lock.json
2. Run "npm install --save-dev jest"

/////This will allow for the use of module.exports since import/export statements not currently supported
3. Create a babel.config.js and add: 
        module.exports = {
            presets: [['@babel/preset-env', {targets: { node: 'current'}}]],
        };
---------------------------------------------------------------------------------


I believe I messed up by testing my modules through exporting them. This caused them to become dependencies, which is making creating the DOM a more difficult task. Will reapproach this project using mocking soon. May create new depository for next attempt.