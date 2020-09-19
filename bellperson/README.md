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