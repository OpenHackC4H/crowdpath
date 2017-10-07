#!/bin/sh

mode=$1

if [ "$mode" = "start" ]; then
  echo "Starting application..."

  # Cleanup.
  docker rm -f $(docker ps -a --filter "name=crowd-path" -q)
  docker rmi -f $(docker images "crowd-path" -q)

  # Build and run.
  docker build -t crowd-path backend
  docker run -d -p 8080:8080 --name crowd-path crowd-path
else
  if [ "$mode" = "stop" ]; then
    echo "Stopping application..."
    docker stop crowd-path
  else
    echo "Usage:\tsh crowdpath (start | stop)"
  fi;
fi;
