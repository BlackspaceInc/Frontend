# Makefile for releasing frontend service
#
TAG?=latest
NAME:=frontend-service
TARGET:=$(NAME)
DOCKER_REPOSITORY:=blackspaceinc
DOCKER_IMAGE_NAME:=$(DOCKER_REPOSITORY)/$(NAME)
VERSION:=$(shell grep 'VERSION' Version | awk '{ print $$3 }' | tr -d '"')

AUTH_SERVICE:=dependencies/authentication-service.yml
COMPANY_SERVICE:=dependencies/company-service.yml
NETWORKS:=dependencies/networks.yml
USER_SERVICE:=dependencies/user-service.yml
FRONTEND_SERVICE:=dependencies/frontend-service.yml

stop_test_env:
	@echo "stopping locally running containers"
	docker-compose down

up_test_env:
	@echo "starting containers via docker-compose locally"
	docker-compose -f $(AUTH_SERVICE) -f $(COMPANY_SERVICE) -f $(USER_SERVICE) -f $(FRONTEND_SERVICE) -f $(NETWORKS) config
	docker-compose -f $(AUTH_SERVICE) -f $(COMPANY_SERVICE) -f $(USER_SERVICE) -f $(FRONTEND_SERVICE) -f $(NETWORKS) up --remove-orphans

build_up_test_env:
	docker-compose -f $(AUTH_SERVICE) -f $(COMPANY_SERVICE) -f $(USER_SERVICE) -f $(FRONTEND_SERVICE) -f $(NETWORKS) build
	docker-compose -f $(AUTH_SERVICE) -f $(COMPANY_SERVICE) -f $(USER_SERVICE) -f $(FRONTEND_SERVICE) -f $(NETWORKS) up --remove-orphans

build-container:
	docker build -t $(DOCKER_IMAGE_NAME):$(VERSION) -f ./Dockerfile .

run-container: build-container
	docker run -p 3000:3000 $(DOCKER_IMAGE_NAME):$(VERSION)

push-container: build-container
	docker push $(DOCKER_IMAGE_NAME):$(VERSION)

spinup-prod-env:
	docker-compose -f docker-compose.prod.yml up

create_manifests:
	@echo "creating manifest file from compose doc."
	kompose -f docker-compose.prod.yml convert -o manifest.yaml && mv *.yaml ./deploy
