echo "Switching to branch master"
git checkout master

echo "Building app..."
yarn run build

echo "Deploy files to server..."
scp -r build/* root@194.28.224.100:/var/www/194.28.224.100

echo "Done!"
