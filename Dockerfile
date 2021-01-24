ARG UBUNTU_RELEASE=focal
ARG UBUNTU_DATE=20210119

FROM ubuntu:${UBUNTU_RELEASE}-${UBUNTU_DATE} AS dev

RUN apt-get update \
    && apt-get upgrade --yes \
    && apt-get install --assume-yes \
        python3-pip \
    && rm --force --recursive /var/lib/apt/lists/* \
    # Setup Python.
    && ln -s /usr/bin/python3 /usr/bin/python \
    && ln -s /usr/bin/pip3 /usr/bin/pip

WORKDIR /jayne-eats

ENTRYPOINT ["bash"]
