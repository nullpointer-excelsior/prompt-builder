
image=prompt-builder

build-image:
	docker build -t $(image) .

run-container:
	echo "Building $(image)-app container"
	docker run -d -p 5000:5000 --env-file=backend/.env --name $(image)-app $(image)
	docker ps

stop-container:
	docker stop $(image)-app


