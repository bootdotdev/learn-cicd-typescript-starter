## Docker:
### Create a docker image
We can create a docker image through the command `docker build -f NAME_OF_DOCKERFILE -t TAG:version` where `NAME_OF_DOCKERFILE` is the name of the dockerfile from which we build the image, and `TAG` is the name of the docker image ontained. 

### Create a dockerfile
The dockerfile is an IaC for the docker image. In other words, it is a text file that contains all the commands needed to assemble a docker image. To build a dockerfile, we just create one as a text file, and add all the necessary lines of code. For example:
```bash
# This is a comment

# Use a lightweight debian os
# as the base image
FROM debian:stable-slim

# execute the 'echo "hello world"'
# command when the container runs
CMD ["echo", "hello world"]
```

and build the image with the command used in the previous part.
So the steps are : Dockerfile -> Docker image -> container. To run, we can add some options like the port with the option `-p` in `docker run`
## 