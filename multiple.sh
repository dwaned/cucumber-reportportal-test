#!/bin/bash
export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;



# Set the number of times to run the command
n=10

# Run the command in a loop
for (( i=1; i<=$n; i++ ))
do
  nvm use && npm run prebuild && npm prune && npm install && npm run build && npm run compile && npm test
done

