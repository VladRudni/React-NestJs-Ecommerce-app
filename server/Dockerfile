FROM node

WORKDIR /app

COPY ./package*.json .

RUN npm install

COPY . .

RUN npm run build 

# start app and prisma studio on port 5555(default port)
CMD ["sh", "-c", "npm run start:dev & npm run db:studio"]
