/* https://github.com/icons-pack/react-simple-icons */

import {
  type IconType,
  SiAstro,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiRubyonrails,
  SiSass,
  SiTailwindcss,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'CSS', icon: SiCss3 },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'react', icon: SiReact },
        { skill: 'sass', icon: SiSass },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'astro', icon: SiAstro },
        {
          skill: 'bootstrap',
          icon: SiBootstrap,
        },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'ruby on rails',
          icon: SiRubyonrails,
        },
        {
          skill: 'redis',
          icon: SiRedis,
        },
        {
          skill: 'postgresql',
          icon: SiPostgresql,
        },
        {
          skill: 'mongodb',
          icon: SiMongodb,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        {
          skill: 'nginx',
          icon: SiNginx,
        },
        {
          skill: 'docker',
          icon: SiDocker,
        },
      ],
    },
  ]

export default SKILLS




/*
#092E20 - Django
#A86454 - Pug
#F69220 - pnpm
#2496ED - Docker
#61DAFB - React
#D7FF64 - Ruff
#2C7AC3 - ArcGIS
#CC6699 - Sass
#F7B93E - Prettier
#09A3D5 - spaCy
#000000 - json
#34A853 - Google Sheets
#F05032 - git
#F27557 - Quip
#050038 - Miro
#CB3837 - npm
#557C94 - Kali Linux
#90E59A - Notepad++
#F06A6A - Asana
#1D99F3 - KDE
#FF6384 - Chart.js
#E6522C - Prometheus
#005571 - Elasticsearch
#2F61B4 - VirtualBox
#EA5906 - WebDriverIO
#430098 - Heroku
#000000 - OpenText
#000000 - Bun
#302E31 - OBS Studio
#1679A7 - Wireshark
#2B2728 - MicroPython
#FF7139 - Firefox Browser
#00878F - Arduino
#60A839 - Scrapy
#000000 - Adafruit
#004880 - NuGet
#721412 - OpenSSL
#25A162 - JUnit5
#1F6B75 - Openlayers
#0F0F11 - Angular
#326CE5 - Kubernetes
#3178C6 - TypeScript
#607078 - VMware
#764ABC - Redux
#8CAAE6 - SciPy
#4A86CF - GNOME
#FABD14 - UML
#2C8EBB - Yarn
#F7DF1E - JavaScript
#DD1100 - Wolfram                   > #DD1100 - Wolfram Language
#2C2255 - Eclipse IDE
#84BD00 - Yubico
#1287B1 - Apache Cassandra
#589632 - QGis
#A8B9CC - C
#064F8C - CMake
#80B5E3 - Chocolatey
#0A0A23 - freeCodeCamp
#4A90E2 - Nano
#FFEC6E - Vault
#F15A24 - Zsh
#013243 - NumPy
#8DD6F9 - Webpack
#00C7B7 - Netlify
#A81D33 - Debian
#009639 - NGINX
#F46800 - Grafana
#F38020 - Cloudflare
#2C262D - NETGEAR
#00549E - ZAP
#22314E - ROS
#E95420 - Canonical
#75AADB - RStudio IDE
#7C3AED - Obsidian
#FF7139 - Firefox
#2185D0 - Codeberg
#EE0000 - Ansible
#0052CC - Jira
#A42E2B - GNU
#4A154B - Slack
#003545 - MariaDB
#4169E1 - PostgreSQL
#FD4B2D - Authentik
#FF3670 - Mermaid
#3775A9 - PyPI        //??????????????????
#7952B3 - Bootstrap
#C21325 - Jest
#000000 - macOS
#892CA0 - Podman
#000000 - Conda-Forge 
#FCC624 - Linux
#EE0000 - Red Hat
#0F1689 - Helm
#222222 - GitHub Pages
#FFC700 - Keeper
#DD1100 - Wolfram Mathematica
#4ACBD6 - TP-Link
#663399 - CSS
#276DC3 - R
#A22846 - Raspberry Pi
#CB171E - YAML
#BBDDE5 - GitBook
#FF4438 - Redis
#000000 - Webex
#3776AB - Python
#009688 - FastAPI
#FF9800 - Sublime Text
#003B57 - SQLite
#000000 - MinGW-w64
#E87D0D - Blender
#000000 - Markdown
#43B02A - Selenium
#EF7B4D - Argo
#0769AD - jQuery
#FF6C37 - Postman
#4479A1 - MySQL
#5C5543 - Gimp
#47A248 - MongoDB
#000000 - Flask
#000000 - Next.js
#334455 - AutoHotkey
#CA4245 - React Router
#DE3723 - Namecheap
#4EAA25 - GNU Bash
#212121 - pfSense
#1868F2 - Vagrant
#80B3FF - Git for Windows
#00599C - C++
#E95420 - Ubuntu
#F9DC3E - Babel

?????????????
#44A833 - Anaconda
#396CB2 - MapLibre
#9D0FB0 - Traefik Mesh
#0E83C8 - Fluentd
#F01F7A - Codecov
#E73D2F - E3
#1DBF73 - Fiverr
#4285F4 - jetpackcompose
#1C3C3C - langgraph
#41E0FD - reactbootstrap
#0D597F - alpine linux
#3F4F75 - Plotly
#66CCFF - Apache Hadoop
#3A209E - Oxygen
#7EBC6F - openstreetmap
#0071B5 - bACKBONE.JS
#DD052B  - Vestel
#C72E49 - MinIO
#47848F - Electron
#000000 - Fastify
#880000 - Mongoose
#0075A8 - Rancher
#F7931E - scikit-learn
#073551 - curl
#000000 - rOBOT fRAMEWORK
#0891D1 - Syncthing
#222222 - Hedera
#00ADD8 - Go
#2478CC - Contentful
#4298B8 - Apache Groovy
#017CEE - Apache Airflow
#231F20 - Apache Kafka
#F78C40 - OpenID
#008ECF - Gin
#3EAAAF - Travis CI
#111F68 - Ultralytics
#000000 - Hashcorp
#15171A - Ghost
#CF4647 - gulp
#66E3FF - Headless UI
#1F305F - MariaDB Foundation
#FF6600 - RabbitMQ
#262261 - Open Container Initiative
#3874D8 - Qubes OS
#51A2DA - Fedora
#43A047 - Bazel
#1293D8 - Elm
#5C2EDE - Astra
#005A9C - WebGPU
#E04E39 - Ember.js
#010101 - Socket.io
#4581C3 - Neo4j
#F4DD4B - nvm
#C71A36 - Apache Mavem
#B4CA65 - EJS
#1C3C3C - langChain 
#F9A03C - D3
#4A90D9 - Flatpak
#0A9EDC - Pytest
#E92063 - Pydantic
#2F2625 - CoffeeScript
#0854C1 - 1Panel
#ED1C24 - Trakt
#D24939 - Jenkins
#363636 - Solidity
#2C4AA8 - Doxygen
#2BB24C - Feedly
#008080 - LaTeX
#005A9C - Semantic Web
#3B66BC - 1Password 
#49BDA5 - Fluent Bit
#69D3A7 - Cypress
#D22128 - Apache JMeter 
#40B5A4 - Puppeteer 
#ED1944 - OpenStack
#FFC61C - K3s
#02303A - Gradle
#000000 - SourceHut
#2BEDA7 - Linkerd
#5C3EE8 - OpenCV
#0F2B46 - DeepL
#4053D6 - Amazon DynamoDB
#8D1F89 - RxDB
#6DB33F - Spring
#23C8D2 - Ajv
#F46A54 - Coda


#E10098 - GraphQL
#A6CE39 - ORCId
*/