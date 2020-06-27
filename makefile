# Makefile for releasing blackspace UI
# 
# version is set by value in version.js
TAG:=latest
NAME:=blackspace-ui
TARGET:=$(NAME)
DOCKER_REPOSITORY:=blackspaceinc
DOCKER_IMAGE_NAME:=$(DOCKER_REPOSITORY)/$(NAME)
GIT_COMMIT:=$(shell git describe --dirty --always)
VERSION:="0.0.1"
SHELL := /bin/bash
REV := $(shell git rev-parse HEAD)
CHANGES := $(shell test -n "$$(git status --porcelain)" && echo '+CHANGES' || true)
VERSION := $(shell cat VERSION)
OS := darwin freebsd linux openbsd
ARCH := 386 amd64
LDFLAGS := -X github.com/kwilczynski/$(NAME)/$(NAME).Revision=$(REV)$(CHANGES)
GPG_SIGNING_KEY :=
SERVICE_NAME_NAME=frontend

build-container:
	docker build -t $(DOCKER_IMAGE_NAME):1.0.0 -f ./Dockerfile.prod ..
	docker run -it --rm -p 1337:80  $(DOCKER_IMAGE_NAME):1.0.0

build-dev-container:
	docker build -t $(DOCKER_IMAGE_NAME):$(TAG) -f ./Dockerfile.dev ..
	# it starts the container in interactive mode. Why is this necessary? As of version 3.4.1, react-scripts exits after start-up (unless CI mode is specified) which will cause the container to exit. Thus the need for interactive mode.
	# --rm removes the container and volumes after the container exits.
	# -v ${PWD}:/app mounts the code into the container at “/app”
	# Since we want to use the container version of the “node_modules” folder, we configured another volume: -v /app/node_modules. You should now be able to remove the local “node_modules” flavor
	# -p 3001:3000 exposes port 3000 to other Docker containers on the same network (for inter-container communication) and port 3001 to the host.
	# -e CHOKIDAR_USEPOLLING=true enables a polling mechanism via chokidar (which wraps fs.watch, fs.watchFile, and fsevents) so that hot-reloading will work
	docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true $(DOCKER_IMAGE_NAME):$(TAG) --name=$(NAME)

push-container:
	docker tag $(DOCKER_IMAGE_NAME):$(VERSION) $(DOCKER_IMAGE_NAME):latest
	docker push $(DOCKER_IMAGE_NAME):$(VERSION)
	docker push $(DOCKER_IMAGE_NAME):latest
	docker tag $(DOCKER_IMAGE_NAME):$(VERSION) quay.io/$(DOCKER_IMAGE_NAME):$(VERSION)
	docker tag $(DOCKER_IMAGE_NAME):$(VERSION) quay.io/$(DOCKER_IMAGE_NAME):latest
	docker push quay.io/$(DOCKER_IMAGE_NAME):$(VERSION)
	docker push quay.io/$(DOCKER_IMAGE_NAME):latest
	
up-dev :
	docker-compose up -d --build

up-prod :
	docker-compose -f docker-compose.prod.yml up -d --build

down : 
	docker-compose stop
