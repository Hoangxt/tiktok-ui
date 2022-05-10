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

# Cấu hình sử dụng CSS/SASS

- create GlobalStyles component
- SASS: npm i -D sass
- Reset CSS: npm install --save normalize.css
- Default CSS: font-family, font-size, line-height
- get font: Montserrat and paste in GlobalStyles.scss

# Cấu hình Router/Layout cho dự án

[pages]

1. Phân tích tổng quan Layout
2. Cài đặt react-router-dom: npm i react-router-dom
3. Đưa cấu hình routes ra ngoài
4. Xây dựng cơ chế tải Layout

{upLoad page ko co layout }

# Dựng khung Layout mặc định

- Cài thư viện classnames: npm i classnames

# Xây dựng UI phần Header P1

[Layout/Header]

- Ctrl Shift L select all
