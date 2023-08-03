![banner](https://tiddi.kunalsin9h.com/hBlkMD5)

## Redis

Docker image: `redis:latest`

Port listen: `6379`

CLI Client: `redis-cli`

#### Run **_Redis_** container

```bash
docker run \
    --name redis \
    -p 6379:6379 \
    -d redis:latest
```

#### Exec `redis-cli` on **_Redis_** container

```bash
docker exec -it redis redis-cli
```

### Dependencies

1. redis
2. Express
