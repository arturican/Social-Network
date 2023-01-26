echo "Switching to branch master"
git checkout master

echo "Building app..."
yarn run build

echo "Deploy files to server..."
scp -r build/* art@167.99.136.103:/var/www/167.99.136.103/

echo "Done!"