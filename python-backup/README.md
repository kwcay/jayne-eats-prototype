# Jayne Eats

## Getting started

You'll need the following pieces of software to get started:

- [Docker](https://www.docker.com)
- A POSIX-compliant terminal, such as, [Bash](https://www.gnu.org/software/bash), [cmder](https://cmder.net), [Cygwin](https://www.cygwin.com), [Visual Studio Code terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) or [Zsh](https://www.zsh.org).

Optional, but recommended:

- [BuildKit](https://docs.docker.com/develop/develop-images/build_enhancements)

<details>
    <summary>Building Docker image</summary>

```shell
# Remove existing images, if any:
docker rmi jayne-eats

# Build Docker image:
docker build --force-rm --tag jayne-eats .
```
</details>

<details>
    <summary>Using the Docker container</summary>

```shell
# Start shell inside Docker container:
docker run \
    --interactive \
    --mount type=bind,src="$(pwd)",dst=/jayne-eats \
    --rm \
    --tty \
    jayne-eats

# Install Python dependencies:
pip install --requirement ml/src/requirements.txt
```
</details>

<details>
    <summary>Unit tests</summary>

Unit tests can be run from inside the Docker container.

```shell
pytest
```
</details>
