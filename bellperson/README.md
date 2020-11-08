# BellPerson

The development environment of BellPerson.

## How to use

Run docker.

```shell
docker run -idt -p 22:22 --gpus all kayryu/bellperson
docker run -idt -p 22:22 --gpus device=0 kayryu/bellperson
docker run -idt -p 22:22 --gpus '"device=0,1"' kayryu/bellperson
```

Use vscode remote develop to connect.


## How to install docker plugin
```
curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | \
  sudo tee /etc/apt/sources.list.d/nvidia-docker.list
sudo apt-get update
```
