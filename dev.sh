#!/bin/bash

# Build and start the containers
docker-compose -f docker-compose.dev.yml up --build

# To stop the containers, press Ctrl+C 