# Create project push and to github

- Create .env.local chứa các biến môi trường (tùy biến PORT VD PORT = 3001 mắc định là 3000)

- Push project lên github

-> copy
git remote add origin https://github.com/Hoangxt/tiktok-ui.git
git branch -M main
git push -u origin main

# Cài đặt customize-cra (create-react-app)

- https://github.com/arackaf/customize-cra
- npm i customize-cra react-app-rewired -D
- create config-overrides.js
- react-scripts = react-app-rewired

# Cài đặt babel-plugin-module-resolver

- https://github.com/tleunen/babel-plugin-module-resolver
- npm install --save-dev babel-plugin-module-resolver
- .babelrc
- jsconfig.json
