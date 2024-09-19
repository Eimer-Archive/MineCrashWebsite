FROM node:20 AS build

WORKDIR /node_build

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build


# Create the run image
FROM node:20 AS run

ENV PORT=4269

WORKDIR /app

COPY --from=build /node_build/build ./build
COPY --from=build /node_build/package.json ./package.json
COPY --from=build /node_build/node_modules ./node_modules

EXPOSE $PORT

CMD ["node", "build/index.js"]