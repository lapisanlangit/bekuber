#!/bin/bash
sudo docker build . -t lapisan/bekuber:1.0
sudo docker run --name bekuber -p 3001:5001 -d lapisan/bekuber:1.0
