# Assignment II (weather monitering application)

## Run locally

```bash
# add Open Weather API key to environment
cp .env.example .env

# install npm deps
npm install

# initialize sqlite database
npm run db:push

# start service
npm start -- [PING_FREQ_MS]
```

- PING_FREQ_MS:
  - Interval to keep fetching weather data in ms
  - ex: npm start -- 5000

## TODOS

- [ ]: Visualization
