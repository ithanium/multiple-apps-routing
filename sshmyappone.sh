#!/bin/bash

containername="myapp_one_container"

echo "SSH-ing into Docker container named: $containername"
docker exec -t -i $containername /bin/sh

exit 0
