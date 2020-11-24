FROM node:erbium-alpine

ARG NODE_PORT=80
ENV NODE_PORT $NODE_PORT

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

EXPOSE $NODE_PORT

# Install the latest version of npm, regardless of node version, for speed and fixes
RUN npm i npm@latest -g

# Install dependencies
WORKDIR /dist
COPY package*.json ./
RUN npm install

# set the node path
ENV PATH /dist/node_modules/.bin:$PATH

# Copy in our source code
COPY . .

# TODO: Run FE build scripts

# TODO: Move built FE to `/dist/server/public`

# Change Workdir to the server
WORKDIR /dist/src/server

# Install dependencies
RUN npm install

# Run the Node Server.
CMD ["yarn", "start"]
