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

## Todo list

- [x] Frame machine learning problem.
- [x] Determine features to use with ML model.
- [ ] Determine best performing models for the task.
- [ ] Make model useable in software.
- [ ] Build UI for making inferences using model.
- [ ] Come up with some type of theme song.

## License

[GNU General Public License v3](LICENSE)

[Copyright &copy; Francis Amankrah](https://frnk.ca)
