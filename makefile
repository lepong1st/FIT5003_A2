.PHONY: build-app build-fixed build-all run-app run-fixed run-all build-run build run up down

# Build each individually or both
build-app:
	docker build -t devbank ../app

build-fixed:
	docker build -t devbank-fixed ../fixed-app

build-all: build-app build-fixed

# Run each individually or both
run-app:
	docker run --rm -d -p 127.0.0.1:5000:5000 -e STUDENT_ID=30634784 --name devbank devbank

# Note: the ports were changed in app.py whilst testing. They have been changed back for the submission
# so this will no longer work
run-fixed:
	docker run --rm -d -p 127.0.0.1:4000:4000 -e STUDENT_ID=30634784 --name devbank-fixed devbank-fixed

run-all: run-app run-fixed

# Build + run shortcuts
build-run: build-all run-all

build: build-all

run: run-all

stop:
	docker stop devbank devbank-fixed

# Prefered aliases
up: build-run

down: stop