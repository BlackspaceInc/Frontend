# Makefile for releasing frontend service
#
TAG?=latest
NAME:=frontend-service
TARGET:=$(NAME)
DOCKER_REPOSITORY:=blackspaceinc
DOCKER_IMAGE_NAME:=$(DOCKER_REPOSITORY)/$(NAME)
VERSION:=$(shell grep 'VERSION' Version | awk '{ print $$3 }' | tr -d '"')

build-container:
	docker build -t $(DOCKER_IMAGE_NAME):$(VERSION) -f ./Dockerfile .

run-container: build-container
	docker run -p 3000:3000 $(DOCKER_IMAGE_NAME):$(VERSION)

push-container: build-container
	docker push $(DOCKER_IMAGE_NAME):$(VERSION)

spinup-dev-env:
	docker-compose -f docker-compose.yml build && docker-compose -f docker-compose.yml up 

spinup-prod-env:
	docker-compose -f docker-compose.prod.yml up

manifests:
	@echo "creating manifest file from compose doc."
	kompose -f docker-compose.prod.yml convert -o manifest.yaml && mv *.yaml ./k8
