#!/bin/bash

containername="myapp_two_container"

echo "SSH-ing into Docker container named: $containername"
docker exec -t -i $containername /bin/sh

exit 0
