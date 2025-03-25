#!/bin/bash

# Pull the latest changes
git pull origin main

# Build and start the containers
docker-compose up -d --build

# Show the logs
docker-compose logs -f 